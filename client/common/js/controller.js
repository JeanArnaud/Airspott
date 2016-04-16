angular.module("com.airspott").controller("AppCtrl", ["$rootScope", function ($rootScope){

    $rootScope.meta = {
        title: 'Airspott'
    };

    $rootScope.countries = ['AT', 'DE', 'CH'];

}]);