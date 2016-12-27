(function () {
    'use strict';

    angular
        .module('app.directives.nav')
        .controller('navCtrl', navCtrl);

    navCtrl.$inject = ['$scope'];

    function navCtrl($scope) {
        var vm = this;
    }
})();