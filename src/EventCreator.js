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

  static replace(trigger) {
    const elementValue = trigger;
    if (document.querySelector(elementValue)) {
      const element = document.querySelector(elementValue);
      element.remove();
    }
  }

  event() {
    const element = document.querySelector(this.orders.element);

    const action = () => {
      const triggerBefore = this.orders.replaceBeforeEvent;
      if (triggerBefore) this.constructor.replace(triggerBefore);

      const { inject } = this.orders;
      const { ui } = this.orders;
      if (ui) this[inject](ui());

      const { nextAction } = this.orders;
      if (nextAction) this.orders.nextAction();

      const triggerAfter = this.orders.replaceAfterEvent;
      if (triggerAfter) this.constructor.replace(triggerAfter);
    };

    const add = () => {
      const { type } = this.orders;
      const { eventOptions } = this.orders;
      element.addEventListener(type, action, eventOptions);
    };
    return { add };
  }
}

export default EventCreator;
