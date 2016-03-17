(function() {
  'use strict';

  angular
    .module('red')
    .controller('ReportCtrl', ReportCtrl);

  /** @ngInject */
  function ReportCtrl($rootScope, $state, $cookies, $filter, getApi, $scope) {

    var ALIENS_GET_URL = 'https://red-wdp-api.herokuapp.com/api/mars/aliens';
    var REPORT_POST_URL = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';


    $scope.report = {
      colonist_id: $cookies.getObject('mars_colonist').id,
      date: $filter('date')(new Date(), 'yyyy-MM-dd')
    };

    getApi.getAliens().then(function(response){
      console.log($rootScope.colonist);
      $scope.aliens = response.data.aliens;
    }, function(error){
    });

    $scope.submit = function(event) {
      event.preventDefault();

      if($scope.reportIt.$invalid) {
      	$scope.validate = true;
      } else {

      getApi.postReport($scope.report).then(function(response){
          $state.go('encounters');
      }, function(error){
        console.log(error);
      });
    }
    };
  }

})();
