import data from './data.json';
import './ui.scss';
// TODO full refactor of the UI class.
class UI {
  constructor() {
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

  settings() {
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

  statistic() {
    const wrapData = data.statistic.wrap;
    const casing = this.constructor.tag(wrapData);

    const headerData = data.statistic.header;
    const header = this.constructor.tag(headerData);

    const appendStatFields = () => {
      const { common } = data.statistic.fields;
      const { individual } = data.statistic.fields;

      const fieldsDescription = Object.values(individual);
      fieldsDescription.map((field) => {
        const wrap = this.constructor.tag(common.wrap);

        const title = this.constructor.tag(common.title);
        title.textContent = field.titleContent;

        const value = this.constructor.tag(common.value);
        value.id = field.valueId;

        wrap.append(title);
        wrap.append(value);
        return casing.append(wrap);
      });
    };

    casing.append(header);
    appendStatFields();
    return casing;
  }

  cardView(myLibrary) {
    const { cards } = data.viewModels;

    const shellData = cards.shell;
    const shell = this.constructor.tag(shellData);

    myLibrary.map((book) => {
      const coverData = cards.cover;
      const cover = this.constructor.tag(coverData);

      const bookKeys = Object.keys(book);
      bookKeys.map((key) => {
        const stringData = cards.field;
        const string = this.constructor.tag(stringData);

        const titleData = cards.title;
        const title = this.constructor.tag(titleData);

        const headersData = data.viewModels.common.headers;
        title.textContent = headersData[key];

        const valueData = cards.value;
        const value = this.constructor.tag(valueData);
        value.textContent = book[key];
        this.constructor.btnsDraw(key, value);

        string.append(title);
        string.append(value);
        return cover.append(string);
      });
      return shell.append(cover);
    });
    return shell;
  }

  tableView(myLibrary) {
    const tableData = data.viewModels.table;

    const tableTagData = data.viewModels.table.table;
    const table = this.constructor.tag(tableTagData);

    const trData = tableData.tr;

    const trTh = this.constructor.tag(trData);

    const bookKeys = Object.keys(myLibrary[0]);
    const headersData = data.viewModels.common.headers;

    bookKeys.map((key) => {
      const thData = tableData.th;
      const th = document.createElement(thData.tag);
      th.className = thData.className;

      const header = headersData[key].slice(0, -2);
      th.textContent = header;

      return trTh.append(th);
    });

    table.append(trTh);

    myLibrary.map((book) => {
      const trTd = this.constructor.tag(trData);

      const bookHeaderKeys = Object.keys(book);
      bookHeaderKeys.map((key) => {
        const tdData = tableData.td;
        const td = this.constructor.tag(tdData);
        td.textContent = book[key];
        this.constructor.btnsDraw(key, td);

        return trTd.append(td);
      });
      return table.append(trTd);
    });

    return table;
  }

  addBookForm() {
    const addBookFormData = data.addBookForm;

    const wrapData = addBookFormData.wrap;
    const wrap = this.constructor.tag(wrapData);
    wrap.className = wrapData.className;
    wrap.id = wrapData.id;

    const formData = addBookFormData.form;
    const form = this.constructor.tag(formData);

    const headerData = addBookFormData.title;
    const header = this.constructor.tag(headerData);

    const formFieldsData = addBookFormData.field;
    const fieldData = formFieldsData.wrap;
    const titleData = formFieldsData.title;
    const inputData = formFieldsData.input;
    const fieldsInputData = formFieldsData.inputData;

    const fieldsAdd = () => {
      const inputs = Object.entries(fieldsInputData);
      inputs.map((settings) => {
        const setInputs = { ...settings[1] };
        const setFields = { ...fieldData };
        const setTitles = { ...titleData };

        setFields.htmlFor = setInputs.id;
        const field = this.constructor.tag(setFields);

        setTitles.textContent = settings[1].textContent;
        const title = this.constructor.tag(setTitles);

        setInputs.tag = inputData.tag;
        delete setInputs.textContent;
        const input = this.constructor.tag(setInputs);

        field.append(title, input);
        return form.append(field);
      });
    };

    const btnsAdd = () => {
      const btnsData = addBookFormData.buttons;
      const btns = Object.entries(btnsData);
      btns.map((setting) => {
        const btn = this.constructor.tag(setting[1]);
        return form.append(btn);
      });
    };

    form.append(header);
    fieldsAdd();
    btnsAdd();
    wrap.append(form);
    return wrap;
  }

  addBookBtn() {
    const btnData = data.addBookBtn;
    const btn = this.constructor.tag(btnData);
    return btn;
  }
}

export default UI;
