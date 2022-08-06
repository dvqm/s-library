import InjStruct from './InjStruct';
import data from './json/data.json';
import content from './json/injectedContent.json';
import Model from './Model';
import UiCreator from './UiCreator';

const model = new Model();

const ui = new UiCreator();

const injected = new InjStruct(content);

const uiStructure = ui.composer(
  {
    ui: data.libraryMain,
    lib: model.library,
  },
  injected.cardView.bind(injected),
  injected.tableView.bind(injected)
);

const library = ui.nodeCreate(uiStructure.ui);

ui.render(document.body, library);

const mockLibrary = [
  {
    author: 'John Smith',
    title: 'Best seller',
    publish: '2022-01-01',
    pages: '367',
    start: '2022-01-02',
    finish: '2022-01-03',
    isRead: 'true',
  },
];

// model.add(mockLibrary[0]);
// localStorage.removeItem('library');
// console.log(model.library);
// console.log(uiStructure);
