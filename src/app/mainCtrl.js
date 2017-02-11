(function () {
    'use strict';    

    angular
        .module('app')
        .controller('mainCtrl', mainCtrl);

    /*@ngInject*/
    function mainCtrl ($scope, $state, $rootScope, core) {
        var vm = this;

        vm.isNavActive = isNavActive;
        vm.alertService = core.alert;

        vm.tabs = [
            { sref: 'home.map', src: 'assets/img/navIcons/logo.png', text: 'Home' },
            { sref: 'search.countries', src: 'assets/img/navIcons/contact.png', text: 'Search' },
            { sref: 'help', src: 'assets/img/navIcons/qa.png', text: 'Help' },
        ];
        
        function isNavActive(state) {
            return $state.current.name === state;
        }
    }
})();