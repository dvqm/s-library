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
    const settingsWrap = document.createElement(data.settingsWrap.tag);
    settingsWrap.className = data.settingsWrap.className;

    const toggleTheme = document.createElement(data.toggleTheme.tag);
    toggleTheme.className = data.toggleTheme.className;
    toggleTheme.id = data.toggleTheme.idDark;
    toggleTheme.textContent = data.toggleTheme.dark;

    const viewData = data.toggleView;

    const toggleViewWrap = document.createElement(viewData.wrapper.tag);
    toggleViewWrap.className = viewData.wrapper.className;

    const toggleViewBtn = document.createElement(viewData.toggle.tag);
    toggleViewBtn.className = viewData.toggle.className;
    toggleViewBtn.id = viewData.toggle.id;
    toggleViewBtn.textContent = viewData.toggle.textContent;

    const viewTypes = (view) => {
      const viewData = Object.values(view.individual);

      const dropdownContent = document.createElement(view.wrapper.tag);
      dropdownContent.className = view.wrapper.className;

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
}

export default UI;
