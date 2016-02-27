angular.module('com.airspott.shop', [
    'ui.bootstrap',
    'am.multiselect',
    'leaflet-directive',
    'geolocation',
    'angularSpinner',

    'com.airspott.shop.main',
    'com.airspott.shop.search',
    'com.airspott.shop.account',
    'com.airspott.shop.product',
    'com.airspott.shop.cart'
]).directive('datepicker', function ($parse) {
    return function (scope, element, attrs, controller) {
        var ngModel = $parse(attrs.ngModel);
        $(function () {
            element.datepicker({
                dateFormat: 'dd-mm-yy',
                onSelect: function (dateText, inst) {
                    scope.$apply(function (scope) {
                        // Change binded variable
                        ngModel.assign(scope, dateText);
                    });
                }
            });
        });
    }
});
