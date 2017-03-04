angular.module('controller-app').controller('mainCtrl', function($scope, componentService) {
  $scope.friends = componentService.friends;

  $scope.success = function(id) {
    console.log('success', id);
  }

  $scope.cancel = function(id) {
    console.log('cancel', id);
  }
})
