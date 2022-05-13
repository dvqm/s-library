import data from './data.json';

class Book {
  constructor() {
    const getFormData = (id) => {
      const element = document.getElementById(id);
      this.book[id] = element.value;
    };

    const field = data.addBookForm.field.inputData;

    this.book = {};
    getFormData(field.author.id);
    getFormData(field.title.id);
    getFormData(field.pages.id);
    getFormData(field.publish.id);
    getFormData(field.start.id);
    getFormData(field.finish.id);
    getFormData(field.isRead.id);
  }
}
export default Book;
