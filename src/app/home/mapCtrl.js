(function () {
    'use strict';    

    angular
        .module('app')
        .controller('mapCtrl', mapCtrl);

    /*@ngInject*/
    function mapCtrl ($scope, $state, userData, mapService) {
        var vm = this;

        vm.mapData = userData;
    }
})();