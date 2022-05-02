import data from './data.json';
import './ui.scss';

class UI {
  constructor() {
    this.library = document.createElement(data.library.tag);
    this.library.className = data.library.className;
    this.library.id = data.library.id;
    document.body.append(this.library);

    this.constructor.settings(this.library);
    this.constructor.statistic(this.library);
  }

  static settings(library) {
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

    library.append(wrap);
  }

  static statistic(library) {
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
    library.append(casing);
  }
}

export default UI;
