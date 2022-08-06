class Model {
  static setDate(book) {
    const curDate = new Date();

    const item = book;

    item.created = `${curDate.getFullYear()}-${
      curDate.getMonth() + 1
    }-${curDate.getDay()}`;

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
      const [key, value] = prop;

      library[index][key] = value;
    });

    this.library = library;
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
