(function () {
    'use strict';

    angular
        .module('app')
        .factory('alertService', alertService);

    /*@ngInject*/
    function alertService($rootScope){
        $rootScope.alerts = [];

        // usage:
        // alertService.add('warning', 'This is a warning.');
        // alertService.add('danger', 'This is a danger.');
        // alertService.add('success', 'This is a success.');
        // alertService.add('info', 'This is info.');

        var alertService = {
            add: add,
            closeAlert: closeAlert
        };

        function add(type, msg) {
            $rootScope.alerts.push({'type': type, 'msg': msg});
        }

        function closeAlert(index) {
            $rootScope.alerts.splice(index, 1);
        }

        return alertService;
    }

})();