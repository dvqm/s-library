import Events from './Events';

const uiWithEvents = new Events();

uiWithEvents.testView();

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

  {
    author: 'Antoine de Saint-Exupéry',
    title: 'The Little Prince',
    publish: '1943-04-01',
    pages: '59',
    start: '2022-03-02',
    // finish: '2022-01-03',
    isRead: 'false',
  },
];

// const model = new Model();
// model.add(mockLibrary[0]);
// model.add(mockLibrary[1]);
// model.add(mockLibrary[0]);
// model.add(mockLibrary[1]);
// model.add(mockLibrary[0]);
// model.add(mockLibrary[1]);
// localStorage.removeItem('library');
// console.log(model.library);
// console.log(uiStructure);
