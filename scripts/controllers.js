define(['app'], function (app) {

    //导航栏控制区
    app.controller("headerCtrl",['$scope','$location', function($scope, $location) {
        $scope.selectedIndex = "data";
        $scope.toLocate = function(name) {
            $scope.selectedIndex = name;
            $location.path('/'+name);
        }
    }]);


    //data页面控制区
    app.controller("dataCtrl", function($scope) {
        // 控制data 主题列表
        // 选中的主题
        $scope.selectedTopics = {
            "CONTINENT": [],
            "YEAR": [],
            "TOPICS": []
        };
        // 传入到directive中的主题列表和点选后的处理函数selectedonchange
        $scope.classification = {};
        $scope.classification.datalist = [
            {
                title:"CONTINENT",
                content:["North America","Europe","Oceania","Asia","South America","Africa"]
            }, {
                title:"YEAR",
                content:[2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015]
            }, {
                title:"TOPICS",
                content: ["geology", "climate", "land", "water","spcies","energy","coast"]
            },
        ];
        $scope.classification.selectedOnChange = function(ele, itemTitle) {
            
            var flag = 0;
            for (var i = 0; i < $scope.selectedTopics[itemTitle].length; i++) {
                if ($scope.selectedTopics[itemTitle][i] == ele) {
                    Array.prototype.splice.call($scope.selectedTopics[itemTitle], i, 1)
                    flag = 1;
                }
            }
            if (flag ==0) {
                $scope.selectedTopics[itemTitle].push(ele);
            }
            console.log($scope.selectedTopics);
            //getAllItems(topics)
            
        }

        //servierItem 服务列表数据
        $scope.serviceItem = [
        {
            serviceTitle: "National_Geochemical_Survey",
            serviceContent: {
                Provider: "U.S. Geological Survey Mineral Resources Program",
                Location: "Virginia, United States",
                KeyWords: "Geochemistry; unconsolidated deposits",
                mark: 9.3
            }
        },{
            serviceTitle: "National_Geochemical_Survey",
            serviceContent: {
                Provider: "U.S. Geological Survey Mineral Resources Program",
                Location: "Virginia, United States",
                KeyWords: "Geochemistry; unconsolidated deposits",
                mark: 8.3
            }
        },{
            serviceTitle: "National_Geochemical_Survey",
            serviceContent: {
                Provider: "U.S. Geological Survey Mineral Resources Program",
                Location: "Virginia, United States",
                KeyWords: "Geochemistry; unconsolidated deposits",
                mark: 7.6
            }
        },{
            serviceTitle: "National_Geochemical_Survey",
            serviceContent: {
                Provider: "U.S. Geological Survey Mineral Resources Program",
                Location: "Virginia, United States",
                KeyWords: "Geochemistry; unconsolidated deposits",
                mark: 0
            }
        },{
            serviceTitle: "National_Geochemical_Survey",
            serviceContent: {
                Provider: "U.S. Geological Survey Mineral Resources Program",
                Location: "Virginia, United States",
                KeyWords: "Geochemistry; unconsolidated deposits",
                mark: 5
            }
        },{
            serviceTitle: "National_Geochemical_Survey",
            serviceContent: {
                Provider: "U.S. Geological Survey Mineral Resources Program",
                Location: "Virginia, United States",
                KeyWords: "Geochemistry; unconsolidated deposits",
                mark: 9.8
            }
        },{
            serviceTitle: "National_Geochemical_Survey",
            serviceContent: {
                Provider: "U.S. Geological Survey Mineral Resources Program",
                Location: "Virginia, United States",
                KeyWords: "Geochemistry; unconsolidated deposits",
                mark: 7.4
            }
        },{
            serviceTitle: "National_Geochemical_Survey",
            serviceContent: {
                Provider: "U.S. Geological Survey Mineral Resources Program",
                Location: "Virginia, United States",
                KeyWords: "Geochemistry; unconsolidated deposits",
                mark: 5.6
            }
        },{
            serviceTitle: "National_Geochemical_Survey",
            serviceContent: {
                Provider: "U.S. Geological Survey Mineral Resources Program",
                Location: "Virginia, United States",
                KeyWords: "Geochemistry; unconsolidated deposits",
                mark: 9.3
            }
        }];


        //控制pagination 分页模块
        $scope.paginationConf = {
            currentPage: 1,
            totalItems: 4000,
            itemsPerPage: 10,
            pagesLength: 15,
            onChange: function(){
                console.log("update");
                //scope.getServiceItem( topics)
            }
        };

        /**
         * [getServiceItem description]
         * @type {function}
         * @param Array(selectedTopics); paginationConf.currentPage; paginationConf.itemsPerPage
         * @return serviceItem
         */
        $scope.getServiceItem = function(currentPage, itemsPerPage, topics) {
            //更新serviceItem
        };

        /**
         * 更新数据总条数，当前页书设置为1
         * @input topicslist
         * 更新总条数，提交申请获得第一页面列表
         * 
         */
         $scope.getAllItems = function( topics) {
            // currentPage = 1
            // 更新 totalItems
            // getServiceItem()
         }
    })
});


