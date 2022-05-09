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
}

export default UiCreator;
