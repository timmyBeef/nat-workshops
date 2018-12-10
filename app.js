(function () {
    var app = angular.module("app", []);

    app.controller('appController', function ($scope) {
        $scope.title = 'NTA';
        $scope.subtitle = 'National Treasury Administration, Ministry of Finance';
        $scope.showTitle = true;

        $scope.show = function() {
            $scope.showTitle = !$scope.showTitle;
        }

    });

})();
