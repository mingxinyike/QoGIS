define(['app'], function (app) {
    alert("directives");
    app.directive('myPagination', function() {
        return {
            restrict: 'EA',
            replace: true,
            template: '<div class="page-list">' +
                '<ul class="pagination" ng-show="conf.totalItems > 0">' +
                    '<li ng-class="{disabled: conf.currentPage == 1}" ng-click="prevPage()"><span>&laquo</span></li>' +
                    '<li ng-repeat="item in pageList track by %index" ng-class="{active: item == conf.currentPage, separate: item == \'...\'}"' +
                        'ng-click="changeCurrentPage(item)">' +
                        '<span>{{item}}</span>' +
                    '<li ng-class="{disabled: conf.currentPage == conf.numberOfPages}" ng-click="nextPage()"><span>&raquo</span></li>' +
                '</ul>',
            scope: {
                conf: '=conf'
            },
            link: function(scope, element, attrs){

                scope.conf.pagesLength = parseInt(scope.conf.pagesLength) ? parseInt(scope.conf.pagesLength) : 9 ;
                if(scope.conf.pagesLength % 2 === 0){
                    // 如果不是奇数的时候处理一下
                    scope.conf.pagesLength = scope.conf.pagesLength -1;
                }

                scope.changeCurrentPage = function(item) {
                    if(item == '...'){
                        return;
                    }else{
                        scope.conf.currentPage = item;
                    }
                };
                // prevPage
                scope.prevPage = function(){
                    if(scope.conf.currentPage > 1){
                        scope.conf.currentPage -= 1;
                    }
                };
                // nextPage
                scope.nextPage = function(){
                    if(scope.conf.currentPage < scope.conf.numberOfPages){
                        scope.conf.currentPage += 1;
                    }
                };
                //生成pageList
                function getPagination(newValue, oldValue, scope) {
                    // conf.currentPage
                    scope.conf.currentPage = parseInt(scope.conf.currentPage) ? parseInt(scope.conf.currentPage) : 1;

                    // conf.totalItems
                    scope.conf.totalItems = parseInt(scope.conf.totalItems) ? parseInt(scope.conf.totalItems) : 0;

                    // conf.itemsPerPage (default:15)
                    scope.conf.itemsPerPage = parseInt(scope.conf.itemsPerPage) ? parseInt(scope.conf.itemsPerPage) : 15;

                    // numberOfPages
                    scope.conf.numberOfPages = Math.ceil(scope.conf.totalItems/scope.conf.itemsPerPage);

                    //将currentPage限制在1~numbersOfPages之间
                    // judge currentPage > scope.numberOfPages
                    if(scope.conf.currentPage < 1){
                        scope.conf.currentPage = 1;
                    }
                    // 如果分页总数>0，并且当前页大于分页总数
                    if(scope.conf.numberOfPages > 0 && scope.conf.currentPage > scope.conf.numberOfPages){
                        scope.conf.currentPage = scope.conf.numberOfPages;
                    }

                    scope.pageList = [];
                    if(scope.conf.numberOfPages <= scope.conf.pagesLength){
                        // 判断总页数如果小于等于分页的长度，若小于则直接显示
                        for(i =1; i <= scope.conf.numberOfPages; i++){
                            scope.pageList.push(i);
                        }
                    }else{
                        // 总页数大于分页长度（此时分为三种情况：1.左边没有...2.右边没有...3.左右都有...）
                        // 计算中心偏移量
                        var offset = (scope.conf.pagesLength - 1)/2;
                        if(scope.conf.currentPage <= offset){
                            // 左边没有...
                            for(i =1; i <= offset +1; i++){
                                scope.pageList.push(i);
                            }
                            scope.pageList.push('...');
                            scope.pageList.push(scope.conf.numberOfPages);
                        }else if(scope.conf.currentPage > scope.conf.numberOfPages - offset){
                            scope.pageList.push(1);
                            scope.pageList.push('...');
                            for(i = offset + 1; i >= 1; i--){
                                scope.pageList.push(scope.conf.numberOfPages - i);
                            }
                            scope.pageList.push(scope.conf.numberOfPages);
                        }else{
                            // 最后一种情况，两边都有...
                            scope.pageList.push(1);
                            scope.pageList.push('...');

                            for(i = Math.ceil(offset/2) ; i >= 1; i--){
                                scope.pageList.push(scope.conf.currentPage - i);
                            }
                            scope.pageList.push(scope.conf.currentPage);
                            for(i = 1; i <= offset/2; i++){
                                scope.pageList.push(scope.conf.currentPage + i);
                            }

                            scope.pageList.push('...');
                            scope.pageList.push(scope.conf.numberOfPages);
                        }
                    }
                    if(scope.conf.onChange){


                        // 防止初始化两次请求问题
                            scope.conf.onChange();


                    }
                    scope.$parent.conf = scope.conf;

                }
                scope.$watch(function() {
                    if(!scope.conf.totalItems) {
                        scope.conf.totalItems = 0;
                    }
                    var newValue = scope.conf.totalItems + ' ' +  scope.conf.currentPage + ' ' + scope.conf.itemsPerPage;
                    return newValue;

                }, getPagination);


            }
        }
    })
});
