describe('\'app.component1\' module', function () {
    'use strict';
    var routeProvider;

    beforeEach(function () {
        module('ngRoute', function ($routeProvider) {
            routeProvider = $routeProvider;
            spyOn(routeProvider, 'when').and.callThrough();
            spyOn(routeProvider, 'otherwise').and.callThrough();
        });
        module('app.component1');
    });

    // This is necessary to trigger loading the modules above; use it to inject services once they are needed
    beforeEach(inject());
    //
    // it('defines a route for the dialog-a', function () {
    //     expect(routeProvider.when).toHaveBeenCalledWith('/component-1/dialog-a', { templateUrl : 'component-1/dialog-a/dialog-a.html' });
    // });

    // it('defines the default route redirecting to the welcome dialog', function () {
    //     expect(routeProvider.when).toHaveBeenCalledWith('/', { redirectTo : '/main/welcome' });
    // });
    //
    // it('defines the default route redirecting to the welcome dialog', function () {
    //     expect(routeProvider.otherwise).toHaveBeenCalledWith({templateUrl: 'main/page-not-found/page-not-found.html'});
    // });
});
