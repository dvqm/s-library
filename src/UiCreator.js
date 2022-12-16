class UiCreator {
  static copy(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  static ref(name, obj) {
    let result;

    const nameSearch = (prop) => {
      if (name in prop) result = prop[name];

      Object.values(prop).forEach((value) => {
        if (typeof value === 'object') return nameSearch(value);
        return result;
      });
    };
    nameSearch(obj);

    return result;
  }

  static preciseInsert(object, successor, key, value) {
    const newObject = {};

    Object.keys(object).forEach((property) => {
      if (property === successor) {
        newObject[key] = value;

        newObject[property] = object[property];
      } else newObject[property] = object[property];
    });

    return newObject;
  }

  static node(data) {
    if (Object.keys(data).length === 0) return '';

    const element = this.copy(data);

    const { tag } = element;

    const parent = document.createElement(tag);

    Object.entries(element).forEach((prop) => {
      const [key, value] = prop;

      if (key !== 'tag' || key !== 'c' || key !== 's') parent[key] = value;
      if (key.includes('data-')) parent.setAttribute(key, value);
      if (key === 'required' && value === 'false') parent.removeAttribute(key);
    });

    const blank = this.copy(data);

    if (blank.c) {
      const { c } = blank;

      Object.values(c).forEach((node) => {
        parent.append(this.node(node));
      });
    }

    return parent;
  }

  static composer(...handlers) {
    return [...handlers].reduce((prev, next) => next(prev), {});
  }

  render(pointer, ...node) {
    return pointer.append(...node);
  }
}

export default UiCreator;
