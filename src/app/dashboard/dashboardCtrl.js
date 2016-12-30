(function () {
    'use strict';

    angular
        .module('app')
        .controller('dashboardCtrl', dashboardCtrl);

    dashboardCtrl.$inject = ['$scope'/*, 'TestService'*/];

    function dashboardCtrl($scope/*, TestService*/) {
        var vm = this;

        vm.testList = [
            {Content: 'zzz', Author: 'azxcfdesrf'},
            {Content: 'zzz', Author: 'azxcfdesrf'},
            {Content: 'zzz', Author: 'azxcfdesrf'}
        ];
    }
})();