import Book from './Book';
import FieldChecks from './FieldChecks';
import data from './json/data.json';
import Model from './Model';
import UI from './UI';
import UiCreator from './UiCreator';

class Events {
  static uiCreate = new UiCreator();

  static ui = new UI(data);

  static model = new Model();

  static fieldChecks = new FieldChecks();

  static mainPage() {
    const wrapper = this.ui.wrapper();

    this.uiCreate.render(
      wrapper,
      this.ui.settings(),
      this.ui.statistics(this.model.statistics),
      this.ui.cardView(this.model.library),
      this.ui.addBookForm(),
      this.ui.confirmDelete(),
      this.ui.addBookBtn()
    );
    return wrapper;
  }

  static updateStatistics() {
    const stats = document.querySelector('.statistics');

    stats.replaceWith(this.ui.statistics(this.model.statistics));
  }

  static confirmDelete(id, card) {
    const dialog = document.querySelector('#deleteDialog');

    dialog.showModal();

    const deleteBtn = dialog.querySelector('#delete');

    const deleteEvent = () => {
      dialog.close();

      this.model.remove(id);

      card.remove();

      this.updateStatistics();
    };

    deleteBtn.addEventListener('click', deleteEvent, { once: true });

    const skipBtn = dialog.querySelector('#skip');

    const skipEvent = () => {
      dialog.close();
    };

    skipBtn.addEventListener('click', skipEvent, { once: true });
  }

  static bookEvents(node) {
    const replaceBtn = (prev, next, bundle, event, listener) => {
      const prevBtn = bundle.querySelector(`.${prev}`);

      const btn = document.createElement('button');

      btn.classList = prevBtn.classList;

      btn.classList.remove(prev);

      btn.classList.add(next);

      btn.dataset.id = prevBtn.dataset.id;

      btn.addEventListener(event, listener);

      prevBtn.replaceWith(btn);
    };

    const setEditMode = (fields, element) => {
      fields.forEach((set) => {
        const [field, type] = set;

        const el = element.querySelector(`.${field}`);

        const input = document.createElement('input');

        input.className = field;

        input.type = type;
        if (el && element.tagName === 'DIV') {
          input.value = el.textContent;

          el.replaceWith(input);
        }

        if (el && element.tagName === 'TR') {
          input.value = el.textContent;

          el.textContent = '';

          el.append(input);
        }
      });
    };

    const setViewMode = (id, element) => {
      const book = [this.model.getBook(id)];

      let bookUi;

      if (element.tagName === 'DIV') bookUi = this.ui.cardView(book).firstChild;

      if (element.tagName === 'TR') bookUi = this.ui.tableView(book).lastChild;

      this.bookEvents(bookUi);

      element.replaceWith(bookUi);
    };

    const changeClassName = (element, prev, next) => {
      element.classList.add(next);

      element.classList.remove(prev);
    };

    const readChangeColor = (event, status) => {
      const card = event.target.parentElement;

      if (card.tagName === 'DIV' && status)
        changeClassName(card, 'unread', 'read');
      if (card.tagName === 'DIV' && !status)
        changeClassName(card, 'read', 'unread');

      if (card.tagName === 'TD' && status)
        changeClassName(card.parentElement, 'unread', 'read');
      if (card.tagName === 'TD' && !status)
        changeClassName(card.parentElement, 'read', 'unread');
    };

    // set book read or unread mode

    const isReadBtns = node.querySelectorAll('.isRead');

    const isItRead = (e) => {
      const { id } = e.target.dataset;

      const status = e.target.checked;

      readChangeColor(e, status);

      this.model.setRead(id, status);

      this.updateStatistics();
    };

    isReadBtns.forEach((btn) => btn.addEventListener('click', isItRead));

    // set book remove mode

    const deleteBtns = node.querySelectorAll('.delete');

    const remove = (e) => {
      const card = e.target.parentElement.parentElement;

      const { id } = e.target.dataset;

      this.confirmDelete(id, card);
    };

    deleteBtns.forEach((btn) => btn.addEventListener('click', remove));

    // set edit mode with save or cancel buttons

    const editBtns = node.querySelectorAll('.edit');

    const edit = (e) => {
      const card = e.target.parentElement.parentElement;

      const settings = data.tools.editableFields;

      setEditMode(settings, card);

      const { update, del, store, abort } = data.tools.changeableBtns;

      const save = (event) => {
        const updatedFields = {};

        settings.forEach((field) => {
          const name = field[0];

          let el = card.querySelector(`.${name}`);

          if (el.tagName === 'TD') el = el.firstChild;

          updatedFields[name] = el.value;
        });

        const book = this.model.getBook(event.target.dataset.id);

        Object.entries(updatedFields).forEach((entry) => {
          const [key, value] = entry;

          if (value.length > 0) book[key] = value;
          else delete book[key];
        });

        this.model.update(book);

        setViewMode(event.target.dataset.id, card);

        this.updateStatistics();
      };

      replaceBtn(update, store, card, 'click', save);

      const cancel = (event) => {
        setViewMode(event.target.dataset.id, card);
      };

      replaceBtn(del, abort, card, 'click', cancel);
    };

    editBtns.forEach((btn) => btn.addEventListener('click', edit));
  }

  changeView(node) {
    const get = this.constructor;

    const cardBtn = node.querySelector('#toggleCard');

    const tableBtn = node.querySelector('#toggleTable');

    const changeView = (secBtn, newView) => (e) => {
      e.target.setAttribute('disabled', true);

      secBtn.removeAttribute('disabled');

      const view = node.querySelector('#view');

      const mock = get.ui[newView](get.model.library);

      get.bookEvents(mock);

      view.replaceWith(mock);
    };

    const card = changeView(tableBtn, 'cardView');

    const table = changeView(cardBtn, 'tableView');

    cardBtn.addEventListener('click', card);

    tableBtn.addEventListener('click', table);

    return get.bookEvents(node);
  }

  addBook(node) {
    const addBtn = node.querySelector('#addBook');

    const openDialog = () => {
      const dialog = document.querySelector('#dialog');

      dialog.showModal();
    };

    addBtn.addEventListener('click', openDialog);

    return node;
  }

  form(node) {
    const get = this.constructor;

    const saveBtn = node.querySelector('#save');

    const dialog = node.querySelector('#dialog');

    const save = (e) => {
      const book = new Book(node);

      const newBook = book.create();

      get.model.add(newBook);

      dialog.close();

      e.preventDefault();

      const libNode = node.querySelector('#view');

      let lastBook;

      if (libNode.classList.contains('cards')) {
        lastBook = get.ui.cardView([get.model.library.pop()]).firstChild;
      } else if (libNode.classList.contains('table')) {
        lastBook = get.ui.tableView([get.model.library.pop()]).lastChild;
      }

      get.bookEvents(lastBook);

      libNode.append(lastBook);

      get.updateStatistics(node);
    };

    saveBtn.addEventListener('click', save);

    const cancelBtn = node.querySelector('#cancel');

    const cancel = () => {
      const book = new Book(node);

      book.clear();

      dialog.close();
    };

    cancelBtn.addEventListener('click', cancel);

    return node;
  }

  testView() {
    const wrapper = this.constructor.mainPage();

    this.constructor.ui.render(document.body, wrapper);

    this.changeView(wrapper);

    this.form(wrapper);

    this.addBook(wrapper);

    this.constructor.fieldChecks.formFields(wrapper);
  }
}

export default Events;
