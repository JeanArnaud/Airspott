angular.module('com.airspott.club')
    .controller('EditClubCtrl',
        [
            '$rootScope', '$stateParams', '$scope', '$log', '$translate', '$state', '$q', 'Club', 'Upload', 'Message', 'Offer', 'Customer', 'TAX', 'Currency',

            function ($rootScope, $stateParams, $scope, $log, $translate, $state, $q, Club, Upload, Message, Offer, Customer, TAX, Currency)
            {
                'use strict';

                $scope.taxes = TAX.find();
                $scope.offers = Offer.find();
                $scope.currencies = Currency.find();
                $scope.loading = true;
                $scope.activeItem = "general";
                $scope.capacityPlanningEntries = [[]];

                $scope.openCapacityModal = function ()
                {
                    var $el = jQuery('#calendarEventModal');

                    $el.modal('show');
                    $el.on('hide.bs.modal', function ()
                    {
                        $scope.eventInChange = null;
                    });
                };

                $scope.hideCapacityModal = function ()
                {
                    jQuery('#calendarEventModal').modal('hide');
                };

                $scope.generateCalConfig = function ()
                {
                    $log.log($scope.club);
                    $log.log($scope.club.saleUnit);

                    if (!$scope.club.saleUnit) return;

                    $scope.calConfig = {
                        calendar: {
                            editable: true,
                            header: {
                                left: 'title',
                                center: '',
                                right: 'today prev,next' + ($scope.club.saleUnit == 'DAYS' ? 'month' : 'agendaWeek')
                            },

                            selectable: true,
                            selectHelper: true,

                            eventClick: function (date, jsEvent, view)
                            {

                                $scope.eventInChange = date;

                                $scope.modal = {
                                    cal: this.calendar,
                                    start: date.start,
                                    end: date.end
                                };

                                if ($scope.eventInChange.price)
                                {
                                    $scope.modal.price = $scope.eventInChange.price;
                                }
                                else if ($scope.eventInChange.capacity)
                                {
                                    $scope.modal.capacity = $scope.eventInChange.capacity;
                                }

                                $scope.openCapacityModal();

                                $log.log(date);
                                $log.log(jsEvent);
                                $log.log(view);
                                $log.log($scope.capacityPlanningEntries);

                            },

                            select: function (start, end)
                            {
                                $scope.modal = {
                                    cal: this.calendar,
                                    start: start,
                                    end: end
                                };

                                $scope.openCapacityModal();

                                this.calendar.unselect();
                            }
                        }
                    };
                };

                $scope.editorToolbar = [
                    ['bold', 'italics', 'underline', 'ul', 'ol', 'h6', 'p', 'quote'],
                    ['justifyLeft', 'justifyCenter', 'justifyRight']
                ];

                $scope.updateCapacities = function ()
                {
                    //@todo update the modal!
                    if ($scope.eventInChange)
                    {
                        if ($scope.eventInChange.price)
                        {
                            $scope.eventInChange.price = $scope.modal.price;
                        }
                        else if ($scope.eventInChange.capacity)
                        {
                            $scope.eventInChange.capacity = $scope.modal.capacity;
                        }

                        $scope.hideCapacityModal();

                        return;
                    }

                    if ($scope.modal.price)
                    {
                        $scope.capacityPlanningEntries[0].push({
                            title: 'DEFAULT_PRICE_CHANGE',
                            start: $scope.modal.start,
                            end: $scope.modal.end,
                            price: $scope.modal.price
                        });
                    }

                    if ($scope.modal.capacity)
                    {
                        $scope.capacityPlanningEntries[0].push(
                            {
                                title: 'DEFAULT_CAPACITY_CHANGE',
                                start: $scope.modal.start,
                                end: $scope.modal.end,
                                backgroundColor: '#378006',
                                capacity: $scope.modal.capacity
                            });
                    }

                    $scope.hideCapacityModal();

                };

                $scope.setActiveItem = function (item)
                {
                    $scope.activeItem = item;
                };

                var clubId = $stateParams.id;
                if (clubId && clubId != '')
                {
                    $rootScope.meta.title = "EDIT_CLUB";
                    $scope.media = [];

                    $scope.club = Club.findById({id: clubId}, {include: ['address']}, function (club)
                    {

                        $scope.loading = false;

                        $scope.media = Club.media({id: club.id});

                        Club.planningEntries({id: club.id}, function (entries)
                        {
                            for (var i in entries)
                            {
                                if (!entries.hasOwnProperty(i)) continue;

                                entries[i].start = new Date(entries[i].start);
                                entries[i].end = new Date(entries[i].end);

                                if (entries[i].price)
                                {
                                    entries[i].title = 'DEFAULT_PRICE_CHANGE';
                                }
                                else if (entries[i].capacity)
                                {
                                    entries[i].title = 'DEFAULT_CAPACITY_CHANGE';
                                    entries[i].backgroundColor = '#378006';
                                }

                            }

                            //@todo: this does not correctly render the fucking calendar!
                            $scope.capacityPlanningEntries = [entries];
                            $scope.generateCalConfig();

                        });

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
                        customerId: Customer.getCurrentId(),
                        _address: {},
                        openingHours: {"MO": {}, "TU": {}, "WE": {}, "TH": {}, "FR": {}, "SA": {}, "SU": {}, "HOLIDAY": {}}
                    };

                    $scope.loading = false;
                }

                var save = function ()
                {

                    var saveCapacityPlanning = function (club)
                    {
                        var promises = [];

                        for (var i = 0; i < $scope.capacityPlanningEntries[0].length; i++)
                        {

                            var origEntry = $scope.capacityPlanningEntries[0][i];
                            var oneEntry;

                            if (origEntry.clubId)
                            {
                                oneEntry = Club.planningEntries.updateById({
                                    id: club.id,
                                    fk: $scope.origEntry.id
                                }, $scope.origEntry);
                            }
                            else
                            {
                                oneEntry = Club.planningEntries.create({id: club.id}, origEntry);
                            }

                            promises.push(oneEntry.$promise);
                        }


                        return promises;
                    };

                    var saveMedia = function (club)
                    {
                        var promises = [];

                        for (var i = 0; i < $scope.media.length; i++)
                        {

                            var oneMedia;

                            if ($scope.media[i].clubId)
                            {
                                oneMedia = Club.media.updateById({
                                    id: club.id,
                                    fk: $scope.media[i].id
                                }, $scope.media[i]);
                            }
                            else
                            {
                                oneMedia = Club.media.create({id: club.id}, $scope.media[i]);
                            }

                            promises.push(oneMedia.$promise);
                        }

                        return promises;
                    };

                    Club.upsert($scope.club, function (club)
                    {

                        var promises1 = saveMedia(club);
                        var promises2 = saveCapacityPlanning(club);

                        var promises = promises1.concat(promises2);

                        $q.all(promises).then(function ()
                        {
                            $translate('CREATE_CLUB_SUCCESS_MESSAGE').then(function (translation)
                            {
                                Message.success(translation).then(function ()
                                {
                                    $scope.transitTo('club.manage');
                                });
                            });

                        }, function (err)
                        {

                            $translate('GENERIC_ERROR_CLUB_CREATE_MEDIA_NOT_SAVED').then(function (translation)
                            {
                                Message.error(translation);
                            });

                        });
                    }, function (err)
                    {
                        $translate('GENERIC_ERROR_CLUB_CREATE').then(function (translation)
                        {
                            Message.error(translation);
                        });
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
                        $translate('GENERIC_ERROR_CLUB_MEDIA_ENCODE').then(function (translation)
                        {
                            Message.error(translation);
                        });
                    });
                };

            }
        ]);