(function () {
    'use strict';

    var testService = angular.module('testService', ['ngResource']);

    testService.factory('TestService', /*['$resource', */function (/*$resource*/) {
        // return $resource('http://localhost:8081/api/values/', {}, {
        //     query: { method: 'GET', params: {}, isArray: true }
        // });
        return 'aaaaaaaaaa';
    }/*]*/);

})();