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
    var friends = [];

    this.getFriends = function() {
      return $http({
          method:'GET',
          // url: 'http://connections.devmounta.in/api/profiles'
          url: 'data/friends.json'
        }).then(function(response) {
          console.log('success', response.data);
          friends = response.data;
          return friends;
        }, function(err) {
          console.log(err)
        })
      // return friends;
    };

    this.getFriend = function(id) {
      var index = findFriend(id);

      if(index < 0) {
        return undefined;
      } else {
        return friends[index];
      }
    }

    this.addFriend = function(friend) {
      friends.push(friend);
    }

    function findFriend(id) {
      var index = -1;
      for(var i = 0; i < friends.length; i++) {
        var friend = friends[i];
        if(friend._id === id) {
          index = i;
        }
      }
      return index;
    }

    function loadFriendData(key) {
      if(localStorage[key]) {
        var list = JSON.parse(localStorage[key]);
        for(var i = 0; i < list.length; i++) {
          var friend = list[i];
          friends.push(friend);
        }
      }
    };
})
