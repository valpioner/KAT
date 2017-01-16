(function () {
    'use strict';

    angular
        .module('app')
        .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['$scope'/*, 'TestService'*/];

    function homeCtrl($scope/*, TestService*/) {
        var vm = this;
    }
})();