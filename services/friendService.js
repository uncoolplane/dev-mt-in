// {
//_id:,
//     name: ,
//     tagline: ,
//     bio: ,
//     profileUrl: ,
//     friends: [friendId]
// }

//http://beta.json-generator.com/VyZGICqFM
// [
//   {
//     'repeat(5, 20)': {
//       _id: '{{objectId()}}',
//       isActive: '{{bool()}}',
//       profileUrl: 'http://placehold.it/64x64',
//       name: '{{firstName()}}' + ' ' + '{{surname()}}',
//       tagline: '{{lorem(1, "sentence")}}',
//       bio: '{{lorem(1, "paragraphs")}}',
//       friends: [
//         {
//           'repeat(3)': {
//             _id: '{{objectId()}}'
//           }
//         }
//       ]
//     }
//   }
// ]

angular.module('dev-mt-in').service('friendService', function($http) {
  var friends=[];

  function init() {
    friends = loadProfiles();
  }

  this.getFriends = function(friendids) {//friend ids
    var f = [];
    for(var i = 0; i < friendids.length; i++) {
      var id = friendsids[i];
      var friend = friends.find((item) => item._id === id)
      f.push(friend);

    }
    return f;
  }

  this.getProfiles = function() {
    return friends;
  }

  function loadProfiles() {
    return $http({
        method:'GET',
        // url: 'http://connections.devmounta.in/api/profiles'
        url: 'data/friends.json'
      }).then(function(response) {
        console.log('friendService', response.data);
        friends = response.data;
        return friends;
      }, function(err) {
        console.log(err)
      })
  }

  init();
})
