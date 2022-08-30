import FieldChecks from './FieldChecks';
import data from './json/data.json';
import Model from './Model';
import UI from './UI';
import UiCreator from './UiCreator';

class Events {
  static uiCreate = new UiCreator();

  static ui = new UI(data);

  static model = new Model();

  static FieldChecks = new FieldChecks();

  static mainPage() {
    const wrapper = this.ui.wrapper();

    this.uiCreate.render(
      wrapper,
      this.ui.settings(),
      this.ui.statistics(),
      this.ui.cardView(this.model.library),
      this.ui.addBookForm(),
      this.ui.addBookBtn()
    );
    return wrapper;
  }

  static viewManage(node) {
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

      this.viewManage(bookUi);

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
    };

    isReadBtns.forEach((btn) => btn.addEventListener('click', isItRead));

    // set book remove mode

    const deleteBtns = node.querySelectorAll('.delete');

    const remove = (e) => {
      const card = e.target.parentElement.parentElement;

      const { id } = e.target.dataset;

      this.model.remove(id);

      card.remove();
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

      get.viewManage(mock);

      view.replaceWith(mock);
    };

    const card = changeView(tableBtn, 'cardView');

    const table = changeView(cardBtn, 'tableView');

    cardBtn.addEventListener('click', card);

    tableBtn.addEventListener('click', table);

    return get.viewManage(node);
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
    const saveBtn = node.querySelector('#save');

    const dialog = node.querySelector('#dialog');

    const save = () => {
      dialog.close();
    };

    saveBtn.addEventListener('click', save);

    const cancelBtn = node.querySelector('#cancel');

    const cancel = () => {
      dialog.close();
    };

    cancelBtn.addEventListener('click', cancel);

    return node;
  }

  testView() {
    const wrapper = this.constructor.mainPage();

    this.constructor.ui.render(document.body, wrapper);

    this.changeView(wrapper);

    this.addBook(wrapper);
  }
}

export default Events;
