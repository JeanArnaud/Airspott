angular.module('com.airspott.shop.main')
    .controller('ShopMainCtrl', [
        "$rootScope", "$scope", "Offer",
        function ($rootScope, $scope, Offer) {

            $rootScope.meta.title = "WELCOME";

            $scope.searchQuery = {
                freeText: "",
                guestAmount: 1,
                date: new Date(),
                offers: {}
            };

            $scope.offers = Offer.find();

        }]);
