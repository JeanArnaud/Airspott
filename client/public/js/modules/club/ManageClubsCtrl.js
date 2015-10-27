angular.module('com.airspott.club')
    .controller('ManageClubsCtrl',
    [
        '$rootScope', '$scope', 'Club',

        function ($rootScope, $scope, Club)
        {

            $rootScope.meta.title = "MANAGE_MY_CLUBS";

            $scope.clubs = Club.find({include: ['address']}, function (clubs)
            {
                $scope.clubsLoaded = true;
            }, function (err)
            {
                $scope.clubsLoaded = true;
            });

            $rootScope.addActionAvailable = true;

            $scope.$on("$destroy", function ()
            {
                $rootScope.addActionAvailable = null;
            });

            $rootScope.$on('addAction', function ()
            {
                $scope.transitTo('club.edit');
            });

        }
    ]);