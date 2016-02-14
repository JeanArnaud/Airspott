angular.module('com.airspott.shop.search').controller('SearchCtrl', [
    "$rootScope", "$scope", "$state", "$log", "Club", "Offer",
    function ($rootScope, $scope, $state, $log, Club, Offer) {

        $rootScope.meta.title = "SEARCH";

        $scope.offers = Offer.find();

        $scope.extendedSearch = false;
        $scope.extendedOffers = false;
        $scope.collapsed = false;

        $scope.query = {
            freeText: '',
            guestAmount: 1,
            date: new Date(),
            offers: {}
        };

        $scope.toggleCollapsed = function () {
            $scope.collapsed = !$scope.collapsed;
        };

        $scope.toggleExtendedSearch = function () {
            $scope.extendedSearch = !$scope.extendedSearch;
        };

        $scope.toggleExtendedOffers = function () {
            $scope.extendedOffers = !$scope.extendedOffers;
        };

        $scope.search = function () {

            $scope.clubs = Club.find();

            $log.log($scope.clubs);


            //Club.find({
            //    where: {
            //        and: [
            //            {location: $scope.query.freeText},
            //            {guestAmount: $scope.query.guestAmount},
            //            {date: $scope.query.date},
            //            {offers: $scope.query.offers}
            //        ]
            //    }
            //}, function (clubs) {
            //
            //
            //
            //    //$rootScope.clubs = clubs;
            //    //$rootScope.obj = search_obj;
            //    //$state.go('shop.search');
            //}, function (err) {
            //    throw err; // do whatever necessary with the error object
            //});


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
