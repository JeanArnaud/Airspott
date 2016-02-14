angular.module('com.airspott.shop.main')
    .controller('ShopMainCtrl', [
        "$rootScope", "$scope",
        function ($rootScope, $scope) {

            $rootScope.meta.title = "WELCOME";

            $scope.searchQuery = {
                freeText: "Free text test"
            };

        }]);
