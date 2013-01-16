'use strict';

/* Controllers */

function TweetsCtrl($scope, $http) {
    $scope.users = [];
    $scope.current = ""
    $scope.tweets = [];
    
    $scope.fetch = function() {
        $http.jsonp('http://api.twitter.com/1/statuses/user_timeline.json?screen_name=' + $scope.current + '&callback=JSON_CALLBACK').
            success(function(data, status, headers, config) {
                $scope.tweets = data;
                if ($scope.users.indexOf($scope.current)<0) {
                    $scope.users.push($scope.current)
                }
            });
    };
    
    $scope.fetch_user = function(user) {
        $scope.current = user;
        $scope.fetch();
    };
    
    $scope.remove_user = function(user) {
        var newusers = [];
        angular.forEach($scope.users, function(value) {
            if (value!=user) newusers.push(value);
        });
        $scope.users = newusers;
    }
}


