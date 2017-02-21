(function () {
    'use strict';

    angular
        .module('app')
        .factory('core', coreService);

    /*@ngInject*/
    function coreService($timeout, logService, alertService, cacheService){
        return coreService = {
            $timeout: $timeout,
            logger : logService,
            alert: alertService,
            cache : cacheService
        };        
    }

})();