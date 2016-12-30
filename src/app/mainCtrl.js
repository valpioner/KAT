(function () {
    'use strict';    

    angular.module('app').controller('mainCtrl', function ($scope, $state) {
        var vm = this;

        vm.isNavActive = isNavActive;

        vm.tabs = [
            {sref: 'dashboard.content', src: 'assets/img/navIcons/logo.png', text: 'Home'},
            {sref: 'dashboard.content2', src: 'assets/img/navIcons/contact.png', text: 'Contact'},
            {sref: 'contact', src: 'assets/img/navIcons/contact.png', text: 'Contact'},
            {sref: 'contact', src: 'assets/img/navIcons/contact.png', text: 'Contact'},
            {sref: 'contact', src: 'assets/img/navIcons/contact.png', text: 'Contact'},
            {sref: 'contact', src: 'assets/img/navIcons/contact.png', text: 'Contact'}
        ];
        
        function isNavActive(state) {
            return {
                active: /*$state.current.name === state*/ $state.current.name.toLowerCase().indexOf(state) >= 0
            };
        }
    });
})();