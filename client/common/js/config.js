angular.module('com.airspott')
    .config([

        '$translateProvider', '$httpProvider', 'LoopBackResourceProvider',

        function ($translateProvider, $httpProvider, LoopBackResourceProvider)
        {
            $translateProvider.useStaticFilesLoader({
                prefix: 'language/',
                suffix: '.json'
            });

            $translateProvider.preferredLanguage('de');
            $translateProvider.fallbackLanguage('en');

            $translateProvider.useSanitizeValueStrategy('escaped');
            
            //LoopBackResourceProvider.setUrlBase('http://test.airspott.com/');


            $httpProvider.interceptors.push(function ($q, $location, LoopBackAuth)
            {
                return {
                    responseError: function (rejection)
                    {
                        if (rejection.status == 401)
                        {
                            LoopBackAuth.clearUser();
                            LoopBackAuth.clearStorage();
                            $location.nextAfterLogin = $location.path();
                            $location.path('/');
                        }
                        return $q.reject(rejection);
                    }
                };
            });


        }]);