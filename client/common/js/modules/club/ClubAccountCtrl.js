angular.module('com.airspott.club')
    .controller('ClubAccountCtrl',
        [
            '$rootScope', '$scope', '$log', '$state', '$location', '$translate', 'Customer', 'Message',

            function ($rootScope, $scope, $log, $state, $location, $translate, Customer, Message)
            {
                $scope.title = "CLUB_LOGIN";

                $scope.credentials = {};
                $scope.rememberMe = true;

                $scope.login = function ()
                {
                    Customer.login({rememberMe: $scope.rememberMe}, $scope.credentials, function ()
                    {
                        var next = $location.nextAfterLogin || '/main';
                        $location.nextAfterLogin = null;
                        $location.path(next);
                    }, function (err)
                    {
                        $translate('LOGIN_ERROR_GENERIC').then(function (translation)
                        {
                            Message.error(translation);
                        });
                    });
                };

                $scope.register = {};

                $scope.registerNow = function ()
                {

                    Customer.create($scope.register, function ()
                    {

                        $translate('REGISTER_SUCCESS').then(function (translation)
                        {
                            Message.success(translation).then(function ()
                            {
                                $state.go('clubLogin');
                            });
                        });

                    }, function (err)
                    {
                        var errorCode = 'GENERIC';

                        switch (err.data.error.status)
                        {

                            case 422:
                                errorCode = 'INVALID_DATA';
                                break;

                        }

                        $translate('REGISTER_ERROR_' + errorCode).then(function (translation)
                        {
                            $log.log(err);

                            Message.error(translation);
                        });

                    });

                };

            }
        ]);
