angular.module('com.airspott.club')
    .controller('ClubCtrl',
    [
        '$rootScope', '$scope', '$location',

        function ($rootScope, $scope, $location)
        {

            $rootScope.meta.title = "OVERVIEW_CLUB";
            $scope.activeLink = function(data)
            {
            	if($location.path() == data)
            	{
            		return 'active';
            	}
            }

        }
    ]);