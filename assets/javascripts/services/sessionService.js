var auth = angular.module("app.auth");

auth.factory("sessionService", function() {
    return {
        get: function(key) {
            return localStorage.getItem(key);
        },
        set: function(key, val) {
            return localStorage.setItem(key, val);
        },
        unset: function(key) {
            return localStorage.removeItem(key);
        },
        unsetAll: function() {
            return localStorage.clear();
        }
    };

});


/*'use strict';
angular.module('nwwatson')
  .factory('Session', function($window) {
    var localStorage = $window.localStorage;
    
    var Session = {
      getItem: function(key) {
        return angular.fromJson(localStorage.getItem(key));
      },
      setItem: function(key, value) {
        return localStorage.setItem(key, angular.toJson(value));
      },
      removeItem: function(key) {
        return localStorage.removeItem(key);
      }
    };

    return Session;
*/