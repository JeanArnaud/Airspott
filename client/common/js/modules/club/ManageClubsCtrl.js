angular.module('com.airspott.club')
    .controller('ManageClubsCtrl',
        [
            '$rootScope', '$scope', '$log', 'Club', 'Customer',

            function ($rootScope, $scope, $log, Club, Customer)
            {

                $rootScope.meta.title = "MANAGE_MY_CLUBS";

                $scope.clubs = Customer.clubs({
                    id: Customer.getCurrentId(),
                    filter: {
                        include: ['address', {
                            relation: 'media',
                            scope: {order: 'order ASC', limit: 1}
                        }]
                    }
                }, function (clubs)
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