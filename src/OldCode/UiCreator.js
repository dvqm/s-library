class UiCreator {
  constructor(node, ...rest) {
    this.node = node;
    this.rest = [...rest];
  }

  render() {
    return this.rest.forEach((i) => {
      this.node.append(i);
    });
  }

  insert(index) {
    const elements = this.node.childNodes;
    return this.rest.forEach((i) => {
      this.node.replaceChild(i, elements[index]);
    });
  }

  remove(index) {
    const elements = this.node.childNodes;
    elements[index].remove();
  }
}

export default UiCreator;
