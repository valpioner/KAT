(function () {
    'use strict';

    angular
        .module('app')
        .controller('testCtrl', testController);

    testController.$inject = ['$scope'/*, 'TestService'*/];

    function testController($scope/*, TestService*/) {
        var vm = this;

        vm.testList = [
            {Content: 'zzz', Author: 'azxcfdesrf'},
            {Content: 'zzz', Author: 'azxcfdesrf'},
            {Content: 'zzz', Author: 'azxcfdesrf'}
        ];
    }
})();