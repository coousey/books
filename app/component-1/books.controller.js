angular.module('app.component1').controller('BooksController', function($scope, $modal, $http, booksService) {
    'use strict';

    $scope.data = {
        books: []
    };

    $scope.data.books = booksService.getBooks();
    $scope.selectedRowIndex;

    $scope.edit = function() {
        $modal.open({
            templateUrl: '/component-1/modal-dialog/modal-dialog.tpl.html',
            controller: 'ModalController',
            size: 'lg',
            resolve: {
                selectedBook: function() {
                    return $scope.data.books[$scope.selectedRowIndex];
                },
                func: function() {
                    return 'edit';
                }
            }
        });
    };

    $scope.add = function() {
        $modal.open({
            templateUrl: '/component-1/modal-dialog/modal-dialog.tpl.html',
            controller: 'ModalController',
            size: 'lg',
            resolve: {
                selectedBook: function() {
                    return {};
                },
                func: function() {
                    return 'add';
                }
            }
        });
    };

    $scope.selectRow = function(index) {
        $scope.selectedRowIndex = index;
    };

}).controller('ModalController', function($scope, $modal, $modalInstance, selectedBook, booksService, func) {
    'use strict';

    $scope.data = {
        newBook: {},
        func: func
    };

    if (func === 'edit') {
        angular.copy(selectedBook, $scope.data.newBook);
        $scope.data.newBook.year = new Date($scope.data.newBook.year + '-01-01');
    }
    if (func === 'add') {
        $scope.data.newBook.year = new Date();
    }

    $scope.ok = function() {
        if (func === 'add') {
            $scope.add();
        } else if (func === 'edit') {
            $scope.edit();
        }
        $modalInstance.close();
    };

    $scope.add = function() {
        booksService.save($scope.data.newBook);

        
    };

    $scope.edit = function() {
        booksService.update($scope.data.newBook, selectedBook);
    };

    $scope.close = function() {
        $modalInstance.close();
    };

    $scope.dateOptions = {
        datepickerMode: '"year"',
        minMode: '"year"',
        showWeeks: 'false'
    };

    $scope.status = {
        opened: false
    };

    $scope.open = function() {
        $scope.status.opened = true;
    };

});
