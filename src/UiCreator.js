class UiCreator {
  constructor(element, ...rest) {
    this.element = document.querySelector(element);
    this.rest = [...rest];
  }

  render() {
    return this.rest.forEach((i) => {
      this.element.append(i);
    });
  }

  insert(index) {
    const elements = this.element.childNodes;
    return this.rest.forEach((i) => {
      this.element.replaceChild(i, elements[index]);
    });
  }

  remove(index) {
    const elements = this.element.childNodes;
    elements[index].remove();
  }
}

export default UiCreator;
