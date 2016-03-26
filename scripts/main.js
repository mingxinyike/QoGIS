require.config({
    baseUrl: 'scripts/',
    paths: {
        jquery: 'vendor/jquery/jquery.min',
        angular: 'http://apps.bdimg.com/libs/angular.js/1.4.6/angular.min',
        'angular-route': 'http://apps.bdimg.com/libs/angular.js/1.4.6/angular-route.min',
        'angular-animate': 'http://apps.bdimg.com/libs/angular.js/1.4.6/angular-animate.min'
    },

    shim: {
        angular:{
            exports: "angular"
        },
        'angular-route': {
            deps: ["angular"],
            exports: "angular-route"
        },
        'angular-animate': {
            deps: ["angular"],
            exports: "angular-animate"
        }
    }
});

// init myApp
require(["angular", "app", "controllers", "directives/directives"],function(angular){
    // add myApp to document
    angular.bootstrap(document, ["myApp"]);
});
