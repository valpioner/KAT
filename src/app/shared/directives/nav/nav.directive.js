(function () {
    'use strict';

    angular
        .module('app.directives.nav', [])
        .directive('nav', navDirective);

    function navDirective () {
        return{
            restrict: 'E',
            //transclude: true,
            //scope: {},
            // controller: 'navCtrl',
            // controllerAs: 'vm',
            scope: false,
            templateUrl: 'app/shared/directives/nav/nav.directive.html'
        };
    }

})();