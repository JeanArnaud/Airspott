angular.module('com.airspott.shop.search').controller('SearchCtrl', [
    "$rootScope", "$scope", "$state", "$log", "Club", "Offer", "Currency",
    function ($rootScope, $scope, $state, $log, Club, Offer, Currency) {

        $rootScope.meta.title = "SEARCH";

        $scope.offers = Offer.find();
        $scope.currencies = Currency.find();

        $scope.extendedSearch = false;
        $scope.extendedOffers = false;
        $scope.collapsed = false;

        $scope.query = {
            query: '',
            amount: 1,
            date: new Date(),
            offers: {}
        };

        $scope.toggle = function (scopeVar) {
            $scope[scopeVar] = !$scope[scopeVar];
        };

        $scope.instantAddToCart = function (offerId) {
            alert(offerId);
        };

        $scope.search = function () {
            $scope.clubs = Club.search($scope.query);

            $scope.clubs.$promise.catch(function (err) {
                $scope.searchError = err;
            });
        };

        $scope.incrementObjKey = function (obj, key) {
            $scope[obj][key]++;
        };

        $scope.decrementObjKey = function (obj, key) {
            if ($scope[obj][key] > 1)
                $scope[obj][key]--;
        };

        if ($state.params.query) {
            angular.merge($scope.query, $state.params.query);
            $scope.search();
        }

    }]);
