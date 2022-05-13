import UI from './UI';
import Book from './Book';
import Model from './Model';
import UiCreator from './UiCreator';
import EventCreator from './EventCreator';

const ui = new UI();
const shelve = new Model();
// shelve.plugBook(10);
// localStorage.removeItem('library');

const mainPage = new UiCreator(
  '#library',
  ui.settings().wrap,
  ui.statistic(),
  ui.cardView(shelve.library),
  ui.addBookBtn(),
);

mainPage.render();

const formSaveBtn = new EventCreator({
  element: '#save',
  type: 'click',
  eventOptions: { once: true },
  nextAction() {
    const book = new Book();
    shelve.addBook(book);
  },
});

const formCloseBtn = new EventCreator({
  element: '#close',
  target: '#library',
  inject: 'append',
  type: 'click',
  replaceAfterEvent: '#form',
  eventOptions: { once: true },
  ui() {
    return ui.addBookBtn();
  },
  nextAction() {
    bookBtn.event().add();
  },
});

const bookBtn = new EventCreator({
  element: '#addBook',
  target: '#addBook',
  inject: 'after',
  type: 'click',
  eventOptions: { once: true },
  replaceAfterEvent: '#addBook',
  ui() {
    return ui.addBookForm();
  },
  nextAction() {
    const dialog = document.querySelector('#form');
    dialog.showModal();
    formCloseBtn.event().add();
    formSaveBtn.event().add();
  },
});

bookBtn.event().add();
const card = new EventCreator({
  element: '#toggleCard',
  target: '.statistic',
  inject: 'after',
  type: 'click',
  replaceBeforeEvent: '#view',
  ui() {
    return ui.cardView(shelve.library);
  },
});

const table = new EventCreator({
  element: '#toggleTable',
  target: '.statistic',
  inject: 'after',
  type: 'click',
  replaceBeforeEvent: '#view',
  ui() {
    return ui.tableView(shelve.library);
  },
});

const toggleViewFold = new EventCreator({
  element: '.dropdown',
  replaceAfterEvent: '.dropdown-content',
  type: 'mouseleave',
  eventOptions: { once: true },
  nextAction() {
    toggleViewUnfold.event().add();
  },
});

const toggleViewUnfold = new EventCreator({
  element: '#toggleView',
  target: '#toggleView',
  inject: 'after',
  type: 'mouseenter',
  eventOptions: { once: true },
  ui() {
    return ui.settings().dropdown;
  },
  nextAction() {
    toggleViewFold.event().add();
    table.event().add();
    card.event().add();
  },
});

toggleViewUnfold.event().add();
