import UI from './ui';
import Book from '../Book';
import Model from '../Model';
import UiCreator from './UiCreator';

const ui = new UI();
const tools = new Model();

// localStorage.removeItem('library');

const statistic = () => {
  const books = document.querySelector('#booksNum');
  books.textContent = tools.statistic.books;

  const read = document.querySelector('#readNum');
  read.textContent = tools.statistic.read;

  const pages = document.querySelector('#pagesNum');
  pages.textContent = tools.statistic.pages;
};

const bookEvents = (node, book) => {
  const card = node.book(book);

  const getIndex = (e, offset = 0) => {
    const pointedCard = e.path.filter((el) => el === card)[0];

    const index = [...node.shell.children].indexOf(pointedCard);

    return index + offset;
  };

  const isReadAction = (e) => {
    const newBook = { ...book };

    newBook.isRead = !newBook.isRead;

    let index = getIndex(e);

    const updatedBook = new UiCreator(node.shell, bookEvents(node, newBook));

    updatedBook.insert(index);

    if (node.shell.id === 'table') index = getIndex(e, -1);

    tools.update(newBook, index);
    statistic();
  };

  const isRead = card.querySelector('.isRead');

  isRead.addEventListener('click', isReadAction);

  const editAction = (e) => {
    const editBook = node.shell.children[getIndex(e)];
    ui.editCard(editBook);

    const save = () => {
      const newBook = new Book();

      newBook.edit(editBook);

      let index = getIndex(e);

      if (node.shell.id === 'table') index = getIndex(e, -1);

      tools.update(newBook, index);

      const updatedBook = new UiCreator(
        ui.view.shell,
        bookEvents(ui.view, tools.library[index])
      );

      index = getIndex(e);

      updatedBook.insert(index);
      statistic();
    };

    const close = () => {
      let index = getIndex(e);
      if (node.shell.id === 'table') index = getIndex(e, -1);

      const oldBook = new UiCreator(
        node.shell,
        bookEvents(node, tools.library[index])
      );

      index = getIndex(e);
      oldBook.insert(index);
    };

    const saveBtn = editBook.querySelector('.save');
    saveBtn.addEventListener('click', save);

    const closeBtn = editBook.querySelector('.cancel');
    closeBtn.addEventListener('click', close);
  };

  const deleteAction = (e) => {
    let index = getIndex(e);

    const deletedBook = new UiCreator(node.shell, bookEvents(node, book));

    deletedBook.remove(index);

    index = getIndex(e, -1);

    tools.remove(index);
    statistic();
  };

  const actionBtns = card.querySelectorAll('.actionBtn');

  const editBtn = actionBtns[0];

  editBtn.addEventListener('click', editAction);

  const deleteBtn = actionBtns[1];

  deleteBtn.addEventListener('click', deleteAction);

  return card;
};

const modelView = (node) => {
  const view = node.shell;

  const { library } = tools;

  library.map((b) => {
    const book = bookEvents(node, b);

    return view.append(book);
  });

  return view;
};

const settings = (node) => {
  const target = node.wrap.querySelector('.toggleView');

  const cardSet = () => {
    const sibling = document.querySelector('.statistic');

    sibling.nextSibling.remove();

    ui.view = ui.cardView;

    sibling.after(modelView(ui.view));
  };

  const tableSet = () => {
    const sibling = document.querySelector('.statistic');

    sibling.nextSibling.remove();

    ui.view = ui.tableView;

    sibling.after(modelView(ui.view));
  };

  const closeDropdown = () => {
    node.dropdown.remove();
  };

  const openDropdown = () => {
    target.after(node.dropdown);

    node.dropdown.addEventListener('mouseleave', closeDropdown, { once: true });

    const cardBtn = node.dropdown.querySelector('#toggleCard');

    cardBtn.addEventListener('click', cardSet);

    const tableBtn = node.dropdown.querySelector('#toggleTable');

    tableBtn.addEventListener('click', tableSet);
  };

  target.addEventListener('mouseenter', openDropdown);

  return node.wrap;
};

const addBookForm = (node) => {
  const bookBtn = new UiCreator(ui.library, addBookBtn(ui.addBookBtn));

  const close = () => {
    node.close();

    bookBtn.render();

    const book = new Book();

    book.clear();
  };

  const save = () => {
    const newBook = new Book();

    tools.add(newBook);

    const book = new UiCreator(ui.view.shell, bookEvents(ui.view, newBook));

    book.render();

    close();
    statistic();
  };

  const closeBtn = node.querySelector('#close');

  closeBtn.addEventListener('click', close);

  node.addEventListener('cancel', close);

  const saveBtn = node.querySelector('#save');

  saveBtn.addEventListener('click', save);

  return node;
};

const addBookBtn = (node) => {
  const openForm = () => {
    const form = document.querySelector('#form');

    form.showModal();

    node.remove();
  };

  node.addEventListener('click', openForm);

  return node;
};

const mainPage = new UiCreator(
  ui.library,

  settings(ui.settings),

  ui.statistic,

  modelView(ui.view),

  addBookForm(ui.addBookForm),

  addBookBtn(ui.addBookBtn)
);

mainPage.render();

statistic();
