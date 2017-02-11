(function () {
    'use strict';

    angular
        .module('app')
        .factory('alertService', alertService);

    /*@ngInject*/
    function alertService($rootScope){

        $rootScope.alerts = [];

        return alertService = {
            warning: (msg) => $rootScope.alerts.push({'type': 'warning', 'msg': msg}),
            danger: (msg) => $rootScope.alerts.push({'type': 'danger', 'msg': msg}),
            success: (msg) => $rootScope.alerts.push({'type': 'success', 'msg': msg}),
            info: (msg) => $rootScope.alerts.push({'type': 'info', 'msg': msg}),
            closeAlert: (index) => $rootScope.alerts.splice(index, 1)
        };
    }

})();