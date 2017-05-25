var photos;
(function (photos) {
    angular.module('photos', ['ui.router', 'ngResource', 'ui.bootstrap', 'angular-filepicker']).config(function ($stateProvider, $urlRouterProvider, $locationProvider, filepickerProvider) {
        $stateProvider
            .state('home', {
            url: '/',
            templateUrl: '/ngApp/views/home.html',
            controller: photos.Controllers.HomeController,
            controllerAs: 'controller'
        })
            .state('edit', {
            url: '/edit/:id',
            templateUrl: '/ngApp/views/edit.html',
            controller: photos.Controllers.EditController,
            controllerAs: 'controller'
        })
            .state('notFound', {
            url: '/notFound',
            templateUrl: '/ngApp/views/notFound.html'
        });
        $urlRouterProvider.otherwise('/notFound');
        $locationProvider.html5Mode(true);
        filepickerProvider.setKey('AxtDQINkTzGkD9KxPaY3Gz');
    });
})(photos || (photos = {}));
