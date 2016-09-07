angular.module('app.component1').controller('BooksController', function($scope, $http, $modal, booksService) {
        'use strict';

        $scope.data = {
            books: [],
            genres: [],
            selectedGenre: 'all'
        };

        $scope.data.books = booksService.getBooks();
        $scope.data.genres = booksService.getGenres();

        $scope.selectedRowIndex;

        $scope.edit = function() {
            $modal.open({
                templateUrl: '/component-1/modal-dialog/modal-edit-dialog.tpl.html',
                controller: 'EditModalController',
                size: 'lg',
                resolve: {
                    selectedBook: function() {
                        return $scope.data.books[$scope.selectedRowIndex];
                    }
                }
            });
        };

        $scope.add = function() {
            $modal.open({
                templateUrl: '/component-1/modal-dialog/modal-add-dialog.tpl.html',
                controller: 'AddModalController'
            });
        };

        $scope.selectRow = function(index) {
            $scope.selectedRowIndex = index;
        };

        $scope.updateBookList = function(genre) {
            $scope.data.books = booksService.getBooksByGenre(genre);
        };

    })
    .controller('AddModalController', function($scope, $modalInstance, booksService) {
        'use strict';

        $scope.data = {
            newBook: {}
        };

        $scope.add = function(newBook) {
            booksService.save(newBook);
            $modalInstance.close();
        };

    }).controller('EditModalController', function($scope, $modalInstance, selectedBook, booksService) {
        'use strict';

        $scope.data = {
            selectedBook: {}
        };

        angular.copy(selectedBook, $scope.data.selectedBook);

        $scope.update = function(newBook) {
            booksService.update(newBook, selectedBook);
            $modalInstance.close();
        };

    });
