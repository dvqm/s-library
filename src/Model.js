class Model {
  static setDate(book) {
    const curDate = new Date();
    const bookCopy = book;
    bookCopy.created = `${curDate.getFullYear()}-${curDate.getMonth()}-${curDate.getDay()}`;
    return bookCopy;
  }

  static getLibrary() {
    const storedLibrary = localStorage.getItem('library');
    let library = JSON.parse(storedLibrary);
    if (!library) library = [];
    return library;
  }

  set library(newLibrary) {
    this.lib = JSON.stringify(newLibrary);
    localStorage.setItem('library', this.lib);
  }

  get library() {
    return this.constructor.getLibrary();
  }

  remove(index) {
    const library = this.constructor.getLibrary();
    library.splice(index, 1);
    this.library = library;
  }

  update(newBook, index) {
    const library = this.constructor.getLibrary();
    const newBookEntries = Object.entries(newBook);
    newBookEntries.forEach((prop) => {
      library[index][prop[0]] = prop[1];
    });
    this.library = library;
  }

  add(book) {
    const library = this.constructor.getLibrary();
    this.constructor.setDate(book);
    library.push(book);
    const libToString = JSON.stringify(library);
    localStorage.setItem('library', libToString);
  }
}

export default Model;
