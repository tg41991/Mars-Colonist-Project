(function() {
  'use strict';

  angular
    .module('red')
    .controller('EncountersCtrl', EncountersCtrl);

  /** @ngInject */
  function EncountersCtrl($scope, $http, $state, $rootScope) {


    var ENCOUNTER_GET_URL = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';



    $http({
      method: 'GET',
      url: ENCOUNTER_GET_URL
    }).then(function(response){
      $scope.encounters = response.data.encounters;

    }, function(error){

    });

    $scope.writereport = function(event){
      event.preventDefault();

      $state.go('report');
  };
}

})();
