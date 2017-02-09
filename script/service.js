function Person(username, password, fullName, tagLine, imageUrl, bio, isCurrent) {
  this.id = 0;
  this.username = username;
  this.password = password;
  this.fullName = fullName;
  this.tagLine = tagLine;
  if(imageUrl) {
    this.imageUrl = imageUrl;
  } else {
    this.imageUrl = "images/download.png"
  }
  this.bio = bio;
  this.isCurrent = isCurrent;
  this.friends = [];
}

function findPersonIndex(people, id) {
  for(var i = 0; i < people.length; i++) {
    var person = people[i];
    if(person.id === id) {
      return i;
    }
  }
}

Person.prototype.findPerson = function(people, id) {
  for(var i = 0; i < people.length; i++) {
    var person = people[i];
    if(person.id === id) {
      return person;
    }
  }
}

Person.prototype.addFriend = function (id) {
  var friend = findPerson(id);
  this.friends.push(friend);
}

Person.prototype.removeFriend = function(id) {
  var index = findPersonIndex(this.friends, id);
  return this.friends.splice(index, 1);
}
