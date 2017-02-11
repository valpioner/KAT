(function () {
    'use strict';

    angular
        .module('app')
        .factory('logService', logService);

    /*@ngInject*/
    function logService($log){

        var logger = {
            log: (message) => $log.log(message),
            warn: (message) => $log.warn(message),
            info: (message) => $log.info(message),
            error: (message) => $log.error(message),
            debug: (message) => $log.debug(message)
        };

        return logger;
    }

})();