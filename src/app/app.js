(function () {
    'use strict';

    var app = angular.module('app', [
        // Angular modules 
        'ui.router',
        'ui.bootstrap',

        // Custom modules 
        //"testService"
        'app.directives.nav',
        'app.directives.mapDir',

        // 3rd Party Modules   
        //'uiGmapgoogle-maps'   
        //'ngMap'  
    ]);

    app.config(function($stateProvider, $urlRouterProvider) {
        
        $urlRouterProvider.otherwise('/home/map');
        
        $stateProvider            
            // HOME STATES AND NESTED VIEWS ========================================
            .state('home', {
                url: '/home',
                templateUrl: 'app/home/home.html',
                controller: 'homeCtrl',
                controllerAs: 'vm',
                abstract: true
            })
            .state('home.map', {
                url: '/map',
                templateUrl: 'app/home/map.html',
                controller: 'mapCtrl',
                controllerAs: 'vm',
                resolve: {
                    userData: function (mapService) {
                        return mapService.getUserData(1);
                    }
                }
            })
            .state('home.details', {
                url: '/details',
                templateUrl: 'app/home/details.html',
                controller: 'detailsCtrl',
                controllerAs: 'vm'
            })

            .state('search', {
                url: '/search',
                templateUrl: 'app/search/search.html',
                controller: 'searchCtrl',
                controllerAs: 'vm',
                abstract: true     
            })
            .state('search.countries', {
                url: '/countries',
                templateUrl: 'app/search/search-countries.html',
                // controller: 'searchCtrl',
                // controllerAs: 'vm'
            })
            .state('search.people', {
                url: '/people',
                templateUrl: 'app/search/search-people.html',
                // controller: 'searchCtrl',
                // controllerAs: 'vm'
            })
            .state('search.projects', {
                url: '/projects',
                templateUrl: 'app/search/search-projects.html',
                // controller: 'searchCtrl',
                // controllerAs: 'vm'
            })

            .state('help', {
                url: '/help',
                templateUrl: 'app/help/help.html',
                controller: 'helpCtrl',
                controllerAs: 'vm',
                abstract: true     
            })
            .state('help.about', {
                url: '/about',
                templateUrl: 'app/help/about.html',
                controller: 'helpCtrl',
                controllerAs: 'vm'
            })
            .state('help.terms', {
                url: '/terms',
                templateUrl: 'app/help/terms.html',
                controller: 'helpCtrl',
                controllerAs: 'vm'
            });
            
    });

    // app.config(function(uiGmapGoogleMapApiProvider) {
    //     uiGmapGoogleMapApiProvider.configure({
    //         //    key: 'your api key',
    //         v: '3.20', //defaults to latest 3.X anyhow
    //         libraries: 'weather,geometry,visualization'
    //     });
    // });

    //angular.module('app').config(['$routeProvider', '$locationProvider',
    //    function ($routeProvider, $locationProvider) {
    //        $routeProvider
    //            .when('/', {
    //                templateUrl: 'partials/test.html',
    //                controller: 'testController'
    //            })
    //            .when('/test/add', {
    //                templateUrl: 'partials/add.html',
    //                controller: 'testController'
    //            })
    //            .when('/test/edit/:id', {
    //                templateUrl: 'partials/edit.html',
    //                controller: 'testController'
    //            })
    //            .when('/test/delete/:id', {
    //                templateUrl: 'partials/delete.html',
    //                controller: 'testController'
    //            });

    //        $locationProvider.htmlMode(true);
    //    }]);
})();