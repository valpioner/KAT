(function () {
    'use strict';    

    angular.module('app').controller('contentCtrl', function ($scope, $state, userData, contentService) {
        var vm = this;

        vm.mapData = userData;
    });
})();