(function () {
    'use strict';

    angular
        .module('app')
        .controller('homeCtrl', homeCtrl);

    /*@ngInject*/
    function homeCtrl($scope/*, TestService*/, alertService) {
        var vm = this;

        $scope.addAlert = function() {
            alertService.add('info','Information Only ');
        };
    }
})();