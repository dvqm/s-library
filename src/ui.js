import data from './data.json';
import './ui.scss';

class UI {
  constructor() {
    this.library = document.createElement(data.library.tag);
    this.library.className = data.library.className;
    this.library.id = data.library.id;
    document.body.append(this.library);

    this.constructor.settings(this.library);
  }

  static settings(library) {
    const settingsWrap = document.createElement(data.settings.wrap.tag);
    settingsWrap.className = data.settings.wrap.className;

    const toggleTheme = document.createElement(data.settings.toggleTheme.tag);
    toggleTheme.className = data.settings.toggleTheme.className;
    toggleTheme.id = data.settings.toggleTheme.idDark;
    toggleTheme.textContent = data.settings.toggleTheme.dark;

    const viewData = data.settings.toggleView;

    const toggleViewWrap = document.createElement(viewData.wrap.tag);
    toggleViewWrap.className = viewData.wrap.className;

    const toggleViewBtn = document.createElement(viewData.toggle.tag);
    toggleViewBtn.className = viewData.toggle.className;
    toggleViewBtn.id = viewData.toggle.id;
    toggleViewBtn.textContent = viewData.toggle.textContent;

    const viewTypes = (view) => {
      const viewData = Object.values(view.individual);

      const dropdownContent = document.createElement(view.wrap.tag);
      dropdownContent.className = view.wrap.className;

      viewData.map((type) => {
        const element = document.createElement(view.common.tag);
        element.className = view.common.className;
        element.id = type.id;
        element.textContent = type.textContent;
        return dropdownContent.append(element);
      });
      return dropdownContent;
    };

    toggleViewWrap.append(toggleViewBtn);
    toggleViewWrap.append(viewTypes(viewData.view));

    settingsWrap.append(toggleTheme);
    settingsWrap.append(toggleViewWrap);

    library.append(settingsWrap);
  }

  static statistic() {}
}

export default UI;
