class InjStruct {
  constructor(structure) {
    this.structure = structure;
  }

  static copy(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  static ref(name, obj) {
    let result;

    const nameSearch = (prop) => {
      if (name in prop) result = prop[name];

      Object.values(prop).forEach((value) => {
        if (typeof value === 'object') return nameSearch(value);
        return result;
      });
    };
    nameSearch(obj);

    return result;
  }

  static preciseInsert(object, successor, key, value) {
    const newObject = {};

    Object.keys(object).forEach((property) => {
      if (property === successor) {
        newObject[key] = value;

        newObject[property] = object[property];
      } else newObject[property] = object[property];
    });

    return newObject;
  }

  cardView(data) {
    const get = this.constructor;

    const { ui, lib } = data;

    const view = get.copy(this.structure.cardView);

    const cardTemp = view.c.card;

    delete view.c.card;

    lib.forEach((book) => {
      const card = get.copy(cardTemp);

      const { captions } = this.structure.additionalSettings;
      captions.forEach((caption) => {
        const ref = card.c[caption];

        if (caption === 'start' || caption === 'finish') {
          get.ref(caption, card.c.readingDates).textContent = book[caption];
        } else if (caption === 'created') {
          ref.c.date.textContent = book[caption];
        } else if (caption === 'title') {
          ref.c.title.textContent = book[caption];
        } else if (caption === 'publish') {
          ref.c.date.textContent = book[caption];
        } else if (caption === 'isRead') {
          if (book[caption] === 'true') ref.checked = true;
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

    ui.c = get.preciseInsert(ui.c, 'addBookForm', 'cardView', view);

    return data;
  }

  tableView(data) {
    const get = this.constructor;

    const { ui, lib } = data;

    const view = get.copy(this.structure.tableView);

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

      const { captions } = this.structure.additionalSettings;

      const sorted = {};

      captions.forEach((caption) => {
        sorted[caption] = book[caption];
      });

      const checkbox = row.c.isRead;

      delete row.c.isRead;

      Object.entries(sorted).forEach((field) => {
        const [key, value] = field;

        const cell = get.copy(td);

        if (key === 'isRead') {
          checkbox['data-id'] = book.id;

          if (value === 'true') checkbox.checked = true;

          cell.c = { isRead: checkbox };
        } else {
          cell.textContent = value;
        }

        row.c[key] = cell;
      });

      const { actions } = row.c;

      delete row.c.actions;

      actions.c.edit['data-id'] = book.id;

      actions.c.delete['data-id'] = book.id;

      row.c.actions = actions;
      view.c[sorted.id] = row;
    });

    ui.c = get.preciseInsert(ui.c, 'addBookForm', 'tableView', view);
    return data;
  }
}

export default InjStruct;