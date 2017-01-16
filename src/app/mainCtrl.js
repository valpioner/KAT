(function () {
    'use strict';    

    angular
        .module('app')
        .controller('mainCtrl', mainCtrl);

    function mainCtrl ($scope, $state) {
        var vm = this;

        vm.isNavActive = isNavActive;

        vm.tabs = [
            {sref: 'home.map', src: 'assets/img/navIcons/logo.png', text: 'Home'},
            {sref: 'search.countries', src: 'assets/img/navIcons/contact.png', text: 'Search'},
            {sref: 'help', src: 'assets/img/navIcons/qa.png', text: 'Help'},
            {sref: 'contact', src: 'assets/img/navIcons/contact.png', text: 'Contact'},
            {sref: 'contact', src: 'assets/img/navIcons/contact.png', text: 'Contact'},
            {sref: 'contact', src: 'assets/img/navIcons/contact.png', text: 'Contact'}
        ];
        
        function isNavActive(state) {
            return {
                active: /*$state.current.name === state*/ $state.current.name.toLowerCase().indexOf(state) >= 0
            };
        }
    }
})();