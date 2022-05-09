class EventCreator {
  constructor(orders) {
    this.orders = orders;
  }

  append(node) {
    const targetValue = this.orders.target;
    const target = document.querySelector(targetValue);
    target.append(node);
  }

  after(node) {
    const targetValue = this.orders.target;
    const target = document.querySelector(targetValue);
    return target.after(node);
  }

  prepend(node) {
    const targetValue = this.orders.target;
    const target = document.querySelector(targetValue);
    return target.prepend(node);
  }

  replace() {
    const elementValue = this.orders.replace;
    if (document.querySelector(elementValue)) {
      const element = document.querySelector(elementValue);
      element.remove();
    }
  }

  event() {
    const element = document.querySelector(this.orders.element);

    const action = (e) => {
      const inject = this.orders.inject;
      const ui = this.orders.ui;
      if (ui) this[inject](ui());

      this.replace();

      const nextAction = this.orders.nextAction;
      if (nextAction) nextAction();
    };

    const add = () => {
      const type = this.orders.type;
      const eventOptions = this.orders.eventOptions;
      element.addEventListener(type, action, eventOptions);
    };
    return { add };
  }
}

export default EventCreator;
