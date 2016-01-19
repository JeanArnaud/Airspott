angular.module("com.airspott").controller("AppCtrl", ["$rootScope", function ($rootScope){

    $rootScope.meta = {
        title: 'APP_NAME'
    };

    $rootScope.countries = ['AT', 'DE', 'CH'];

}]);