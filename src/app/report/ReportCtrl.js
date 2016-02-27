(function() {
  'use strict';

  angular
    .module('red')
    .controller('ReportCtrl', ReportCtrl);

  /** @ngInject */
  function ReportCtrl($scope, $http, $rootScope, $state, $cookies, $filter) {

    var ALIENS_GET_URL = 'https://red-wdp-api.herokuapp.com/api/mars/aliens';
    var REPORT_POST_URL = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';


    $scope.report = {
      colonist_id: $cookies.getObject('mars_colonist').id,
      date: $filter('date')(new Date(), 'yyyy-MM-dd')
    };


    $http({
      method: 'GET',
      url: ALIENS_GET_URL
    }).then(function(response){
      console.log($rootScope.colonist);
      $scope.aliens = response.data.aliens;
    }, function(error){
    });

    $scope.submit = function(event) {
      event.preventDefault();

      if($scope.reportIt.$invalid) {
      	$scope.validate = true;
      } else {

      $http({
        method: 'POST',
        url: REPORT_POST_URL,
        data: {
          'encounter' : $scope.report
        }
      }).then(function(response){
          $state.go('encounters');
      }, function(error){
        console.log(error);
      });
    }
    };
  }

})();
