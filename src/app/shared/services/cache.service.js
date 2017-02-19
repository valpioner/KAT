(function () {
    'use strict';

    angular
        .module('app')
        .factory('cacheService', cacheService);

    /*@ngInject*/
    function cacheService(CacheFactory){

        var cacheService = {
            get: get,
            set: set,
            getKeyInfo: getKeyInfo,
            getCacheInfo: getCacheInfo,
            destroy: destroy,
            remove: remove,
            clearAllCaches: clearAllCaches,
            getAllKeys: getAllKeys
        };

        var localStorage;

        var options = {
            maxAge: 15 * 60 * 1000, // Items added to this cache expire after 15 minutes.
            cacheFlushInterval: 60 * 60 * 1000, // This cache will clear itself every hour.
            deleteOnExpire: 'aggressive', // Items will be deleted from this cache right when they expire.
            storageMode: 'localStorage' // This cache will use `localStorage`.
        };
        var localStoragePolyfill = {
            getItem: get,
            setItem: set,
            removeItem: remove
        };
        if (!window.localStorage) {
            options.storageImpl = localStoragePolyfill;
        }

        // Check to make sure the cache doesn't already exist
        if (!CacheFactory.get('localStorage')) {
            localStorage = CacheFactory('localStorage', options);
        }           

        function get (key){
            return localStorage.get(key);
        }

        function set (key, value){
            localStorage.put(key, value);
        }

        function remove (key){
            localStorage.remove(key);
        }

        function destroy (){
            localStorage.destroy();
        }

        function getKeyInfo (key){
            return localStorage.info(key);
        }

        function getAllKeys (){
            return localStorage.keys();
        }

        function getCacheInfo (){
            return localStorage.info();
        }

        function clearAllCaches (){
            CacheFactory.clearAll();
        }

        return cacheService;
    }

})();