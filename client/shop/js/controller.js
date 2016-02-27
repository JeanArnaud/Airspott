angular.module("com.airspott.shop").controller("ShopAppCtrl", [
    "$rootScope", '$scope', '$state', '$log', '$translate', 'Buyer',

    function ($rootScope, $scope, $state, $log, $translate, Buyer) {

        $rootScope.countries = ['AT', 'DE', 'CH'];
        $rootScope.saleUnits = ['DAYS', 'HOURS'];

        $rootScope.languages = ['DE', 'EN'];

        $rootScope.currentCurrency = 'EUR';
        $rootScope.currencies = ['EUR', 'USD', 'CHF'];


        $rootScope.meta = {
            title: 'APP_NAME'
        };

        $scope.changeLanguage = function (lang) {
            $translate.use(lang);
        };

        $rootScope.cart = [];

        $rootScope.addToCart = function (item) {
            $rootScope.cart.push(item);
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
