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
