angular.module('com.airspott.club')
    .controller('SettingsCtrl',
    [
        '$rootScope', '$scope',

        function ($rootScope, $scope)
        {

            $rootScope.meta.title = "CLUB_SETTINGS";

            $scope.settingsLoaded = true;

        }
    ]);