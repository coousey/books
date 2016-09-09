angular.module('app.component2').controller('BooksByGenreController', function($scope, $modal, $http, booksService) {
    'use strict';

    $scope.data = {
        allBooks: [],
        books: [],
        genres: [],
        selectedGenre: 'all'
    };

    $scope.data.allBooks = booksService.getBooks();
    $scope.data.books = booksService.getBooks();

    $scope.updateBookList = function(genre) {
        $scope.data.books = booksService.getBooksByGenre(genre);
    };

    $scope.updateGenres = function() {
        $scope.data.genres = booksService.getGenres();
    };
});
