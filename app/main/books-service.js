angular.module('app.component1').service('booksService', function() {
    'use strict';

    this.books = [{
        'id': 1,
        'version': 0,
        'genre': 'it',
        'year': 1999,
        'title': 'Code Complete',
        'author': 'Steve McConnell'
    }, {
        'id': 2,
        'version': 0,
        'genre': 'it',
        'year': 2001,
        'title': 'Python. Wprowadzenie',
        'author': 'Mark Lutz, David Ascher'
    }, {
        'id': 3,
        'version': 0,
        'genre': 'it',
        'year': 2013,
        'title': 'Sztuka programowania',
        'author': 'Donald Knuth'
    }, {
        'id': 4,
        'version': 0,
        'genre': 'it',
        'year': 2003,
        'title': 'Pragmatyczny programista',
        'author': 'Andy Hunt, Dave Thomas'
    }, {
        'id': 5,
        'version': 0,
        'genre': 'it',
        'year': 2001,
        'title': 'Wzorce projektowe',
        'author': 'Erich Gamma, Ralph Johnson, Richard Helm, John Vlissides'
    }, {
        'id': 6,
        'version': 0,
        'genre': 'fantasy',
        'year': 2001,
        'title': 'Harry Potter',
        'author': 'Someone'
    }, {
        'id': 7,
        'version': 0,
        'genre': 'horror',
        'year': 2001,
        'title': 'Monster',
        'author': 'King'
    }];

    this.save = function(newBook) {
        newBook.year = new Date(newBook.year).getFullYear();
        newBook.id = this.findMaxId() + 1;
        newBook.version = 0;
        this.books.push(newBook);
    };
    this.update = function(newBook, oldBook) {
        newBook.year = new Date(newBook.year).getFullYear();
        if (!this.isEqual(newBook, oldBook)) {
            newBook.version++;
        }
        angular.copy(newBook, oldBook);
    };
    this.getBooks = function() {
        return this.books;
    };
    this.getGenres = function() {

        var unique = {};
        var distinct = [];
        for (var i in this.books) {
            if (typeof(unique[this.books[i].genre]) == 'undefined') {
                distinct.push(this.books[i].genre);
            }
            unique[this.books[i].genre] = 0;
        }
        return distinct;
    };
    this.getBooksByGenre = function(genre) {
        if (genre === 'all') {
            return this.books;
        } else {
            var result = [];
            for (var i = 0; i < this.books.length; i++) {
                var book = this.books[i];
                if (book.genre === genre) {
                    result.push(book);
                }
            }
        }
        return result;
    };

    this.findMaxId = function() {
        var id = 0;
        for (var i in this.books) {
            if (this.books[i].id > id) {
                id = this.books[i].id;
            }
        }
        return id;
    };

    this.isEqual = function(a, b) {
        return a.title === b.title &&
            a.author === b.author &&
            a.year === b.year &&
            a.genre === b.genre;
    }
});
