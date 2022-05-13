import data from './data.json';

class Model {
  static setId(book) {
    const library = this.getLibrary();
    const bookCopy = book;
    bookCopy.id = `mb-${library.length + 1}`;
    return bookCopy;
  }

  static setDate(book) {
    const curDate = new Date();
    const bookCopy = book;
    bookCopy.created = `${curDate.getFullYear()} -${curDate.getMonth()} -${
      curDate.getDay
    } : ${curDate.getHours()} -${curDate.getMinutes()}`;
    return bookCopy;
  }

  static getLibrary() {
    const storedLibrary = localStorage.getItem('library');
    let library = JSON.parse(storedLibrary);
    if (!library) library = [];
    return library;
  }

  get library() {
    return this.constructor.getLibrary();
  }

  addBook(book) {
    const library = this.constructor.getLibrary();
    this.constructor.setId(book);
    this.constructor.setDate(book);
    library.push(book);
    const libToString = JSON.stringify(library);
    localStorage.setItem('library', libToString);
  }

  plugBook(count) {
    const bookData = data.exampleBook;
    for (let i = 0; i < count; i++) {
      this.addBook(bookData);
    }
    console.log(JSON.parse(localStorage.getItem('library')));
  }
}

export default Model;
