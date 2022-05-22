import data from './data.json';

class Book {
  constructor() {
    const getFormData = (id, property) => {
      const element = document.getElementById(id);
      this[id] = element[property];
    };

    const field = data.addBookForm.field.inputData;

    getFormData(field.author.id, 'value');
    getFormData(field.title.id, 'value');
    getFormData(field.pages.id, 'value');
    getFormData(field.publish.id, 'value');
    getFormData(field.start.id, 'value');
    getFormData(field.finish.id, 'value');
    getFormData(field.isRead.id, 'checked');
  }

  clear() {
    const wrapId = data.addBookForm.wrap.id;
    const inputData = data.addBookForm.field.input.tag;
    const form = document.querySelectorAll(`#${wrapId} ${inputData}`);
    form.forEach((child) => {
      const input = child;
      input.value = '';
      input.checked = false;
    });
  }
}
export default Book;
