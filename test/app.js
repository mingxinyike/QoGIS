define(["angular","angular-route","angular-animate"],function(angular){
    alert("app");
    var app = angular.module("myApp",['ngRoute','ngAnimate']);
    app.controller("ctrlLogin",function($scope){
        $scope.name="ketty";
        $scope.paginationConf = {
            currentPage: 1,
            totalItems: 4000,
            itemsPerPage: 10,
            pagesLength: 15,
            onChange: function(){
                console.log("update");
            }
        };
    });

})