angular.module('dev-mt-in').service('profileService', function($http) {

    this.updateProfile = function(user) {
        // $http.post('data/profile.json', JSON.stringify(user))
        // .then(function(response) {
        //   return response.data;
        // });
        if (user) {
            localStorage.setItem('profile-key', JSON.stringify(user));
        }
    }

    this.getProfile = function() {
        if (localStorage && localStorage.hasOwnProperty('profile-key')) {
            var user = JSON.parse(localStorage['profile-key']);
            console.log('profileService', user);
            return user;
        }
    }

})
