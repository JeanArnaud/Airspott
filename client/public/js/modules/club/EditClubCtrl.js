angular.module('com.airspott.club')
    .controller('EditClubCtrl',
    [
        '$rootScope', '$stateParams', '$scope', '$log', '$translate', '$state', 'Club', 'Upload', 'Message',

        function ($rootScope, $stateParams, $scope, $log, $translate, $state, Club, Upload, Message)
        {

            $scope.updateCapacities = function ()
            {
                jQuery('#calendarEventModal').modal('hide');

                if ($scope.modal.price)
                {
                    $scope.modal.cal.renderEvent({
                        title: 'DEFAULT_PRICE_CHANGE',
                        start: $scope.modal.start,
                        end: $scope.modal.end
                    }, true);
                }

                if ($scope.modal.capacity)
                {
                    $scope.modal.cal.renderEvent({
                        title: 'DEFAULT_CAPACITY_CHANGE',
                        start: $scope.modal.start,
                        end: $scope.modal.end,
                        backgroundColor: '#378006'
                    }, true);
                }
            };

            $scope.calConfig = {
                calendar: {
                    editable: true,
                    header: {
                        left: 'prev,next today',
                        center: 'title',
                        right: 'month,agendaWeek,agendaDay'
                    },

                    selectable: true,
                    selectHelper: true,

                    select: function (start, end)
                    {
                        $scope.modal = {
                            cal: this.calendar,
                            start: start,
                            end: end
                        };

                        jQuery('#calendarEventModal').modal('show');

                        this.calendar.unselect();
                    }
                }
            };


            $scope.activeItem = "general";

            $scope.setActiveItem = function (item)
            {
                $scope.activeItem = item;
            };

            var clubId = $stateParams.id;

            if (clubId && clubId != '')
            {
                $rootScope.meta.title = "EDIT_CLUB";
                $scope.media = [];

                $scope.club = Club.findById({id: clubId}, function (club)
                {

                }, function (err)
                {
                    Message.error('GENERIC_ERROR_CLUB_LOAD');
                });
            }
            else
            {
                $scope.media = [];
                $rootScope.meta.title = "ADD_CLUB";

                $scope.club = {
                    address: {}
                };
            }

            var save = function ()
            {
                Club.upsert($scope.club, function (club)
                {
                    $translate(['CREATE_CLUB_MODAL_SUCCESS_TITLE', 'CREATE_CLUB_MODAL_SUCCESS_CONTENT', 'CREATE_CLUB_MODAL_SUCCESS_BUTTON']).then(function (translation)
                    {
                        Message.success('CREATE_CLUB_SUCCESS_MESSAGE').then(function ()
                        {
                            $scope.transitTo('club.manage');
                        });
                    });
                }, function (err)
                {
                    Message.error('GENERIC_ERROR_CLUB_CREATE');
                });
            };

            var saveActionEventOff = $rootScope.$on('saveAction', save);

            $rootScope.saveActionAvailable = true;

            $scope.$on("$destroy", function ()
            {
                $rootScope.saveActionAvailable = null;

                saveActionEventOff();
            });

            $scope.processFiles = function (files)
            {
                Upload.base64DataUrl(files).then(function (urls)
                {
                    for (var i = 0; i < urls.length; i++)
                    {
                        $scope.media.push({
                            media: urls[i],
                            description: '',
                            name: ''
                        });
                    }

                    $log.log($scope.media);

                }, function (err)
                {
                    Message.error('GENERIC_ERROR_CLUB_MEDIA_ENCODE');
                });
            };
        }
    ]);