import UiCreator from './UiCreator';

class UI extends UiCreator {
  constructor(data) {
    super();
    this.data = data;
  }

  wrapper() {
    const get = this.constructor;

    return get.node(this.data.nodeParts.wrapper);
  }

  settings() {
    const get = this.constructor;

    return get.node(this.data.nodeParts.settings);
  }

  statistics(stats) {
    const get = this.constructor;

    const { statistics } = this.data.nodeParts;

    Object.entries(stats).forEach((entry) => {
      const [name, result] = entry;

      const field = get.ref(name, statistics);

      const { value } = field.c;

      value.textContent = result;
    });

    return get.node(statistics);
  }

  content() {
    const get = this.constructor;

    return get.node(this.data.nodeParts.content);
  }

  textFish() {
    const get = this.constructor;

    return get.node(this.data.nodeParts.textFish);
  }

  cardView(lib) {
    const get = this.constructor;

    const ui = this.data;

    const view = get.copy(ui.nodeParts.cardView);

    const cardTemp = view.c.card;

    delete view.c.card;

    lib.forEach((book) => {
      const card = get.copy(cardTemp);

      const { captions } = ui.tools;

      captions.forEach((caption) => {
        const ref = card.c[caption];

        const isReadTitles = ui.tools.titles.isRead;

        if (caption === 'id') {
          ref.textContent = ref.textContent.concat(book[caption]);
        } else if (
          caption === 'start' ||
          caption === 'finish' ||
          caption === 'publish'
        ) {
          ref.c.date.textContent = book[caption];
          if (!book[caption]) ref.c.date.textContent = '--/--/--';
        } else if (caption === 'created') {
          ref.c.date.textContent = book[caption];
        } else if (caption === 'author') {
          ref.c.title.textContent = book[caption];
        } else if (caption === 'isRead') {
          if (book[caption] === 'true') {
            ref.checked = true;
            ref.title = isReadTitles.true;
            card.className = card.className.concat(' read');
          } else {
            ref.checked = false;
            ref.title = isReadTitles.false;
            card.className = card.className.concat(' unread');
          }

          ref['data-id'] = book.id;
        } else {
          ref.textContent = book[caption];
        }
      });

      const { manage } = card.c;

      delete card.c.manage;

      manage.c.edit['data-id'] = book.id;

      manage.c.delete['data-id'] = book.id;

      card.c.manage = manage;

      view.c[book.id] = card;
    });

    return get.node(view);
  }

  tableView(lib) {
    const get = this.constructor;

    const ui = this.data;

    const view = get.copy(ui.nodeParts.tableView);

    const headers = get.ref('headers', view.c);

    const tableHeaders = get.ref('tableHeaders', view.c);

    delete tableHeaders.c.headers;

    headers.s.forEach((header, ind) => {
      const th = get.copy(headers);

      th.textContent = header;

      tableHeaders.c[ind] = th;
    });

    const tableRows = get.ref('tableRows', view.c);

    delete view.c.tableRows;

    lib.forEach((book) => {
      const row = get.copy(tableRows);

      const td = get.copy(row.c.tableData);

      delete row.c.tableData;

      const { captions } = ui.tools;

      const sorted = {};

      captions.forEach((caption) => {
        if (
          (caption === 'publish' ||
            caption === 'start' ||
            caption === 'finish') &&
          !book[caption]
        )
          sorted[caption] = '--/--/--';
        else sorted[caption] = book[caption];
      });

      const checkbox = row.c.isRead;

      delete row.c.isRead;

      Object.entries(sorted).forEach((field) => {
        const [key, value] = field;

        const cell = get.copy(td);

        const isReadTitles = ui.tools.titles.isRead;

        if (key === 'isRead') {
          checkbox['data-id'] = book.id;

          if (value === 'true') {
            checkbox.checked = true;
            checkbox.title = isReadTitles.true;
            row.className = row.className.concat(' read');
          } else {
            checkbox.checked = false;
            checkbox.title = isReadTitles.false;
            row.className = row.className.concat(' unread');
          }

          cell.c = { isRead: checkbox };
        } else {
          cell.c.wrapper.textContent = value;
          cell.className += ` ${key}`;
        }

        row.c[key] = cell;
      });

      const { actions } = row.c;

      delete row.c.actions;

      actions.c.wrapper.c.edit['data-id'] = book.id;

      actions.c.wrapper.c.delete['data-id'] = book.id;

      row.c.actions = actions;
      view.c[sorted.id] = row;
    });

    return get.node(view);
  }

  addBookForm() {
    const get = this.constructor;

    const ui = this.data;

    const view = get.copy(ui.nodeParts.addBookForm);

    const { formFields } = view.c.form.c;

    delete view.c.form.c.formFields;

    const names = formFields.c.name.textContent;

    const types = formFields.c.content.type;

    const ids = formFields.c.content.id;

    const requires = formFields.c.content.required;

    formFields.c.name.textContent = '';

    formFields.c.content.type = '';

    formFields.c.content.id = '';

    formFields.c.content.required = '';

    const form = get.ref('form', view);

    const { buttons } = form.c;

    delete form.c.buttons;

    ids.forEach((id, ind) => {
      const field = get.copy(formFields);

      field.c.name.textContent = names[ind];

      field.c.content.type = types[ind];

      field.c.content.id = id;

      field.c.content.required = requires[ind];

      field.c.content.name = id;

      form.c[id] = field;
    });

    form.c.buttons = buttons;

    return get.node(view);
  }

  addBookBtn() {
    const get = this.constructor;

    return get.node(this.data.nodeParts.addBookBtn);
  }

  confirmDelete() {
    const get = this.constructor;

    const dialog = this.data.nodeParts.confirmDelete;

    return get.node(dialog);
  }
}

export default UI;
