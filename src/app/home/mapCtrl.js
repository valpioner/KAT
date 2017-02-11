(function () {
    'use strict';    

    angular
        .module('app')
        .controller('mapCtrl', mapCtrl);

    /*@ngInject*/
    function mapCtrl (userData) {
        var vm = this;

        vm.mapData = userData;
    }
})();