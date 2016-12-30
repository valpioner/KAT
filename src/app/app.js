(function () {
    'use strict';

    var app = angular.module('app', [
        // Angular modules 
        'ui.router',
        'ui.bootstrap',

        // Custom modules 
        //"testService"
        'app.directives.nav',
        'app.directives.map'

        // 3rd Party Modules        
    ]);

    app.config(function($stateProvider, $urlRouterProvider) {
        
        // $urlRouterProvider.otherwise('/dashboard');
        
        $stateProvider
            
            // HOME STATES AND NESTED VIEWS ========================================
            .state('dashboard', {
                url: '/dashboard',
                controller: 'dashboardCtrl',
                controllerAs: 'vm',
                templateUrl: 'app/dashboard/dashboard.html',
                // resolve:{
                //     xz: 'yo'
                // },
                abstract: true
            })

            .state('dashboard.content', {
                url: '/',
                controller: 'contentCtrl',
                controllerAs: 'vm',
                templateUrl: 'app/dashboard/content.html'
            })

            .state('dashboard.content2', {
                url: '/',
                controller: 'contentCtrl',
                controllerAs: 'vm',
                templateUrl: 'app/dashboard/content2.html'
            })

            // .state('dashboard.map', {
            //     url: '/',
            //     controller: 'mapCtrl',
            //     controllerAs: 'vm',
            //     templateUrl: 'app/shared/map/map.html'
            // })
            
            // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
            .state('contacts', {
                // we'll get to this in a bit       
            });
            
    });

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