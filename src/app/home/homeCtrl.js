(function () {
    'use strict';

    angular
        .module('app')
        .controller('homeCtrl', homeCtrl);

    /*@ngInject*/
    function homeCtrl(core) {
        var vm = this;

        vm.alert = function() {
            core.alert.danger('Information Only ');
        };

        vm.log = function() {
            core.logger.debug('ffff');
        };
    }
})();