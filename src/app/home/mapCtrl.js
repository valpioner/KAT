(function () {
    'use strict';    

    angular
        .module('app')
        .controller('mapCtrl', mapCtrl);

    // mapCtrl.$inject = ['$scope'/*, 'TestService'*/];

    function mapCtrl ($scope, $state, userData, mapService) {
        var vm = this;

        vm.mapData = userData;
    }
})();