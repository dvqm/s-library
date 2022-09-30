class FieldsValidation {
  constructor(node) {
    this.form = node.querySelector('.addBookForm');

    this.inputs = node.querySelectorAll('.addBookForm input');
  }

  init() {
    this.entryValidation();

    this.submitValidation();

    this.embeddedValidation();
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
      if (input.type === 'text') {
        input.minLength = 3;

        input.maxLength = 60;
      }

      if (input.type === 'number') {
        input.min = 1;

        input.max = 1000;
      }
    });
  }

  fieldValidation(field) {
    const ctor = this.constructor;

    const strToDate = (str) => new Date(str);

    const dateIsValid = (date) => date instanceof Date && !isNaN(date);

    const { publish, start, finish } = this.form;

    const publishDate = strToDate(publish.value);

    const startDate = strToDate(start.value);

    const finishDate = strToDate(finish.value);

    const publishValidation = () => {
      switch (true) {
        case dateIsValid(startDate) && publishDate > startDate:
          ctor.setStatus(field, 'greater', start.id);
          break;

        case dateIsValid(finishDate) && publishDate > finishDate:
          ctor.setStatus(field, 'greater', finish.id);
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
          ctor.setStatus(field, 'less', publish.id);
          break;

        case dateIsValid(finishDate) && startDate > finishDate:
          ctor.setStatus(field, 'greater', finish.id);
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
          ctor.setStatus(field, 'less', publish.id);
          break;

        case dateIsValid(startDate) && startDate > finishDate:
          ctor.setStatus(field, 'less', start.id);
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

      const { isRead } = this.form;

      isRead.checked = true;
    };

    switch (true) {
      case field.id === 'publish' && dateIsValid(publishDate):
        publishValidation();
        break;

      case field.id === 'start' && dateIsValid(publishDate):
        startValidation();
        break;

      case field.id === 'finish' && dateIsValid(finishDate):
        finishValidation();
        break;

      default:
    }
  }

  static setStatus(element, comparison, comparedElement) {
    element.setCustomValidity(
      `${element.id} date can't be ${comparison} than ${comparedElement} date`
    );

    if (comparison.length === 0) element.setCustomValidity('');

    element.reportValidity();
  }
}

export default FieldsValidation;
