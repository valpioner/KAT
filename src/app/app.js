(function () {
    'use strict';

    angular.module('app', [
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
    
    angular
        .module('app')
        .config(configure);   

    /* @ngInject */
    function configure($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home/map');
        
        $stateProvider            
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
        
    }

})();