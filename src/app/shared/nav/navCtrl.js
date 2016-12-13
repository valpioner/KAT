(function () {
    'use strict';

    angular
        .module('app.directives.nav')
        .controller('navCtrl', navCtrl);

    navCtrl.$inject = ['$scope'];

    function navCtrl($scope) {
        var vm = this;

        vm.tabs = [
            {sref: 'home', src: 'assets/img/navIcons/logo.png', text: 'Home'},
            {sref: 'contact', src: 'assets/img/navIcons/contact.png', text: 'Contact'}
        ];
    }
})();