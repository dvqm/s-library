import UI from './UI';
import data from './json/data.json';
import Model from './Model';
import UiCreator from './UiCreator';

class Events {
  static uiCreate = new UiCreator();

  static ui = new UI(data);

  static model = new Model();

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

    const isReadBtns = node.querySelectorAll('.isRead');

    const deleteBtns = node.querySelectorAll('.delete');

    const editBtns = node.querySelectorAll('.edit');

    const isItRead = (e) => {
      const { id } = e.target.dataset;

      const status = e.target.checked;

      this.model.setRead(id, status);
    };

    const remove = (e) => {
      const card = e.target.parentElement.parentElement;

      const { id } = e.target.dataset;

      this.model.remove(id);

      card.remove();
    };

    const edit = (e) => {
      const card = e.target.parentElement.parentElement;

      const settings = data.tools.editableFields;

      settings.forEach((set) => {
        const [field, type] = set;

        const el = card.querySelector(`.${field}`);

        const input = document.createElement('input');

        input.className = field;

        input.type = type;

        if (el) {
          input.value = el.textContent;

          if (el.tagName === 'SPAN') {
            el.replaceWith(input);
          }

          if (el.tagName === 'TD') {
            el.textContent = '';

            el.append(input);
          }
        }
      });

      const { update, del, store, abort } = data.tools.changeableBtns;

      const save = (event) => {
        const updatedFields = {};

        settings.forEach((field) => {
          const name = field[0];

          let el = card.querySelector(`.${name}`);

          if (el.tagName === 'TD') el = el.firstChild;

          updatedFields[name] = el.value;

          const span = document.createElement('span');

          span.className = el.className;

          span.textContent = el.value;

          if ((name === 'start' || name === 'finish') && el.value.length < 1) {
            span.textContent = '--/--/--';
          }

          el.replaceWith(span);
        });

        const book = this.model.getBook(event.target.dataset.id);

        Object.keys(book).forEach((key) => {
          if (updatedFields[key]) book[key] = updatedFields[key];
        });

        this.model.update(book);

        replaceBtn(store, update, card, 'click', edit);

        replaceBtn(abort, del, card, 'click', remove);
      };

      replaceBtn(update, store, card, 'click', save);

      const cancel = (event) => {
        const book = this.model.getBook(event.target.dataset.id);

        settings.forEach((field) => {
          const name = field[0];

          let el = card.querySelector(`.${name}`);

          if (el.tagName === 'TD') el = el.firstChild;

          const span = document.createElement('span');

          span.className = el.className;

          span.textContent = book[name];

          if ((name === 'start' || name === 'finish') && !book[name]) {
            span.textContent = '--/--/--';
          }

          el.replaceWith(span);
        });

        replaceBtn(store, update, card, 'click', edit);

        replaceBtn(abort, del, card, 'click', remove);
      };

      replaceBtn(del, abort, card, 'click', cancel);
    };

    isReadBtns.forEach((btn) => btn.addEventListener('click', isItRead));

    editBtns.forEach((btn) => btn.addEventListener('click', edit));

    deleteBtns.forEach((btn) => btn.addEventListener('click', remove));
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
