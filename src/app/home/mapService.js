(function () {
    'use strict';    

    /*@ngInject*/
    angular.module('app').factory('mapService', function ($http) {   

        function getUserData (id) {
            return $http.get('user_' + id + '_data.json').then(
                function(json) {
                    return json.data;
                })
        }
        
        return {
            getUserData: getUserData
        };
    });
})();