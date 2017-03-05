angular.module('dev-mt-in').controller('profileDetailsCtrl', function($scope, $state, profileService) {
    $scope.init = function() {
        $scope.user = profileService.getProfile();

        $scope.loggedIn = $scope.user;
        $scope.editMode = !$scope.loggedIn;
    }

    $scope.CreateProfile = function(isValid, user) {
        if(isValid) {    
          profileService.updateProfile(user)
          $state.go("landing");
        }
    }

    $scope.init();
})
