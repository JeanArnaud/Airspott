angular.module('com.airspott.club')
    .controller('AccountingCtrl',
        [
            '$rootScope', '$scope', '$state', '$translate', '$log', 'Customer', 'OwnerAccount', 'Message',

            function ($rootScope, $scope, $state, $translate, $log, Customer, OwnerAccount, Message)
            {

                $rootScope.meta.title = "ACCOUNTING";

                if (!$rootScope.ownerAccount) $scope.fullyNew = true;

                $scope.save = function ()
                {

                    Customer.ownerAccount({id: Customer.getCurrentId()}, function ()
                    {

                        OwnerAccount.upsert($scope.ownerAccount, function (ownerAccount)
                        {

                            $rootScope.ownerAccount = ownerAccount;

                            $translate('SUCCESS_SAVING_OWNER_ACCOUNT').then(function (translation)
                            {
                                Message.success(translation);

                                $state.go('club.main');
                            });

                        }, function (err)
                        {
                            $translate('ERROR_SAVING_OWNER_ACCOUNT').then(function (translation)
                            {
                                Message.error(translation);
                            });
                        });

                    }, function (err)
                    {
                        if (err.status = 404)
                        {
                            Customer.ownerAccount.create({id: Customer.getCurrentId()}, $scope.ownerAccount, function (ownerAccount)
                            {

                                $rootScope.ownerAccount = ownerAccount;

                                $translate('SUCCESS_SAVING_OWNER_ACCOUNT').then(function (translation)
                                {
                                    Message.success(translation);

                                    $state.go('club.main');
                                });

                            }, function (err)
                            {
                                $translate('ERROR_SAVING_OWNER_ACCOUNT').then(function (translation)
                                {
                                    Message.error(translation);
                                });
                            });
                        }
                    });
                };

            }
        ]);