class Model {
  static setDate(book) {
    const curDate = new Date();

    const item = book;

    item.created = `${curDate.getFullYear()}-${
      curDate.getMonth() + 1
    }-${curDate.getDate()}`;

    return item;
  }

  static setId(book, library) {
    const item = book;

    if (library.length === 0) {
      item.id = 'b-1';
      return item;
    }

    const rejectSign = library[library.length - 1].id.replace('b-', '');

    item.id = `b-${Number(rejectSign) + 1}`;

    return item;
  }

  set library(newLibrary) {
    this.lib = JSON.stringify(newLibrary);

    localStorage.setItem('library', this.lib);
  }

  get library() {
    const storedLibrary = localStorage.getItem('library');

    let library = JSON.parse(storedLibrary);

    if (!library) library = [];

    this.library = library;

    return library;
  }

  get statistics() {
    const { library } = this;

    const stats = [];

    stats.booksNum = library.length;

    stats.readNum = library.filter((book) => book.isRead === 'true').length;

    const reducer = (prev, next) => {
      let converted = parseInt(next.pages, 10);

      if (!next.pages) converted = 0;

      return prev + converted;
    };

    stats.pagesNum = library.reduce(reducer, 0);

    return stats;
  }

  remove(id) {
    const { library } = this;

    const index = library.findIndex((book) => book.id === id);

    library.splice(index, 1);

    this.library = library;
  }

  update(newBook) {
    const { library } = this;

    const index = library.findIndex((book) => book.id === newBook.id);

    library[index] = newBook;

    this.library = library;
  }

  setRead(id, status) {
    const book = this.getBook(id);

    if (!status) book.finish = '';

    book.isRead = status ? 'true' : 'false';

    this.update(book);
  }

  getBook(id) {
    const { library } = this;

    return library.find((book) => book.id === id);
  }

  add(book) {
    const { library } = this;

    this.constructor.setDate(book);

    this.constructor.setId(book, library);

    library.push(book);

    localStorage.setItem('library', JSON.stringify(library));
  }
}

export default Model;
