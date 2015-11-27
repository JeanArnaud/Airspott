angular.module('com.airspott.club').service('Message',
    ["$rootScope", "$q", "toastr",

     function ($rootScope, $q, toastr)
     {

         var showMessage = function (message, level)
         {
             var deferred = $q.defer();

             toastr.success(message, 'Toastr fun!');

             deferred.resolve(message);

             return deferred.promise;

         };

         this.info = function (message)
         {
             return showMessage(message, "info");
         };

         this.success = function (message)
         {
             return showMessage(message, "success");
         };

         this.error = function (message)
         {
             return showMessage(message, "error");
         };

         this.warning = function (message)
         {
             return showMessage(message, "warning");
         };

     }]);