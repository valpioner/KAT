(function () {
    'use strict';    

    /*@ngInject*/
    angular.module('app').factory('mapService', function ($http) {        
        function getUserData (id) {
            //$http.get('user_' + id + '_data.json');
            // .success(function(data) {
            //     // you can do some processing here
            //     return data;
            // });  

            return {
                polyFlights : [
                    [
                        { lat: 50.448853, long: 30.513346 },
                        { lat: 52.374355, long: 4.897960 },
                        { lat: 40.785091, long: -73.968285 },
                        { lat: 44.970697, long: -93.2614785 },
                        { lat: 61.217381, long: -149.863129 },
                        { lat: 37.774929, long: -122.41941 }
                    ],
                    [
                        { lat: 34.0204989, long: -118.4117325 },
                        { lat: 40.785091, long: -73.968285 },
                        { lat: 48.858093, long: 2.294694 },
                        { lat: 50.448853, long: 30.513346 }
                    ],
                    [
                        { lat: 50.064650, long: 19.944979 },
                        { lat: 59.924484, long: 10.705147 },
                        { lat: 45.444958, long: 12.328463 }
                    ],
                    [
                        { lat: 50.448853, long: 30.513346 },
                        { lat: 41.015137, long: 28.979530 },
                        { lat: 13.736717, long: 100.523186 },
                        { lat: 10.762622, long: 106.660172 }
                    ]
                ],
                markers : [
                    { title: 'Lviv', lat: 50.448853, long: 30.513346 }
                ]
            };
        }
        
        return {
            getUserData: getUserData
        };
    });
})();