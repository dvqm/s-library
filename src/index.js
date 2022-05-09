import UI from './UI';
import Shelve from './Model';
import UiCreator from './UiCreator';
import EventCreator from './EventCreator';

const myLibrary = [];
const deletedBooks = [];

const ui = new UI();
const shelve = new Shelve(myLibrary, deletedBooks);

shelve.plugBook();
shelve.plugBook();
shelve.plugBook();

const mainPage = new UiCreator(
  '#library',
  ui.settings().wrap,
  ui.statistic(),
  ui.cardView(myLibrary),
  ui.addBookBtn(),
);

mainPage.render();

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

bookBtn.event().add();

const card = new EventCreator({
  element: '#toggleCard',
  target: '.statistic',
  inject: 'after',
  type: 'click',
  replaceBeforeEvent: '#view',
  ui() {
    return ui.cardView(myLibrary);
  },
});

const table = new EventCreator({
  element: '#toggleTable',
  target: '.statistic',
  inject: 'after',
  type: 'click',
  replaceBeforeEvent: '#view',
  ui() {
    return ui.tableView(myLibrary);
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
