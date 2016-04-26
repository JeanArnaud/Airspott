angular.module('com.airspott.club')
    .controller('ClubCtrl',
    [
        '$rootScope', '$scope', '$location','Club','Customer', '$log', 'Offer', 'Upload',
         'Currency', '$http', '$stateParams', '$state','$compile',

        function ($rootScope, $scope, $location, Club, Customer, $log, Offer, Upload, Currency, $http, $stateParams, $state, $compile)
        {

            $scope.capacityPlanningEntries = [[]];
            $scope.mediaRange = [];
            $scope.media = [];
            $scope.cluboffers = [];
            $scope.coverPhoto = {};
            $scope.currencies = Currency.find();
            $scope.offers = Offer.find();
            $rootScope.meta.title = "MANAGE_CLUB";
            $scope.clubs = Club.find({filter : {where : {customerId : Customer.getCurrentId()}}});
            $scope.pageSize = 5;
            $scope.currentPage = 1;
            $scope.step = 1;
            
            $scope.activeLink = function(data)
            {
            	if($location.path() == data)
            	{
            		return 'active';
            	}
            }     

            // Manage previous Step pointer
            $scope.prevStep = function()
            {
                $scope.step--;
                if($scope.step <= 0)
                {
                    $scope.step = 1;
                }
                console.log("step = "+$scope.step);
            }
           
            if($stateParams.id && $stateParams.id != '')
            {
                $scope.clubid = $stateParams.id;
                $scope.clubdetail = Club.findById({id: $scope.clubid}, {include: ['address']}, function (club)
                {

                    $scope.loading = false;
                   
                    if(typeof(club.coverPhoto) != 'undefined')
                    {
                        $scope.coverPhoto = club.coverPhoto;
                    }
                    
                    // get media from club id
                    $scope.media = Club.media({id: $scope.clubid}, {order: 'order ASC'}, function (media)
                    {

                    });

                    // get planning entries from club id
                    Club.planningEntries({id: $scope.clubid}, function (entries)
                    {
                        for (var i in entries)
                        {  
                            if (!entries.hasOwnProperty(i)) continue;

                            entries[i].start = new Date(entries[i].start);
                            entries[i].end = new Date(entries[i].end);

                            if (entries[i].price)
                            {
                                entries[i].title = entries[i].title;
                            }
                            else if (entries[i].capacity)
                            {
                                entries[i].title = entries[i].title;
                                entries[i].backgroundColor = '#378006';
                            }

                        }

                        //@todo: this does not correctly render the shitty calendar!
                        $scope.capacityPlanningEntries = [entries];
                        $scope.generateCalConfig();
                    });
                    
                    // get billing details from club id
                    $http.get("/api/Clubs/"+club.id+"/billing").success(function(bank)
                    {
                        $scope.bill = bank;                        
                    });

                    if(typeof(club.activities) != 'undefined' && angular.isArray(club.activities))
                    {
                        $scope.cluboffers = club.activities;
                        for(var i=0; i<$scope.cluboffers.length; i++)
                        {
                            for(var j=0; j<$scope.offers.length; j++)
                            {
                                if($scope.cluboffers[i] == $scope.offers[j].id)
                                {
                                    $scope.offers[j].link = true;
                                    break;
                                }
                            }
                        }
                    }
                    

                    

                }, function (err)
                {
                    Message.error('GENERIC_ERROR_CLUB_LOAD');
                });
                
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
                $scope.modal.end = Date();
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
                   var modal = {
                        title: 'Unit Price '+$scope.modal.price,
                        start: $scope.modal.start,
                        end: $scope.modal.end,
                        backgroundColor: '#378006',
                        price: $scope.modal.price
                    };
                    $scope.capacityPlanningEntries[0].push(modal);
                }

                if ($scope.modal.capacity)
                {
                    var modal1 = {
                            title: 'Amount available '+$scope.modal.capacity,
                            start: $scope.modal.start,
                            end: $scope.modal.end,
                            backgroundColor: '#378006',
                            capacity: $scope.modal.capacity
                    }
                    $scope.capacityPlanningEntries[0].push(modal1);
                }
                $scope.hideCapacityModal();

            };

            
            // Check validation for billing details
            var bankValidation = function()
            {
                if($("[name='currency']").val() == '')
                {
                    $(".bnkerr").show();
                    return false;
                }
                if($("[name='bank']").val() == '')
                {
                    $(".bnkerr").show();
                    return false;
                }
                if($("[name='iban']").val() == '')
                {
                    $(".bnkerr").show();
                    return false;
                }
                if($("[name='bic']").val() == '')
                {
                    $(".bnkerr").show();
                    return false;
                }
                if($("[name='acholder']").val() == '')
                {
                    $(".bnkerr").show();
                    return false;
                }
                return true;
            }

            // Add new club into the database
            $scope.AddnewClub = function()
            {
                console.log("ClubId = "+$scope.clubid);

                if($scope.clubid == '')
                {
                    $scope.clubdetail.status = "In-complete";
                    if($scope.step == 1)
                    {
                        // Add club into database
                        Club.create($scope.clubdetail, function(club)
                        {
                            $scope.clubid = club.id;
                            $scope.clubdetail = club;
                            $scope.step++;
                        });
                        console.log($scope.fd);

                        // Random generated password
                        $scope.fd.password = Math.floor((Math.random() * 10000) + 1000).toString();
                        $scope.fd.credentials = {"passwd" : $scope.fd.password};
                        $scope.fd.realm = 'clubmanager';

                        // Add manager into database
                        Customer.create($scope.fd, function(user)
                        {
                            $(".errmsg").hide();
                            $scope.clubdetail.managerId = user.id;
                            $scope.clubdetail.email = user.email;
                            
                            $scope.fd = user;
                            $scope.oldemail = user.email;
                        },function(err)
                        {
                            if(err.data.error.details.messages.email.length == 2)
                            {
                                $scope.errmsg = "Email "+err.data.error.details.messages.email[0];    
                            }
                            else
                            {
                                $scope.errmsg = err.data.error.details.messages.email[0];
                            }
                            $(".errmsg").show();
                        });
                    }
                    console.log("step = "+$scope.step);
                }
                else
                {
                    if($scope.step == 1)
                    {
                        // Update club manager email id
                        if($scope.fd.email != $scope.oldemail)
                        {
                            
                            $scope.fd.password = Math.floor((Math.random() * 10000) + 1000).toString();
                            $scope.fd.credentials = {"passwd" : $scope.fd.password};
                            $scope.fd.realm = 'clubmanager';
                            // Addd club manager 
                            Customer.create($scope.fd, function(user)
                            {
                                $(".errmsg").hide();
                                $scope.clubdetail.managerId = user.id;
                                $scope.clubdetail.email = user.email;
                                $scope.clubdetail.$save();
                                $scope.oldemail = user.email;
                                $scope.fd = user;

                            },function(err)
                            {
                                $scope.errmsg = err.email;
                                $(".errmsg").show();
                            });
                           console.log("old = "+$scope.oldemail + " "+"newemail = "+$scope.fd.email);
                        }
                        else
                        {
                            $scope.clubdetail.email = $scope.fd.email;
                            $scope.clubdetail.$save();
                        }
                        
                    }

                    if($scope.step == 2)
                    {
                        // Update clubdeatil
                        $scope.clubdetail.$save();
                    }

                    if($scope.step == 3)
                    {
                        // Add/Edit planning entries into club
                        if($scope.capacityPlanningEntries[0].length != 0)
                        {
                            for(var i = 0 ; i < $scope.capacityPlanningEntries[0].length; i++)
                            {
                                var origEntry = $scope.capacityPlanningEntries[0][i];

                                var oneEntry;
                                if (origEntry.clubId != null)
                                {

                                    var modal = '';
                                    if(origEntry.price)
                                    {
                                        modal = {
                                            id : origEntry.id,
                                            clubId : origEntry.clubid,
                                            title : origEntry.title,
                                            price : origEntry.price,
                                            start : origEntry.start,
                                            end : origEntry.end
                                        };
                                        Club.planningEntries.updateById({
                                            id: origEntry.clubId,
                                            fk: origEntry.id
                                        }, modal);
                                    }    
                                    if(origEntry.capacity)
                                    {
                                        modal = {
                                            id : origEntry.id,
                                            clubId : origEntry.clubid,
                                            title : origEntry.title,
                                            capacity : origEntry.price,
                                            backgroundColor : origEntry.backgroundColor,
                                            start : origEntry.start,
                                            end : origEntry.end
                                        };
                                        Club.planningEntries.updateById({
                                            id: origEntry.clubId,
                                            fk: origEntry.id
                                        }, modal);
                                    }
                                    
                                    // $http.put("/api/Clubs/"+origEntry.clubId+"/planningEntries/"+origEntry.id,origEntry);
                                }
                                else
                                {
                                    oneEntry = Club.planningEntries.create({id: $scope.clubid}, origEntry);
                                }
                            }

                        }
                    }
                      
                    if($scope.step == 4)
                    {
                         // Add/Edit Activity entries into club
                           $scope.clubdetail.activities = angular.copy($scope.cluboffers);
                           // console.log($scope.clubdetail.activities);
                            $scope.clubdetail.$save();
                            $scope.cluboffers = [];
                            // $scope.clubdetail.$save();
                    }  

                    if($scope.step == 5)
                    {
                         //Add/Edit Media entries inti club
                        if(Object.keys($scope.coverPhoto).length != 0)
                        {
                            $scope.clubdetail.coverPhoto = $scope.coverPhoto;
                            $scope.clubdetail.$save();                           
                        }
                        if($scope.media.length != 0)
                        {
                            for (var i = 0; i < $scope.media.length; i++)
                            {
                                if ($scope.media[i].clubId)
                                {
                                    oneMedia = Club.media.updateById({
                                        id: $scope.media[i].clubId,
                                        fk: $scope.media[i].id
                                    }, $scope.media[i]);
                                }
                                else
                                {
                                    oneMedia = Club.media.create({id: $scope.clubid}, $scope.media[i]);
                                }
                            }
                        }
                    }  
                        
                    if($scope.step == 6)
                    {
                        if(bankValidation())
                        {
                            if(typeof($scope.bill.customerId) == 'undefined')
                            {
                                $scope.bill.customerId = $scope.clubdetail.managerId;
                                $http.post("/api/OwnerAccounts", $scope.bill).success(function(bank)
                                {
                                    $scope.clubdetail.billingId = bank.id;
                                    $scope.clubdetail.status = 'online';
                                    $scope.clubdetail.$save();
                                    $state.go("club-new.manage-club");
                                });
                            }
                            else
                            {
                                $http.put("/api/OwnerAccounts/"+$scope.bill.id,$scope.bill).success(function(data)
                                {
                                    // $scope.clubdetail.billingId = bank.id;
                                    $scope.clubdetail.status = 'online';
                                    $scope.clubdetail.$save();
                                    $state.go("club-new.manage-club");
                                });
                            }
                            
                        }
                    }  


                        
                      $scope.step++;
                      console.log("step = "+$scope.step);  
                      if($scope.step >= 6)
                      { 
                         $scope.step = 6;
                      }

                }
            }

            


            
            // get child activity from parent id      
            
            $scope.activityClick = function($event)
            {
                var thi = $event.target;
                var flag = $(thi).prop('checked');
                // Offer Id
                var oid = $(thi).val();
                console.log(oid);
                if(flag)
                {
                    $scope.cluboffers.push(oid);
                    var str = '';
                    // $scope.child = [];
                    var pid = $(thi).val();
                    for(var i=0; i<$scope.offers.length; i++)
                    {
                        if($scope.offers[i].offerId == pid)
                        {
                            if($scope.cluboffers.indexOf($scope.offers[i].id) != -1)
                            {
                                $scope.offers[i].link = true;
                            }

                            str += '<div class="checkbox child_'+pid+'" style="margin-left:1em">';
                            str +='<label>';
                            if($scope.offers[i].link)
                            {
                                str +='<input type="checkbox" class="activity" ng-click="activityClick($event)" ng-model"offer.link" value="'+$scope.offers[i].id+'" checked/>';
                            }
                            else
                            {
                                str +='<input type="checkbox" class="activity" ng-click="activityClick($event)" ng-model"offer.link" value="'+$scope.offers[i].id+'"/>';
                            }
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
                    if(str != '')
                    {
                        // make dynamically added controll live in angular using $compile(str)($scope)
                        $(thi).parent().parent().append($compile(str)($scope));    
                    }
                }
                else
                {
                    var index  = $scope.cluboffers.indexOf(oid);
                    $scope.cluboffers.splice(index, 1);
                    // for(var i=0; i<$scope.offers.length; i++)
                    // {
                    //     if($scope.offers[i].offerId == oid)
                    //     {
                    //         index = $scope.cluboffers.indexOf($scope.offers[i].id);
                    //         if(index != -1)
                    //         {
                    //             $scope.cluboffers.splice(index, 1);
                    //         }
                    //     }
                    // }
                    $(thi).parent().parent().find(".child_"+$(thi).val()).remove();
                }
                console.log($scope.cluboffers);
                // console.log("Activity clicked");
            }
            
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
                    $scope.clubdetail.openingHours[day].dayOff = true;
                }
                else
                {
                    $('#'+day).show();   
                    $('#btn_'+day).html('Day Off-Closed');   
                    $scope.clubdetail.openingHours[day] = {};
                    $scope.clubdetail.openingHours[day].dayoff = false;
                }
            }

            // Manage Break
            $scope.break = function(day)
            {
                if($('#break_'+day).html() == 'Want a middle Break?')
                {
                    $('#wbreak_'+day).show();
                    $('#break_'+day).html("Don't want a middle Break?");  

                    $scope.clubdetail.openingHours[day].break = true;
                }
                else
                {
                    $('#wbreak_'+day).hide();
                    $('#break_'+day).html("Want a middle Break?");   
                    $scope.clubdetail.openingHours[day].breakFrom = '';
                    $scope.clubdetail.openingHours[day].breakTo = '';
                    $scope.clubdetail.openingHours[day].break = false;
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