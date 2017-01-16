(function () {
    'use strict';

    angular
        .module('app')
        .controller('detailsCtrl', detailsCtrl);

    detailsCtrl.$inject = ['$scope'/*, 'TestService'*/];

    function detailsCtrl($scope/*, TestService*/) {
        var vm = this;
    }
})();