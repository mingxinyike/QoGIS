require.config({
    baseUrl: './',
    paths: {
        angular: 'http://apps.bdimg.com/libs/angular.js/1.4.6/angular.min.js',
        'angular-route': '../scripts/vendor/angular/angular-route',
        'angular-animate': 'http://apps.bdimg.com/libs/angular.js/1.4.6/angular-animate.min.js'
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
require(["angular", "angular-animate", "app","directives"],function(angular){
    // add myApp to document
    angular.bootstrap(document, ["myApp"]);
});
