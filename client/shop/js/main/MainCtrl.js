angular.module('com.airspott.shop.main')
    .controller('ShopMainCtrl', [
        "$rootScope", "$scope", "$log", "geolocation", "Offer",
        function ($rootScope, $scope, $log, Geolocation, Offer) {

            $rootScope.meta.title = "WELCOME";

            $scope.searchQuery = {
                query: '',
                amount: 1,
                date: new Date(),
                offers: []
            };

            $scope.selected = function ()
            {
              $log.log($scope.searchQuery);
            };

            $scope.offers = Offer.find();

            $scope.locate = function () {
                $scope.location = "LOCATING";

                Geolocation.getLocation().then(function (location) {
                    $scope.location = location;

                    $scope.mapSettings.center.lat = location.coords.latitude;
                    $scope.mapSettings.center.lon = location.coords.longitude;
                    $scope.mapSettings.center.zoom = 12;

                    $scope.searchQuery.query = JSON.stringify([location.coords.latitude, location.coords.longitude]);

                }, function (err) {
                    $scope.location = err;
                });
            };

            $scope.mapSettings = {
                center: {
                    lat: 48.20,
                    lng: 16.37,
                    zoom: 8
                },
                defaults: {
                    scrollWheelZoom: false
                }
            };

        }]);
