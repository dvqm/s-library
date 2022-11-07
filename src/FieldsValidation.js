class FieldsValidation {
  constructor(form) {
    this.form = form;

    this.inputs = form.querySelectorAll('input');
  }

  get ifForm() {
    return this.form.tagName === 'FORM';
  }

  get checkValidity() {
    const inputs = this.form.querySelectorAll('input');

    let validity = true;

    inputs.forEach((input) => {
      if (!input.validity.valid) {
        validity = false;
      }
    });

    return validity;
  }

  get selector() {
    return this.ifForm ? '#' : '.';
  }

  static get attr() {
    return this.ifForm ? 'id' : 'className';
  }

  static setStatus(element, comparison, comparedElement) {
    element.setCustomValidity(
      `${
        element[this.attr]
      } date can't be ${comparison} than ${comparedElement} date`
    );

    if (comparison.length === 0) element.setCustomValidity('');

    element.reportValidity();
  }

  init() {
    this.entryValidation();

    if (this.constructor.ifForm) this.submitValidation();

    this.embeddedValidation();

    this.isReadManage();
  }

  entryValidation() {
    this.inputs.forEach((input) => {
      input.addEventListener('input', () => {
        this.fieldValidation(input);
      });
    });
  }

  submitValidation() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();

      this.inputs.forEach((input) => {
        this.fieldValidation(input);
      });
    });
  }

  embeddedValidation() {
    this.inputs.forEach((input) => {
      const field = input;

      if (input.type === 'text') {
        field.minLength = 3;

        field.maxLength = 60;
      }

      if (input.type === 'number') {
        field.min = 1;

        field.max = 1000;
      }
    });
  }

  isReadManage() {
    const isRead = this.form.querySelector(`input${this.selector}isRead`);

    const finish = this.form.querySelector(`input${this.selector}finish`);

    isRead.addEventListener('click', () => {
      if (!isRead.checked) {
        finish.value = '';

        finish.setCustomValidity('');
      }
    });

    finish.addEventListener('input', () => {
      if (finish.value) isRead.checked = true;
    });
  }

  fieldValidation(field) {
    const ctor = this.constructor;

    const strToDate = (str) => new Date(str);

    const dateIsValid = (date) => date instanceof Date && !isNaN(date);

    const publish = this.form.querySelector(`${this.selector}publish`);
    const start = this.form.querySelector(`${this.selector}start`);
    const finish = this.form.querySelector(`${this.selector}finish`);

    const publishDate = strToDate(publish.value);

    const startDate = strToDate(start.value);

    const finishDate = strToDate(finish.value);

    const publishValidation = () => {
      switch (true) {
        case dateIsValid(startDate) && publishDate > startDate:
          ctor.setStatus(field, 'greater', start[ctor.attr]);
          break;

        case dateIsValid(finishDate) && publishDate > finishDate:
          ctor.setStatus(field, 'greater', finish[ctor.attr]);
          break;

        case dateIsValid(startDate) &&
          dateIsValid(finishDate) &&
          startDate > finishDate:
          ctor.setStatus(field, '');
          break;

        default:
          ctor.setStatus(publish, '');
          ctor.setStatus(start, '');
          ctor.setStatus(finish, '');
      }
    };

    const startValidation = () => {
      switch (true) {
        case dateIsValid(publishDate) && publishDate > startDate:
          ctor.setStatus(field, 'less', publish[ctor.attr]);
          break;

        case dateIsValid(finishDate) && startDate > finishDate:
          ctor.setStatus(field, 'greater', finish[ctor.attr]);
          break;

        case dateIsValid(publishDate) &&
          dateIsValid(finishDate) &&
          publishDate > finishDate:
          ctor.setStatus(field, '');
          break;

        default:
          ctor.setStatus(publish, '');
          ctor.setStatus(start, '');
          ctor.setStatus(finish, '');
      }
    };

    const finishValidation = () => {
      switch (true) {
        case dateIsValid(publishDate) && publishDate > finishDate:
          ctor.setStatus(field, 'less', publish[ctor.attr]);
          break;

        case dateIsValid(startDate) && startDate > finishDate:
          ctor.setStatus(field, 'less', start[ctor.attr]);
          break;

        case dateIsValid(publishDate) &&
          dateIsValid(startDate) &&
          publishDate > startDate:
          ctor.setStatus(field, '');
          break;

        default:
          ctor.setStatus(publish, '');
          ctor.setStatus(start, '');
          ctor.setStatus(finish, '');
      }
    };

    switch (true) {
      case field[ctor.attr].includes('publish') && dateIsValid(publishDate):
        publishValidation();
        break;

      case field[ctor.attr].includes('start') && dateIsValid(publishDate):
        startValidation();
        break;

      case field[ctor.attr].includes('finish') && dateIsValid(finishDate):
        finishValidation();
        break;

      default:
    }
  }
}

export default FieldsValidation;
