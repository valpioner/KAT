(function () {
    'use strict';

    var app = angular.module('app', [
        // Angular modules 
        'ui.router',

        // Custom modules 
        //"testService"

        // 3rd Party Modules        
    ]);

    app.config(function($stateProvider, $urlRouterProvider) {
        
        $urlRouterProvider.otherwise('home');
        
        $stateProvider
            
            // HOME STATES AND NESTED VIEWS ========================================
            .state('home', {
                url: '/home',
                controller: 'testCtrl',
                controllerAs: 'vm',
                templateUrl: 'app/test/test.html'
            })
            
            // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
            .state('about', {
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