describe('data service tests', function() {
    'use strict';

    var $booksService;

    beforeEach(function(){
      module('app.component1');
    });

    beforeEach(inject(function(_booksService_) {
        $booksService = _booksService_;
    }));


    describe('books service suite', function() {

        it('should get books', function() {

            // given
            var bookNumber = 7,

                // when
                books = $booksService.getBooks();

            // than
            expect(books.length).toBe(bookNumber);
        });

        // it('should save book', function() {
        //
        //     // given
        //     var book = {
        //             'genre': 'horror',
        //             'year': 2001,
        //             'title': 'Monster',
        //             'author': 'King'
        //         },
        //
        //         // when
        //         savedBook = booksService.save(book);
        //
        //     // than
        //     expect(result).toBe(result);
        // });

    });
});
