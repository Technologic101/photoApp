namespace photos {

    angular.module('photos', ['ui.router', 'ngResource', 'ui.bootstrap', 'angular-filepicker']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider,
        filepickerProvider
    ) => {
        // Define routes
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

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);

        filepickerProvider.setKey('AxtDQINkTzGkD9KxPaY3Gz');
    });

}
