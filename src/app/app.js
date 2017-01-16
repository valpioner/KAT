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
                url: '/content',
                controller: 'contentCtrl',
                controllerAs: 'vm',
                templateUrl: 'app/dashboard/content.html'
            })
            .state('dashboard.content2', {
                url: '/content2',
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
            .state('contacts', {
                // we'll get to this in a bit       
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