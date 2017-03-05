angular.module('dev-mt-in').controller('landingCtrl', function($scope, $state, profileService, friendService) {
    $scope.init = function() {
        $scope.user = profileService.getProfile();
        if(!$scope.user.friends) {
            $scope.user.friends = [];
        }

        $scope.loggedIn = $scope.user;
        $scope.getFriends();
    }

    $scope.getFriends = function() {
      $scope.friends = friendService.getFriends($scope.user.friends);
    }

    $scope.addFriend = function(friend) {
      $scope.user.friends.push(friend._id);
      profileService.updateProfile($scope.user);
      $scope.getFriends();
    }

    $scope.init();
})
