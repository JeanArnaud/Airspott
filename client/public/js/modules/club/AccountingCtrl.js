angular.module('com.airspott.club').controller('AccountingCtrl', [
    '$rootScope', '$scope', '$state', '$translate', '$log', 'Customer', 'OwnerAccount', 'Message', 'Settings',

    function ($rootScope, $scope, $state, $translate, $log, Customer, OwnerAccount, Message, Settings)
    {

        $rootScope.meta.title = "ACCOUNTING";
        Settings.findOne({
            filter: {
                "where": {
                    "identifier": "clubTOCVersion"
                }
            }
        }, function (setting)
        {
            $scope.tocVersion = setting.value;
        });

        if (!$rootScope.ownerAccount) $scope.fullyNew = true;

        $scope.save = function ()
        {
            $log.log($rootScope.ownerAccount);

            Customer.ownerAccount({id: Customer.getCurrentId()}, function ()
            {

                OwnerAccount.upsert($scope.ownerAccount, function (ownerAccount)
                {

                    $rootScope.ownerAccount = ownerAccount;
                    $rootScope.needsNewOwnerAccount = false;

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
                        $rootScope.needsNewOwnerAccount = false;

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