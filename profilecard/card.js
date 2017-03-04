angular.module('controller-app').directive('showCard', function() {
  return {
    // template: '<h1>Hello World</h1>',
    templateUrl: '../profilecard/card.html',
    restrict: 'E',
    scope: {
      //= >> Bound, @ >> direct string, & >> function
      id: '<',
      title:'<',
      description: '<',
      byline: '<',
      image: '@',
      primaryLabel:'@',
      primaryHandler:'&',
      secondaryLabel: '@',
      secondaryHandler:'&'
    },
    link: function(scope, element, attrs) {

    }
  }
})
