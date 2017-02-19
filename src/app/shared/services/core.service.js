(function () {
    'use strict';

    angular
        .module('app')
        .factory('core', coreService);

    /*@ngInject*/
    function coreService($timeout, logService, alertService, cacheService){
        var coreService = {
            $timeout: $timeout,
            logger : logService,
            alert: alertService,
            cache : cacheService
        };

        

        return coreService;
    }

})();