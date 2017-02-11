angular.module("dev-mt-in").controller('mainCtrl', function($scope, $location, friendService) {
  //Data Loader
  $scope.friends = friendService.getFriends();
  $scope.loggedIn = false;
  $scope.editMode = true;
  $scope.user = {
    _id: "0",
    index: -1,
    iSCurrent: true,
    name: {
      first: "",
      last: ""
    },
    company: "",
    picture: "http://lorempixel.com/200/200/people/",
    email: "",
    phone: "",
    address: "",
    about: "",
    registered: "Wednesday, January 15, 2014 7:35 PM",
    friends: [
    ],
    tagline: ""
  };
  $scope.CreateProfile = function() {
    //Validate from screen???
    if($scope.user.name.first !== '' && $scope.user.name.last !== ''
  && $scope.user.picture !== '') {
        $scope.loggedIn = true;
        $scope.editMode = false;
      }
  };

  $scope.EditProfile = function() {
    $scope.editMode = true;
  };

  //Navigation
  $scope.pages = [
    {caption:"View Friends", id:'viewFriends'},
    {caption:"Find Friends", id:'findFriends'},
    {caption:"Update Profile", id:'viewProfile'}];

  $scope.currentPage = -1;
  $scope.showPage = function(index) {
    return index === $scope.currentPage;
  };

  $scope.switchPage = function(index) {
    if($scope.loggedIn) {
      $scope.currentPage = index;
    }
  };
})
