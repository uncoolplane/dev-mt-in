angular.module('dev-mt-in').service('loginService', function() {
  var $login = this;

    $login.init = function() {
      $login.loggedIn = false;

      $login.user = {
        _id: "0",
        name: "",
        tagline: "",
        bio: "",
        profile: {url:"http://lorempixel.com/64/64/people/"},
        friends: []
      };
    }

    $login.login = function(user) {
      $login.user = user;
      $login.loggedIn = true;
    }

    $login.logout = function() {
      $login.user = undefined;
      $login.loggedIn = false;
    }

})
