'use strict'

#Controllers

TweetsCtrl = ($scope, $http) ->
    $scope.users = []

    $scope.fetch = ->
        $http.jsonp('http://api.twitter.com/1/statuses/user_timeline.json?screen_name=' + $scope.current + '&callback=JSON_CALLBACK').
            success (data) ->
                $scope.tweets = data
                $scope.users.push($scope.current) if $scope.current not in $scope.users

    $scope.fetch_user = (user) ->
        $scope.current = user
        $scope.fetch()

    $scope.remove_user = (user) ->
        newusers = $scope.users.filter (item) -> item isnt user
        $scope.users = newusers
