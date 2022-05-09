import data from './data.json';

class Shelve {
  constructor(myLibrary, deletedBooks) {
    this.myLibrary = myLibrary;
    this.deletedBooks = deletedBooks;
  }

  plugBook() {
    const bookData = data.exampleBook;
    this.myLibrary.push(bookData);
  }
}

export default Shelve;