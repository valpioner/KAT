(function () {
    'use strict';

    angular.module('app.directives.nav', [])
    .directive('nav', function() {
        return{
            restrict: 'E',
            //transclude: true,
            //scope: {},
            // controller: 'navCtrl',
            // controllerAs: 'vm',
            scope: false,
            templateUrl: 'app/shared/nav/nav.html'
        };
    });

})();