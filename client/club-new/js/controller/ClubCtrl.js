angular.module('com.airspott.club')
    .controller('ClubCtrl',
    [
        '$rootScope', '$scope', '$location','Club','Customer', '$log', 'Currency', 'Offer', 'Upload',

        function ($rootScope, $scope, $location, Club, Customer, $log, Currency, Offer, Upload)
        {

            $scope.capacityPlanningEntries = [[]];
            $scope.currencies = Currency.find();
            $scope.offers = Offer.find();
            $rootScope.meta.title = "MANAGE_CLUB";
            $scope.activeLink = function(data)
            {
            	if($location.path() == data)
            	{
            		return 'active';
            	}
            }
            $scope.mediaRange = [];
             $scope.media = [];
            // Club detail json
            $scope.clubdetail = 
            {
                customerId: Customer.getCurrentId(),
                openingHours: {
                    "Monday": {},
                    "Tuesday": {},
                    "Wednesday": {},
                    "Thursday": {},
                    "Friday": {},
                    "Saturday": {},
                    "Sunday": {},
                    "Holyday": {}
                }
            };
            // Form data
            $scope.fd = {};

            // File upload code
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

                        $scope.mediaRange.push($scope.media.length);
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
            // Change the order of uploaded image
            $scope.updateMediaSortOrder = function (to, previous, hashKey)
            {
                previous = parseInt(previous, 10);

                $log.log("previous", previous);

                for (var i = 0; i < $scope.media.length; i++)
                {
                    $log.log($scope.media[i]);
                    $log.log("order", $scope.media[i].order);
                    if ($scope.media[i].order == to && $scope.media[i].$$hashKey !== hashKey) $scope.media[i].order = previous;
                }
            };

            // Open modal on calender cell clicked
            $scope.openCapacityModal = function ()
            {
                var $el = jQuery('#calendarEventModal');

                $el.modal('show');
                $el.on('hide.bs.modal', function ()
                {
                    $scope.eventInChange = null;
                });
            };
            // hide model open modal
            $scope.hideCapacityModal = function ()
            {
                jQuery('#calendarEventModal').modal('hide');
            };
            // Generate calender as quantity change
            $scope.generateCalConfig = function ()
            {
                $log.log($scope.clubdetail);
                $log.log($scope.clubdetail.saleUnit);

                if (!$scope.clubdetail.saleUnit) return;

                $scope.calConfig = {
                    calendar: {
                        editable: true,
                        header: {
                            left: 'title',
                            center: '',
                            right: 'today prev,next' + ($scope.clubdetail.saleUnit == 'DAYS' ? 'month' : 'agendaWeek')
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
            
            // Add new club within database
            $scope.AddnewClub = function()
            {
                // $scope.clubdetail.responsibleName = $scope.lname+" "+$scope.fname;
                // $scope.clubdetail.customerId = $rootScope.user.id;
                // console.log("Customer = "+JSON.stringify($scope.fd));
                // console.log('Club = '+JSON.stringify($scope.clubdetail));
                // $scope.realm = 'manager';
                // Customer.create($scope.fd, function(data)
                // {
                //     console.log(data);
                // });
            }

        }
    ]);