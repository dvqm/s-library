class UiCreator {
  static objCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  composer(data, ...handlers) {
    const obj = this.constructor.objCopy(data);
    return [...handlers].reduce((prev, next) => next(prev), obj);
  }

  nodeCreate(uiData) {
    const element = this.constructor.objCopy(uiData);

    const { tag } = element;

    const parent = document.createElement(tag);

    Object.entries(element).forEach((prop) => {
      const [key, value] = prop;

      if (key !== 'tag' || key !== 'c' || key !== 's') parent[key] = value;
      if (key.includes('data-')) parent.setAttribute(key, value);
    });

    const blank = this.constructor.objCopy(uiData);

    if (blank.c) {
      const { c } = blank;

      Object.values(c).forEach((node) => {
        parent.append(this.nodeCreate(node));
      });
    }

    return parent;
  }

  render(pointer, node) {
    return pointer.append(node);
  }
}

export default UiCreator;
