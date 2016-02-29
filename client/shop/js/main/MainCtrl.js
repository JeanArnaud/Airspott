angular.module('com.airspott.shop.main')
    .controller('ShopMainCtrl', [
        "$rootScope", "$scope", "$log", "$window", "$translate", "geolocation", "Offer",
        function ($rootScope, $scope, $log, $window, $translate, Geolocation, Offer) {

            $rootScope.meta.title = "WELCOME";

            $scope.searchQuery = {
                query: '',
                amount: 1,
                date: new Date(),
                offers: []
            };

            $scope.shallAffixSearch = false;

            var searchBar = $window.document.getElementById('searchBar'),
                headerBar = $window.document.getElementById('headerBar');

            $window.onscroll = function () {

                var scrollPos = document.body.scrollTop || document.documentElement.scrollTop || 0;

                $scope.shallAffixSearch = scrollPos > 350;

                $scope.$digest();
            };

            $scope.offers = Offer.find();

            $scope.locate = function () {
                $scope.location = "LOCATING";

                Geolocation.getLocation().then(function (location) {
                    $scope.location = location;

                    $translate('GLOBAL.CURRENT_LOCATION').then(function (translation) {

                        $scope.mapSettings.markers.currentLocation = {
                            lat: location.coords.latitude,
                            lng: location.coords.longitude,
                            focus: true,
                            message: translation,
                            draggable: false
                        };

                    });

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
                },
                markers: {}
            };

        }]);
