(function () {
    'use strict';

    angular
        .module('app')
        .factory('core', core);

    /*@ngInject*/
    function core(){
        return {
            sayHello: function(text){
                return "Factory says \"Hello " + text + "\"";
            },
            sayGoodbye: function(text){
                return "Factory says \"Goodbye " + text + "\"";
            }
        };
    }

})();