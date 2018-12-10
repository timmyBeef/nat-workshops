(function () {
    var app = angular.module("app", ['ntaCommonModule']);

    app.factory('appService', function (cResource) {

        var resource = cResource('', {});

        return {
            execute: function (url, param) {
                var options = { 'omitAlerts': false, 'clearAlerts': true };
                return resource.execute(url, param, options);
            }
        };
    });

    app.controller('appController', function ($scope) {

    });

})();
