(function () {
    'use strict';

    angular.module('app.directives.map', [])
    .directive('map', function() {
        return{
            restrict: 'E',
            templateUrl: 'app/shared/map/map.html',
            //transclude: true,
            //scope: false,
            // require: ['^someDirective', 'map'],
            scope: {
                attr1: '='
            },
            //controller: 'navCtrl',
            controller: function($scope){
                var vm = this;
            },
            controllerAs: 'vm',
            link: function(scope, element, attrs/*, controllers*/){
                // var someDirectiveCtrl = controllers[0];
                // var mapCtrl = controllers[1];
                element.click(function(){
                    alert('clicked');
                });
            }
        };
    });

})();