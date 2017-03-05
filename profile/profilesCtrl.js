angular.module('dev-mt-in').controller('profileCtrl', function($scope, profileService, friendService) {
  $scope.init = function() {
      $scope.user = profileService.getProfile();
      if(!$scope.user.friends) {
          $scope.user.friends = [];
      }

      $scope.loggedIn = $scope.user;
      $scope.profiles = friendService.getProfiles()
  }

  $scope.showFriend = function(id) {

  }

  $scope.addFriend = function(friend) {
    // TODO: $scope.user.friends.push(friend._id);
    profileService.updateProfile($scope.user);
    $scope.getFriends();
  }

  $scope.init();
})
