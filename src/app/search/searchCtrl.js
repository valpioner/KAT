(function () {
    'use strict';

    angular
        .module('app')
        .controller('searchCtrl', searchCtrl);

    // homeCtrl.$inject = ['$scope'/*, 'TestService'*/];

    function searchCtrl($scope/*, TestService*/) {
        var vm = this;

        vm.mapSearchControl = {};

        vm.doSmth = function (){
            vm.change();
        };
    }
})();