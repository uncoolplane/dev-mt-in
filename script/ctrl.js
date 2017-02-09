angular.module("dev-mt-in").controller('mainCtrl', function($scope) {
  $scope.people = [];
  $scope.user = new Person(null, null, null, null, null, null, true);//username, password, fullName, tagLine, imageUrl, bio, isCurrent
  $scope.showUser = $scope.user;

  $scope.saveUser = function() {
     
  }
})
