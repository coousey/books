/*global browser*/
var AddBookPage = require('./add-book-page.js'),
    FilledBookPage = require('./filled-book-page.js');

describe('sample e2e test suite', function() {
    'use strict';

    var addBookPage,
        filledBookPage;

    beforeEach(function() {
        addBookPage = new AddBookPage();
        filledBookPage = new FilledBookPage();
    });

    it('should open add book modal', function() {
        addBookPage.open('http://localhost:9000');
        addBookPage.chooseDialog();
        addBookPage.clickAddBook();

        // browser.wait(function() {
        //     return browser.getCurrentUrl().then(function(url) {
        //         return /table-mgmt\/table-search/.test(url);
        //     });
        // }, 2000, 'URL hasn\'t changed');

    });

    it('should add book', function() {
        addBookPage.open('http://localhost:9000');
        addBookPage.chooseDialog();
        addBookPage.clickAddBook();

        filledBookPage.fillTitle('a title');
        filledBookPage.fillAuthor('a author');
        filledBookPage.chooseDate('datepicker-24-7225-15');
        filledBookPage.clickOkBook();



        browser.sleep(3000);

        // browser.wait(function() {
        //     return browser.getCurrentUrl().then(function(url) {
        //         return /table-mgmt\/table-search/.test(url);
        //     });
        // }, 2000, 'URL hasn\'t changed');

    });
});
