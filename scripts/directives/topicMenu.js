define(['../app'], function (app) {
    app.directive('topicMenu', function() {
        return {
            restrict: 'EA',
            replace: true,
            template:
            '<div class="topicMenu">' +
                '<ul class="mtree bubba">' +
                    '<li ng-repeat="item in conf" class="mtree-node" ng-class="{\'mtree-active\': item.title == listTree.activeElm}" ng-click=listTree.treeClick(item.title)>' +
                        '<a ng-click=listTree.titleClick(item.title)>{{item.title}}</a>' +
                        '<ul ng-hide = !listTree.open[item.title+"Open"]>' +
                            '<li ng-repeat="sitem in item.content"><a ng-click=listTree.updateList(sitem)>{{sitem}}</a></li>' +
                        '</ul>' +
                    '</li>' +
                '</ul>' +
            '</div>',
            scope: {
                conf: '=conf'
            },
            link: function(scope, element, attrs) {
                scope.listTree = {};

                scope.listTree.activeElm = "YEAR";

                scope.listTree.open = {
                    YEAROpen: true,
                    CONTINENTOpen: true,
                    TOPICSOpen: true,
                };

                scope.listTree.treeClick = function(ele) {
                    scope.listTree.activeElm = ele;
                };

                scope.listTree.titleClick = function(ele) {
                    scope.listTree.open[ele+'Open'] = !(scope.listTree.open[ele+'Open'] && (scope.listTree.activeElm == ele));

                };
                scope.listTree.updateList = function(ele) {
                    alert(ele);

                }
            }
        }
    })
});