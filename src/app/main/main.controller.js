(function() {
  'use strict';

  angular
    .module('red')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $state) {
      $scope.description = 'Angular Seed Application';

      $scope.enter = function(event){
        event.preventDefault();

        $state.go('check-in');
  };

}

})();
