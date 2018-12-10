(function () {
    var app = angular.module("app", []);

    app.controller('appController', function ($scope) {
        $scope.title = 'NTA';
        $scope.subtitle = 'A place to share your knowledge.';
    });

})();
