(function () {
    'use strict';

    angular
        .module('app')
        .controller('searchCtrl', searchCtrl);

    // homeCtrl.$inject = ['$scope'/*, 'TestService'*/];

    function searchCtrl($scope/*, TestService*/) {
        var vm = this;

        vm.searchValue = undefined;
        vm.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];



        vm.mapControl = {a: 1};







/* <!--2 different ways of how to call directive functions from outside without events-->
        vm.mapSearchControl = {};
        vm.doSmth = function (){
            vm.change();
        };
*/
    }
})();