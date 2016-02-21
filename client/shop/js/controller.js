angular.module("com.airspott.shop").controller("ShopAppCtrl", ["$rootScope", '$scope', '$state', '$log', '$translate', 'Buyer', 'Club',
    function ($rootScope, $scope, $state, $log, $translate, Buyer, Club) {

        $rootScope.countries = ['AT', 'DE', 'CH'];
        $rootScope.saleUnits = ['DAYS', 'HOURS'];
        $rootScope.languages = ['DE', 'EN'];
        $scope.search_obj = {};

        $rootScope.meta = {
            title: 'APP_NAME'
        };

        $scope.changeLanguage = function (lang) {
            alert(lang);
            $translate.use(lang);
        };

        /*if (!Buyer.isAuthenticated()) {
         $rootScope.user = Buyer.getCurrent(function (user) {

         }, function (err) {

         });

         return;
         }*/

        $rootScope.meta = {
            title: 'APP_NAME'
        };

        $scope.logout = function () {
            Buyer.logout(function () {
                $state.go('shop.logout');
            });
        };

        $scope.transitTo = function (state, params) {
            $state.go(state, params);
        };

    }]);
