angular.module('dev-mt-in').directive('showCard', function() {
  return {
    templateUrl: '../components/card/card.html',
    restrict: 'E',
    scope: {
      //= >> Bound, @ >> direct string, & >> function
      _id: '<',
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
      // console.log('card', scope, element);
    }
  }
})
