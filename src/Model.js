class Model {
  static setDate(book) {
    const curDate = new Date();

    const bookCopy = book;

    bookCopy.created = `${curDate.getFullYear()}-${curDate.getMonth()}-${curDate.getDay()}`;

    return bookCopy;
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

  get statistic() {
    const { library } = this;

    const books = library.length;

    const read = library.filter((book) => book.isRead === true).length;

    const reducer = (prev, next) => {
      let converted = parseInt(next.pages, 10);

      if (!next.pages) converted = 0;

      return prev + converted;
    };

    const pages = library.reduce(reducer, 0);

    return { books, read, pages };
  }

  remove(index) {
    const { library } = this;

    library.splice(index, 1);

    this.library = library;
  }

  update(newBook, index) {
    const { library } = this;

    const newBookEntries = Object.entries(newBook);

    newBookEntries.forEach((prop) => {
      library[index][prop[0]] = prop[1];
    });

    this.library = library;
  }

  add(book) {
    const { library } = this;

    this.constructor.setDate(book);

    library.push(book);

    const libToString = JSON.stringify(library);

    localStorage.setItem('library', libToString);
  }
}

export default Model;
