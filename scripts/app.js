define(["angular","angular-route","angular-animate"],function(angular){

    var app = angular.module("myApp",['ngRoute','ngAnimate']);
    // route
    app.config(['$routeProvider',function($routeProvider) {
        $routeProvider.
            when('/', {
                redirectTo: "/data"
            })
            .when('/data', {
                templateUrl: 'views/data.html',
                controller: 'dataCtrl'
            })
            .when('/map', {
                templateUrl: 'views/map.html',
                controller: 'mapCtrl'
            })
            .when('/analysis', {
                templateUrl: 'views/analysis.html',
                controller: 'analysisCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'aboutCtrl'
            })
            .otherwise({
                redirectTo: '/data'
            });
    }]);
    //过滤器
    app.filter('parseint', function() {
        return function(input) {
            if (parseInt(input)) {
                return Math.round(input);
            }
        }
    })
    return app;

})