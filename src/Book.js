class Book {
  constructor(node) {
    this.inputs = node.querySelectorAll('.addBookForm label input');
  }

  create() {
    const book = {};

    this.inputs.forEach((input) => {
      if (input.id === 'isRead' && input.checked) {
        book[input.id] = 'true';
      } else if (input.id === 'isRead' && !input.checked) {
        book[input.id] = 'false';
      } else {
        book[input.id] = input.value;
      }
    });

    return book;
  }
}

export default Book;
