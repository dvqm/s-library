import data from './data.json';
import './ui.scss';
class UI {
  constructor() {
    this.view = this.cardView;
    this.library = document.createElement(data.library.tag);
    this.library.className = data.library.className;
    this.library.id = data.library.id;
    document.body.append(this.library);
  }

  static tag(props) {
    const tag = document.createElement(props.tag);
    if (props.className) tag.className = props.className;
    if (props.id) tag.id = props.id;
    if (props.textContent) tag.textContent = props.textContent;
    if (props.type) tag.type = props.type;
    if (props.htmlFor) tag.htmlFor = props.htmlFor;
    return tag;
  }

  static nodePrepare(dataRef, textContent = '') {
    const tag = this.tag(dataRef);
    tag.textContent = textContent;
    return tag;
  }

  static btnsDraw(key, value) {
    const { buttons } = data.viewModels.common;
    const btns = Object.entries(buttons);
    switch (key) {
      case btns[0][0]: {
        const isReadBtn = this.tag(btns[0][1]);
        if (value.textContent === 'true') {
          isReadBtn.textContent = btns[0][1].text.true;
        }
        if (value.textContent === 'false') {
          isReadBtn.textContent = btns[0][1].text.false;
        }
        const element = value;
        element.innerHTML = '';
        element.append(isReadBtn);
        break;
      }
      case btns[1][0]: {
        const btnsData = Object.values(btns[1][1].text);
        btnsData.map((text) => {
          const actionBtn = this.tag(btns[1][1]);
          actionBtn.textContent = text;
          return value.append(actionBtn);
        });
        break;
      }
      default: {
        break;
      }
    }
  }

  editCard(book) {
    const prefix = this.constructor;

    const pocket = data.viewModels;

    const pointer = this.view.shell.id;
    const { className } = pocket[pointer].value;

    const inputsCover = book.querySelectorAll(`.${className}`);
    const editable = Object.values(inputsCover).slice(0, 7);

    editable.forEach((cover) => {
      const index = editable.indexOf(cover);
      const { types } = pocket.common.input;

      const input = prefix.tag(pocket.common.input);
      input.type = types[index];

      const label = cover;
      input.value = label.textContent;

      const yesText = data.viewModels.common.buttons.isRead.text.true;
      if (types[index] === types[6] && input.value === yesText) {
        input.checked = true;
      }

      label.innerHTML = '';
      label.append(input);
    });

    const actions = inputsCover[inputsCover.length - 1];
    actions.innerHTML = '';

    const btnsData = pocket.common.buttons.edit;
    const saveBtn = prefix.tag(btnsData.save);
    const cancelBtn = prefix.tag(btnsData.cancel);

    actions.append(saveBtn, cancelBtn);
  }

  get settings() {
    const wrapData = data.settings.wrap;
    const wrap = this.constructor.tag(wrapData);

    const themeData = data.settings.toggleTheme;

    const toggleTheme = this.constructor.tag(themeData);

    const viewToggles = () => {
      const viewData = data.settings.toggleView.view;
      const viewValues = Object.values(viewData.individual);

      const wrapper = this.constructor.tag(viewData.wrap);

      viewValues.map((type) => {
        const viewType = this.constructor.tag(viewData.common);
        viewType.id = type.id;
        viewType.textContent = type.textContent;
        return wrapper.append(viewType);
      });
      return wrapper;
    };

    const toggleView = () => {
      const viewData = data.settings.toggleView;
      const viewWrap = this.constructor.tag(viewData.wrap);

      const viewBtn = this.constructor.tag(viewData.toggle);
      viewWrap.append(viewBtn);
      return viewWrap;
    };

    const dropdown = viewToggles();

    wrap.append(toggleTheme);
    wrap.append(toggleView());

    return { wrap, dropdown };
  }

  get statistic() {
    const prefix = this.constructor;

    const pocket = data.statistic;

    const casing = prefix.nodePrepare(pocket.wrap);

    const header = prefix.tag(pocket.header);

    const appendStatFields = () => {
      const fieldsDescription = Object.values(pocket.fields.individual);
      fieldsDescription.map((field) => {
        const wrap = prefix.tag(pocket.fields.common.wrap);

        const title = prefix.nodePrepare(pocket.fields.common.title, field.textContent);

        const value = prefix.tag(pocket.fields.common.value);
        value.id = field.id;

        wrap.append(title);
        wrap.append(value);
        return casing.append(wrap);
      });
    };

    casing.append(header);
    appendStatFields();
    return casing;
  }

  get cardView() {
    const prefix = this.constructor;
    const { cards } = data.viewModels;
    const shell = prefix.tag(cards.shell);

    const book = (card) => {
      const cover = this.constructor.tag(cards.cover);

      const headersData = data.viewModels.common.headers;

      const headers = Object.keys(headersData);

      headers.map((header) => {
        const string = prefix.nodePrepare(cards.field);

        const title = prefix.nodePrepare(cards.title, headersData[header]);

        const value = prefix.nodePrepare(cards.value, card[header]);

        prefix.btnsDraw(header, value);

        string.append(title);
        string.append(value);
        return cover.append(string);
      });
      return cover;
    };

    return { shell, book };
  }

  get tableView() {
    const prefix = this.constructor;
    const pocket = data.viewModels;
    const headers = Object.keys(pocket.common.headers);

    const setHeaders = () => {
      const tr = prefix.tag(pocket.table.tr);

      headers.map((header) => {
        const title = pocket.common.headers[header].slice(0, -2);
        const th = prefix.nodePrepare(pocket.table.th, title);
        return tr.append(th);
      });
      return tr;
    };

    const book = (row) => {
      const tr = prefix.tag(pocket.table.tr);

      headers.map((header) => {
        const td = prefix.nodePrepare(pocket.table.value, row[header]);
        prefix.btnsDraw(header, td);

        return tr.append(td);
      });

      return tr;
    };

    const shell = prefix.tag(pocket.table.table);

    const titles = setHeaders();
    shell.append(titles);

    return { shell, book };
  }

  get addBookForm() {
    const prefix = this.constructor;
    const pocket = data.addBookForm;

    const wrap = prefix.tag(pocket.wrap);

    const form = prefix.tag(pocket.form);

    const header = prefix.tag(pocket.title);

    const fieldsAdd = () => {
      const inputs = Object.entries(pocket.field.inputData);
      inputs.map((settings) => {
        const setInputs = { ...settings[1] };
        const setFields = { ...pocket.field.wrap };
        const setTitles = { ...pocket.field.title };

        setFields.htmlFor = setInputs.id;
        const field = prefix.tag(setFields);

        setTitles.textContent = settings[1].textContent;
        const title = prefix.tag(setTitles);

        setInputs.tag = pocket.field.input.tag;
        delete setInputs.textContent;
        const input = prefix.tag(setInputs);

        field.append(title, input);
        return form.append(field);
      });
    };

    const btnsAdd = () => {
      const btns = Object.entries(pocket.buttons);
      btns.map((setting) => {
        const btn = prefix.tag(setting[1]);
        return form.append(btn);
      });
    };

    form.append(header);
    fieldsAdd();
    btnsAdd();
    wrap.append(form);
    return wrap;
  }

  get addBookBtn() {
    const btn = this.constructor.tag(data.addBookBtn);
    return btn;
  }
}

export default UI;
