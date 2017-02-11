(function () {
    'use strict';

    angular
        .module('app')
        .factory('core', coreService);

    /*@ngInject*/
    function coreService($timeout, logService, alertService){
        var coreService = {
            $timeout: $timeout,
            logger : logService,
            alert: alertService
            //cache : cache
        };

        

        return coreService;
    }

})();