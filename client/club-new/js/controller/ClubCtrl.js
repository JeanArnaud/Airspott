angular.module('com.airspott.club')
    .controller('ClubCtrl',
    [
        '$rootScope', '$scope', '$location','Club','Customer', '$log', 'Offer', 'Upload',
         'Currency', '$http', '$stateParams',

        function ($rootScope, $scope, $location, Club, Customer, $log, Offer, Upload, Currency, $http, $stateParams)
        {

            $scope.capacityPlanningEntries = [[]];
            $scope.mediaRange = [];
            $scope.media = [];
            $scope.currencies = Currency.find();
            $scope.offers = Offer.find();
            $rootScope.meta.title = "MANAGE_CLUB";
            $scope.clubs = Club.find({filter : {where : {customerId : Customer.getCurrentId()}}});
            $scope.pageSize = 5;
            $scope.currentPage = 1;
            
            $scope.activeLink = function(data)
            {
            	if($location.path() == data)
            	{
            		return 'active';
            	}
            }         
           
            if($stateParams.id != '')
            {
                $scope.clubid = $stateParams.id;
                // console.log("clubid = "+$scope.clubid);
                $scope.clubdetail = Club.findOne({"id": $scope.clubid});
                $http.get("/api/Clubs/"+$scope.clubid+"/manager").success(function(res)
                {
                    $scope.fd.email= res.email;
                    $scope.oldemail = res.email;
                });
            }
            else
            {
                $scope.clubid = '';
                
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
                        "Bank_Holiday": {}
                    },
                    gender : "male"
                    
                };
            }
            
            // Form data
            $scope.fd = {};

            // Check Variable Empty or not
            $scope.checkEmpty = function(val)
            {
                if(Object.keys(val).length == 0)
                {
                    return false;
                }
                else
                {
                    return true;
                }
            }
            // Upload Cover Photo
            $scope.coverPhoto = {};
            $scope.uploadCoverPhoto = function(file)
            {
                 Upload.base64DataUrl(file).then(function (url)
                 {
                    $scope.coverPhoto = {'media' : url[0], 'description' : '', 'name' : '', 'type' : 'coverPhoto'};
                    console.log($scope.coverPhoto);
                 },function(err){
                    $translate('GENERIC_ERROR_CLUB_MEDIA_ENCODE').then(function (translation)
                    {
                        Message.error(translation);
                    });
                 });
            }

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

                if (!$scope.clubdetail.saleUnit) 
                {
                    $('.calhide').hide();
                        return;
                }
                $('.calhide').show();
                $scope.calConfig = {
                    calendar: {
                        editable: true,
                        header: {
                            left: 'title',
                            center: '',
                            right: 'today' + ($scope.clubdetail.saleUnit == 'DAYS' ? 'month' : 'agendaWeek'),
                            right: 'today prev,next'
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
            
            // Capacity or planning changed
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
                        title: 'Unit Price '+$scope.modal.price,
                        start: $scope.modal.start,
                        end: $scope.modal.end,
                        price: $scope.modal.price
                    });
                }

                if ($scope.modal.capacity)
                {
                    $scope.capacityPlanningEntries[0].push(
                        {
                            title: 'Amount available '+$scope.modal.capacity,
                            start: $scope.modal.start,
                            end: $scope.modal.end,
                            backgroundColor: '#378006',
                            capacity: $scope.modal.capacity
                        });
                }

                $scope.hideCapacityModal();

            };

            
            

            // Add new club within database
            $scope.AddnewClub = function()
            {
                if($scope.clubid == '')
                {
                    $scope.fd.password = Math.floor((Math.random() * 10000) + 1000).toString();
                    $scope.fd.credentials = {"passwd" : $scope.fd.password};
                    $scope.fd.realm = 'clubmanager';
                    console.log($scope.fd);
                    Customer.create($scope.fd, function(user)
                    {
                        $scope.clubdetail.customerId = $rootScope.user.id;
                        $scope.clubdetail.managerId = user.id;
                        $scope.clubdetail.status = "In-complete";
                        Club.create($scope.clubdetail, function(club)
                        {
                            $scope.clubid = club.id;
                            $scope.clubdetail = club;
                        });
                        $scope.fd = user;
                        $scope.oldemail = user.email;
                    });
                    console.log("Club inof = "+ JSON.stringify($scope.clubdetail));
                }
                else
                {
                    if($scope.fd.email != $scope.oldemail)
                    {
                        $scope.fd.password = Math.floor((Math.random() * 10000) + 1000).toString();
                        $scope.fd.credentials = {"passwd" : $scope.fd.password};
                        $scope.fd.realm = 'clubmanager';
                        Customer.create($scope.fd, function(user)
                        {
                            $scope.clubdetail.managerId = user.id;
                            $scope.oldemail = user.email;
                            $scope.clubdetail.$save();
                        });
                       // console.log("old = "+$scope.oldemail + " "+"newemail = "+$scope.fd.email);
                    }
                    else
                    {
                        // Update clubdeatil
                        $scope.clubdetail.$save();
                    }
                }
            }
            // get child activity from parent id      
            $('.activity').live('click', function()
            {
                var flag = $(this).prop('checked');
                if(flag)
                {
                    var str = '';
                    // $scope.child = [];
                    var pid = $(this).val();
                    for(var i=0; i<$scope.offers.length; i++)
                    {
                        if($scope.offers[i].offerId == pid)
                        {
                            str += '<div class="checkbox child_'+pid+'" style="margin-left:1em">';
                            str +='<label>';
                            str +='<input type="checkbox" class="activity" ng-model"offer.link" value="'+$scope.offers[i].id+'"/>';
                            str += $scope.offers[i].identifier;
                            str +='</label>';
                            if(typeof($scope.offers[i].extraprice) != 'undefined')
                            {
                                str +='&nbsp;&nbsp&nbsp<label>';
                                str += $scope.offers[i].extraprice;
                                str +='</label>';
                            }
                            
                            str +='</div>';
                        }
                    }
                    $(this).parent().parent().append(str);    
                }
                else
                {
                    $(this).parent().parent().find(".child_"+$(this).val()).remove();
                }
            });
            // Add new Activity
            $scope.newoffer = {};
            $scope.newoffer.offerId = '';
            $scope.addActvity = function()
            {
                if(typeof($scope.newoffer.identifier) != 'undefined')
                {
                    if($scope.newoffer.offerId != '')
                    {
                      $scope.newoffer.parent = $('#offer1 option:selected').text();
                    }
                    else
                    {
                        $scope.newoffer.parent = '';   
                    }
                    Offer.create($scope.newoffer, function(data){
                        $scope.offers.push(data);
                        $scope.newoffer = {};
                        $scope.nameerr = '';
                        $('#offer').modal('hide');
                    });
                    
                }
                else
                {
                    $scope.nameerr = 'Please enter activity name.';
                }
            }
           
            // Copy Current settings to next day
            $scope.copyToNextDay = function(day, obj)
            {
                var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ,'Sunday', 'Bank Holiday'];
                var nxt = days[days.indexOf(day)+1];
                if(($('#break_'+nxt).html() == "Don't want a middle Break?" &&  $('#btn_'+nxt).html() == 'Day Off-Closed'))
                {
                    $scope.clubdetail.openingHours[days[days.indexOf(day)+1]] = angular.copy($scope.clubdetail.openingHours[day]);
                }
                else if(($('#break_'+nxt).html() == "Want a middle Break?" && $('#btn_'+nxt).html() == 'Day Off-Closed'))
                {
                    $scope.clubdetail.openingHours[nxt].openFrom = angular.copy($scope.clubdetail.openingHours[day].openFrom);
                    $scope.clubdetail.openingHours[nxt].openTo = angular.copy($scope.clubdetail.openingHours[day].openTo);
                }

            }

            // Closed club on particular day
            $scope.closeDay = function(day)
            {
                if($('#btn_'+day).html() == 'Day Off-Closed')
                {
                    $('#'+day).hide();
                    $('#btn_'+day).html('Open');
                    $scope.clubdetail.openingHours[day] = {};
                }
                else
                {
                    $('#'+day).show();   
                    $('#btn_'+day).html('Day Off-Closed');   
                    $scope.clubdetail.openingHours[day] = {};
                }
            }

            // Manage Break
            $scope.break = function(day)
            {
                if($('#break_'+day).html() == 'Want a middle Break?')
                {
                    $('#wbreak_'+day).show();
                    $('#break_'+day).html("Don't want a middle Break?");  
                    
                }
                else
                {
                    $('#wbreak_'+day).hide();
                    $('#break_'+day).html("Want a middle Break?");   
                    $scope.clubdetail.openingHours[day].breakFrom = '';
                    $scope.clubdetail.openingHours[day].breakTo = '';
                }
            }

            // Copy to all days
            $scope.copyToAllDays = function(day)
            {
                for(var d in $scope.clubdetail.openingHours)
                {
                    if(day != d)
                    {
                        $scope.clubdetail.openingHours[d] = angular.copy($scope.clubdetail.openingHours[day]);       
                    }
                }
            }
        }
    ]);