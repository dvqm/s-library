let myLibrary = [];
let deletedBooks = [];

// TODO edit form of all fields of the book when edit button clicked;
// TODO when isRead button true set the date of finishReading manually;
// TODO add clear myLibrary btn 'Forget all';
// TODO add delete from deletedBooks btn 'Delete all';
// TODO add restore btn from deletedBooks to myLibrary;
// TODO showStats, settings draw by JS refactor;
// TODO combine tableView and cardView to append to one container;

function Book() {
    this.id = null;
    this.author = document.querySelector('.library .addBookForm :nth-child(1) input').value;
    this.title = document.querySelector('.library .addBookForm :nth-child(2) input').value;
    this.pageNumber = document.querySelector('.library .addBookForm :nth-child(3) input').value;
    this.publishDate = document.querySelector('.library .addBookForm :nth-child(4) input').value;
    this.startReading = document.querySelector('.library .addBookForm :nth-child(5) input').value;
    this.finishReading = document.querySelector('.library .addBookForm :nth-child(6) input').value;
    this.isRead = document.querySelector('.library .addBookForm :nth-child(7) input').checked;
    this.dateOfCreation = null;
    this.actions = null;
}

function BookShelve() {
    this.library = document.querySelector('div.library');
    this.cardView = document.querySelector('.library .cardView');
    this.tableView = document.querySelector('.library table.tableView');
    this.viewModeType = false;
    this.booksId = null;

    this.addBookBtn = document.createElement('button');
    this.addBookBtn.classList.add('addBookBtn');
    this.addBookBtn.textContent = 'AddBook';

    this.button = document.createElement('button');

    this.fieldNames = {
        id: 'Book id: ',
        author: 'Author: ',
        title: 'Book title: ',
        pages: 'Number of pages: ',
        publish: 'Publish date: ',
        start: 'Start reading: ',
        finish: 'Finish reading: ',
        isRead: 'Is it read: ',
        created: 'Created: ',
        actions: 'Actions: '
    };

}

BookShelve.prototype.getLocalData = function () {
    if (localStorage.getItem('myLibrary')) myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
    if (localStorage.getItem('deletedBooks')) deletedBooks = JSON.parse(localStorage.getItem('deletedBooks'));
}

BookShelve.prototype.showStats = function () {
    this.totalBooks = document.querySelector('.library .statistic :nth-child(2) :nth-child(2)');
    this.readBooks = document.querySelector('.library .statistic :nth-child(3) :nth-child(2)')
    this.totalPages = document.querySelector('.library .statistic :nth-child(4) :nth-child(2)');
    this.forgottenBooks = document.querySelector('.library .statistic :nth-child(5) :nth-child(2)')
    this.totalBooks.textContent = myLibrary.filter(book => typeof book === 'object').length.toString();
    this.forgottenBooks.textContent = deletedBooks.length.toString();
    this.readBooks.textContent = myLibrary.filter(book => typeof book === 'object' && book.isRead).length.toString();

    this.totalPages.textContent = myLibrary.filter(book => typeof book === 'object').reduce((total, page) => {
        return Number(total) + Number(page.pageNumber);
    }, 0);

};

BookShelve.prototype.drawBooksCards = function () {
    document.querySelector('.library .cardView').innerHTML = '';
    document.querySelector('.library .tableView').innerHTML = '';

    for (let key in myLibrary) {
        if (typeof myLibrary[key] === 'object') {
            this.bookCard = document.createElement('div');
            this.bookCard.classList.add('bookCard');
            this.fieldNamesToArr = Object.values(this.fieldNames);

            this.count = 0;
            Object.keys(myLibrary[key]).map(field => {
                this.cardField = document.createElement('p');
                this.cardField.classList.add('cardField');

                this.cardFieldValue = document.createElement('span');
                this.cardFieldValue.classList.add('value');

                this.cardFieldName = document.createElement('span');

                this.cardFieldName.textContent = this.fieldNamesToArr[this.count++];
                this.cardFieldValue.textContent = myLibrary[key][field];

                this.cardField.appendChild(this.cardFieldName);
                this.cardField.appendChild(this.cardFieldValue);

                if (this.cardFieldName.textContent === 'Is it read: ') this.drawIsReadBtn(this.cardField, myLibrary[key][field], this.cardFieldValue);
                if (this.cardFieldName.textContent === 'Actions: ') this.drawActionBtns(this.cardField);
                this.bookCard.append(this.cardField.cloneNode(true));
            });
            this.cardView.append(this.bookCard);
        }
    }
};

BookShelve.prototype.drawBooksTable = function () {
    document.querySelector('.library .cardView').innerHTML = '';
    document.querySelector('.library table.tableView').innerHTML = '';

    this.h3 = document.createElement('h3');
    this.th = document.createElement('th');
    this.td = document.createElement('td');

    this.tr = document.createElement('tr');
    for (let key in this.fieldNames) {
        this.th.textContent = this.fieldNames[key];
        this.tr.append(this.th.cloneNode(true));
    }
    this.tableView.appendChild(this.tr);

    for (let key in myLibrary) {
        if (typeof myLibrary[key] === 'object') {
            this.tr = document.createElement('tr');
            Object.keys(myLibrary[key]).map(v => {
                this.td.innerText = myLibrary[key][v];
                if (v === 'isRead') this.drawIsReadBtn(this.td, myLibrary[key][v])
                if (v === 'actions') this.drawActionBtns(this.td);
                this.tr.appendChild(this.td.cloneNode(true));
            });
            this.tableView.appendChild(this.tr);
        }
    }
};

BookShelve.prototype.drawActionBtns = function (element) {
    this.btnNames = {
        edit: 'Edit',
        delete: 'Delete'
    };
    for (let name in this.btnNames) {
        this.button.textContent = this.btnNames[name];
        this.button.className = this.btnNames[name].toLowerCase();
        element.appendChild(this.button.cloneNode(true));

    }
};

BookShelve.prototype.drawIsReadBtn = function (element, btnValue, elToRemove) {
    if (btnValue) this.button.textContent = 'Yes.';
    else this.button.textContent = 'No.';
    this.button.className = 'isRead';
    if (elToRemove) elToRemove.remove();
    else element.textContent = '';
    element.append(this.button.cloneNode(true));
};

BookShelve.prototype.drawBookForm = function () {
    this.form = document.createElement('form');
    this.form.classList.add('addBookForm');
    this.input = document.createElement('input');
    this.label = document.createElement('label');
    this.span = document.createElement('span');
    this.formContent = {
        author: ['Author', 'text'],
        title: ['Book Title', 'text'],
        pageNumber: ['Number of Pages in the Book', 'number'],
        publishDate: ['Book publish date', 'date'],
        startReading: ['Start reading date', 'date'],
        finishReading: ['Finish reading date', 'date'],
        isRead: ['Mark as read', 'checkbox']
    };

    this.backLayer = document.createElement('div');
    this.backLayer.classList.add('backLayer');

    this.createInputField = (spanContent, inputType, labelClassName) => {
        if (labelClassName) this.label.classList.add(labelClassName);
        else this.label.removeAttribute('class');
        this.span.textContent = spanContent;
        this.input.type = inputType;
        this.label.appendChild(this.span);
        this.label.appendChild(this.input);
        return this.label;
    }

    for (let key in this.formContent) {
        this.form.appendChild(this.createInputField(this.formContent[key][0], this.formContent[key][1]).cloneNode(true));
    }
    this.library.append(this.backLayer);
    this.library.append(this.form);
};

BookShelve.prototype.removeBookForm = function () {
    this.library.removeChild(this.form);
    this.library.removeChild(this.backLayer);
};

BookShelve.prototype.toggleAddBookForm = function () {
    this.library.appendChild(this.addBookBtn);

    this.showFormEvent = () => {
        this.drawBookForm();
        this.addBookBtn.textContent = 'Save Book';
        this.addBookBtn.removeEventListener('click', this.showFormEvent);
        this.addBookBtn.addEventListener('click', this.removeFormEvent);
        this.backLayer.addEventListener('click', this.removeFormBackLayerEvent);
    }

    this.removeFormEvent = () => {
        this.saveBook();
        this.removeBookForm();
        this.addBookBtn.textContent = 'Add Book';
        this.addBookBtn.removeEventListener('click', this.removeFormEvent);
        this.addBookBtn.addEventListener('click', this.showFormEvent);
    }

    this.removeFormBackLayerEvent = () => {
        this.removeBookForm();
        this.addBookBtn.textContent = 'Add Book';
        this.backLayer.removeEventListener('click', this.removeFormBackLayerEvent);
        this.addBookBtn.removeEventListener('click', this.removeFormEvent);
        this.addBookBtn.addEventListener('click', this.showFormEvent);
    }

    this.addBookBtn.addEventListener('click', this.showFormEvent);
};

BookShelve.prototype.saveBook = function () {
    if (document.querySelector('.library .addBookForm :nth-child(1) input').value
        && document.querySelector('.library .addBookForm :nth-child(2) input').value
        && document.querySelector('.library .addBookForm :nth-child(3) input').value) {
        this.book = new Book();
        this.book.dateOfCreation = this.appendCurrentDate();
        this.book.id = 'mb-' + (Number(myLibrary.length) + 1);
        myLibrary.push(this.book);
        this.updateLocalStorage('myLibrary', myLibrary);
        this.showStats();
    } else {
        alert('Please add author, title and number of pages');
    }
    this.viewModeType ? this.drawBooksTable() : this.drawBooksCards();
    this.deleteBookEvent();
    this.checkIsReadEvent();
};

BookShelve.prototype.updateLocalStorage = function (key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

BookShelve.prototype.deleteBookEvent = function () {
    this.deleteBtns = document.querySelectorAll('.library button.delete');
    this.booksIdObjCreate();
    this.deleteBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const indexOfBook = this.defineBookIdInLibrary(this.deleteBtns, btn);
                myLibrary[indexOfBook].dateOfDeletion = this.appendCurrentDate();
                deletedBooks.push(myLibrary[indexOfBook]);
                myLibrary[indexOfBook] = 'Deleted';
                // myLibrary.splice(myLibrary.indexOf(myLibrary[i]), 1);
                // delete myLibrary[indexOfBookToDelete];

                this.viewModeType ? this.drawBooksTable() : this.drawBooksCards();
                this.updateLocalStorage('myLibrary', myLibrary);
                this.updateLocalStorage('deletedBooks', deletedBooks);
                this.deleteBookEvent();
                this.checkIsReadEvent();
                this.showStats();

            })
        }
    )
};

BookShelve.prototype.checkIsReadEvent = function () {
    this.isReadBtnArr = document.querySelectorAll('.library button.isRead');
    this.booksIdObjCreate();
    this.isReadBtnArr.forEach(btn => btn.addEventListener('click', () => {
        const indexOfBook = this.defineBookIdInLibrary(this.isReadBtnArr, btn);
        if (myLibrary[indexOfBook].isRead) {
            myLibrary[indexOfBook].isRead = false;
            btn.textContent = 'No.';
        } else {
            myLibrary[indexOfBook].isRead = true;
            btn.textContent = 'Yes.';
        }
        this.updateLocalStorage('myLibrary', myLibrary);
        this.showStats();
    }));
};

BookShelve.prototype.toggleViewType = function () {
    this.toggleViewBtn = document.querySelector('.settings button.toggleView');
    this.toggleViewEvent = () => {
        if (this.viewModeType) {
            this.drawBooksCards();
            this.toggleViewBtn.textContent = 'Table View';
            this.viewModeType = false;
            this.deleteBookEvent();
            this.checkIsReadEvent();
        } else {
            this.drawBooksTable();
            this.toggleViewBtn.textContent = 'Card View';
            this.viewModeType = true;
            this.deleteBookEvent();
            this.checkIsReadEvent();
        }
    }
    this.toggleViewBtn.addEventListener('click', this.toggleViewEvent);
};

BookShelve.prototype.booksIdObjCreate = function () {
    if (this.viewModeType) {
        this.booksId = document.querySelectorAll('.library table.tableView tr td:nth-of-type(1)');
    } else {
        this.booksId = document.querySelectorAll('.library .bookCard :nth-child(1) :nth-child(2)');
    }
}

BookShelve.prototype.defineBookIdInLibrary = function (buttonsArr, btnEvent) {
    const indexOfPressedBtn = [...buttonsArr].indexOf(btnEvent);
    for (let book in myLibrary) {
        if (myLibrary[book] === 'Deleted') {
        } else if (myLibrary[book].id.toString() === this.booksId[indexOfPressedBtn].textContent) {
            return myLibrary.indexOf(myLibrary[book]);
        }
    }
}

BookShelve.prototype.appendCurrentDate = function () {
    this.currentDate = new Date();
    return this.currentDate.getFullYear() + '-'
        + (this.currentDate.getMonth() + 1) + '-'
        + this.currentDate.getDate() + ' '
        + this.currentDate.getHours() + ':'
        + this.currentDate.getMinutes() + ':'
        + this.currentDate.getSeconds();
};

BookShelve.prototype.bag = function () {

};

BookShelve.prototype.build = function () {
    this.getLocalData('myLibrary');
    this.toggleAddBookForm();
    this.toggleViewType();
    this.drawBooksCards();
    this.showStats();
    this.deleteBookEvent();
    this.checkIsReadEvent();
};


const book1 = {
    id: 'mb-1',
    author: 'Good guy',
    title: 'Best Seller',
    pageNumber: '823',
    publishDate: '2021-12-31',
    startReading: '2021-12-31',
    finishReading: '2022-02-28',
    isRead: true,
    dateOfCreation: '2021-09-20 23:59:59',
    actions: null
};

const book2 = {...book1, id: 'mb-2', isRead: false, pageNumber: '512'};
const book3 = {...book1, id: 'mb-3', isRead: true, pageNumber: '620'};
const book4 = {...book1, id: 'mb-4', isRead: false, pageNumber: '638'};
const book5 = {...book1, id: 'mb-5', isRead: true, pageNumber: '1017'};
const book6 = {...book1, id: 'mb-6', isRead: false, pageNumber: '725'};
const book7 = {...book1, id: 'mb-7', isRead: true, pageNumber: '235'};


myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);
myLibrary.push(book4);
myLibrary.push(book5);
myLibrary.push(book6);
myLibrary.push(book7);

const library = new BookShelve();
library.build();
