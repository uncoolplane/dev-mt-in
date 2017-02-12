angular.module("dev-mt-in").controller('mainCtrl', function($scope, $location, friendService) {
  //Data Loader
  $scope.friends = friendService.getFriends();
  $scope.loggedIn = false;
  $scope.editMode = true;
  $scope.user = {
    _id: "0",
    name: "",
    company: "",
    picture: "http://lorempixel.com/200/200/people/",
    email: "",
    phone: "",
    address: "",
    about: "",
    friends: [
    ],
    tagline: ""
  };
  $scope.CreateProfile = function(isValid) {
    //Validate from screen???
    //$scope.user.name.first !== '' && $scope.user.name.last !== ''
  //&& $scope.user.picture !== ''
    if(isValid) {
        $scope.loggedIn = true;
        $scope.editMode = false;
      }
  };

  $scope.EditProfile = function() {
    $scope.editMode = true;
  };

  //Navigation
  $scope.pages = [
    {caption:''},
    {caption:"View Friends"},
    {caption:"Find Friends"},
    {caption:"Update Profile"}
  ];

  $scope.currentPage = 0;
  $scope.showPage = function(index) {
    return index === $scope.currentPage;
  };

  $scope.switchPage = function(index) {
    if($scope.loggedIn) {
      $scope.currentPage = index;
      if(index === $scope.pages.length-1) {
        $scope.editMode = true;
      } else {
        $scope.editMode = false;
      }
    }
  };
})
