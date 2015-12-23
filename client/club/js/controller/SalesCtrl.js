angular.module('com.airspott.club')
    .controller('SalesCtrl',
    [
        '$rootScope', '$scope',

        function ($rootScope, $scope)
        {

            $rootScope.meta.title = "CLUB_SALES";

            $scope.salesLoaded = true;

        }
    ]);