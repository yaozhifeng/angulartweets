'use strict';

/* Controllers */

function TweetsCtrl($scope, $http) {
    $scope.users = [];
    
    $scope.fetch = function() {
        $http.jsonp('http://api.twitter.com/1/statuses/user_timeline.json?screen_name=' + $scope.current + '&callback=JSON_CALLBACK').
            success(function(data, status, headers, config) {
                $scope.tweets = data;
                
                var exists = false;
                angular.forEach($scope.users, function(value) {
                    if (value===$scope.current) exists = true;
                });
                if (!exists) $scope.users.push($scope.current);
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


