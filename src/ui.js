import data from './data.json';
import './ui.scss';

class UI {
  constructor() {
    this.library = document.createElement(data.library.tag);
    this.library.className = data.library.className;
    this.library.id = data.library.id;
    document.body.append(this.library);
  }

  settings() {
    const wrapData = data.settings.wrap;

    const wrap = document.createElement(wrapData.tag);
    wrap.className = wrapData.className;

    const themeData = data.settings.toggleTheme;

    const toggleTheme = document.createElement(themeData.tag);
    toggleTheme.className = themeData.className;
    toggleTheme.id = themeData.idDark;
    toggleTheme.textContent = themeData.dark;

    const viewData = data.settings.toggleView;

    const viewWrap = document.createElement(viewData.wrap.tag);
    viewWrap.className = viewData.wrap.className;

    const viewBtn = document.createElement(viewData.toggle.tag);
    viewBtn.className = viewData.toggle.className;
    viewBtn.id = viewData.toggle.id;
    viewBtn.textContent = viewData.toggle.textContent;

    const mapViewToggles = (view) => {
      const viewData = Object.values(view.individual);

      const wrap = document.createElement(view.wrap.tag);
      wrap.className = view.wrap.className;

      viewData.map((type) => {
        const viewType = document.createElement(view.common.tag);
        viewType.className = view.common.className;
        viewType.id = type.id;
        viewType.textContent = type.textContent;
        return wrap.append(viewType);
      });
      return wrap;
    };

    viewWrap.append(viewBtn);
    viewWrap.append(mapViewToggles(viewData.view));

    wrap.append(toggleTheme);
    wrap.append(viewWrap);

    this.library.append(wrap);
  }

  statistic() {
    const wrapData = data.statistic.wrap;
    const casing = document.createElement(wrapData.tag);
    casing.className = wrapData.className;

    const headerData = data.statistic.header;
    const header = document.createElement(headerData.tag);
    header.className = headerData.className;
    header.textContent = headerData.textContent;

    const appendStatFields = () => {
      const common = data.statistic.fields.common;
      const individual = data.statistic.fields.individual;

      const fieldsDescription = Object.values(individual);
      fieldsDescription.map((field) => {
        const wrap = document.createElement(common.wrap.tag);
        wrap.className = common.wrap.className;

        const title = document.createElement(common.title.tag);
        title.className = common.title.className;
        title.textContent = field.titleContent;

        const value = document.createElement(common.value.tag);
        value.className = common.value.className;
        value.id = field.valueId;

        wrap.append(title);
        wrap.append(value);
        return casing.append(wrap);
      });
    };

    casing.append(header);
    appendStatFields();
    this.library.append(casing);
  }

  static btnsDraw(key, value) {
    const btnsData = data.viewModels.common.buttons;

    const btnsKeys = Object.keys(btnsData);
    const isRead = btnsKeys[0];
    const actions = btnsKeys[1];

    switch (key) {
      case isRead:
        const isReadData = btnsData.isRead;
        const isReadBtn = document.createElement(isReadData.tag);
        if (value.textContent === 'true') {
          //TODO change it to true after connect localData
          isReadBtn.className = isReadData.yesClassName;
          isReadBtn.textContent = isReadData.yesText;
        } else if (value.textContent === 'false') {
          //TODO change it to false after connect localData
          isReadBtn.className = isReadData.noClassName;
          isReadBtn.textContent = isReadData.noText;
        }

        value.innerHTML = '';
        return value.append(isReadBtn);

      case actions:
        const actionData = btnsData.actions.common;
        const actionBtn = document.createElement(actionData.tag);
        actionBtn.className = actionData.className;

        const btns = btnsData.actions.individual;
        for (let btn in btns) {
          actionBtn.textContent = btns[btn].textContent;
          value.append(actionBtn.cloneNode(true));
        }
    }
  }

  cardView(myLibrary) {
    const cards = data.viewModels.cards;

    const libData = cards.shell;
    const lib = document.createElement(libData.tag);
    lib.className = libData.className;
    lib.id = libData.id;

    myLibrary.map((book) => {
      const coverData = cards.cover;
      const cover = document.createElement(coverData.tag);
      cover.className = coverData.className;

      const bookKeys = Object.keys(book);
      bookKeys.map((key) => {
        const stringData = cards.field;
        const string = document.createElement(stringData.tag);
        string.className = stringData.className;

        const titleData = cards.title;
        const title = document.createElement(titleData.tag);
        title.className = titleData.className;
        const headersData = data.viewModels.common.headers;
        title.textContent = headersData[key];

        const valueData = cards.value;
        const value = document.createElement(valueData.tag);
        value.className = valueData.className;
        value.textContent = book[key];
        this.constructor.btnsDraw(key, value);

        string.append(title);
        string.append(value);
        return cover.append(string);
      });
      lib.append(cover);
    });
    this.library.append(lib);
  }

  tableView(myLibrary) {
    const tableData = data.viewModels.table;

    const tableTagData = data.viewModels.table.table;
    const table = document.createElement(tableTagData.tag);
    table.className = tableTagData.className;
    table.id = tableTagData.id;

    const trData = tableData.tr;

    const trTh = document.createElement(trData.tag);
    trTh.className = trData.className;

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
    this.library.append(table);

    myLibrary.map((book) => {
      const trTd = document.createElement(trData.tag);
      trTd.className = trData.className;

      const bookKeys = Object.keys(book);
      bookKeys.map((key) => {
        const tdData = tableData.td;
        const td = document.createElement(tdData.tag);
        td.className = tdData.className;
        td.textContent = book[key];
        this.constructor.btnsDraw(key, td);

        return trTd.append(td);
      });
      table.append(trTd);
      this.library.append(table);
    });
  }

  addBookForm() {
    const addBookFormData = data.addBookForm;

    const wrapData = addBookFormData.wrap;
    const wrap = document.createElement(wrapData.tag);
    wrap.className = wrapData.className;
    //TODO remove plug after event addBookForm;
    wrap.setAttribute('open', 'open');

    const formData = addBookFormData.form;
    const form = document.createElement(formData.tag);
    form.className = formData.className;

    const headerData = addBookFormData.title;
    const header = document.createElement(headerData.tag);
    header.className = headerData.className;
    header.textContent = headerData.textContent;

    const formFieldsData = addBookFormData.field;
    const fieldData = formFieldsData.wrap;
    const titleData = formFieldsData.title;
    const inputData = formFieldsData.input;

    const fieldsAdd = () => {
      const fieldSettings = formFieldsData.inputData;
      for (let key in fieldSettings) {
        const value = fieldSettings[key];

        const field = document.createElement(fieldData.tag);
        field.className = fieldData.className;
        field.htmlFor = value.id;

        const title = document.createElement(titleData.tag);
        title.className = titleData.className;
        title.textContent = value.name;

        const input = document.createElement(inputData.tag);
        input.type = value.type;
        input.className = inputData.className;

        if (value.className !== '') input.classList.add(value.className);
        input.id = value.id;

        field.append(title);
        field.append(input);
        form.append(field);
      }
    };

    form.append(header);
    fieldsAdd();
    wrap.append(form);
    this.library.append(wrap);
  }

  addBookBtn() {
    const addBookBtnData = data.addBookBtn;

    const wrapData = addBookBtnData.wrap;
    const wrap = document.createElement(wrapData.tag);
    wrap.className = wrapData.className;

    const btnData = addBookBtnData.btn;
    const btn = document.createElement(btnData.tag);
    btn.className = btnData.className;
    btn.id = btnData.id;
    btn.textContent = btnData.text;

    wrap.append(btn);
    this.library.append(wrap);
  }
}

export default UI;
