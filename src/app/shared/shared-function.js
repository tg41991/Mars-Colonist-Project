(function(){
  'use strict';

  angular
  .module('red')
  .factory('getApi', getApi);

  function getApi($http) {
    var ALIENS_GET_URL = 'https://red-wdp-api.herokuapp.com/api/mars/aliens';
    var REPORT_POST_URL = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';

    return {

      getAliens: function httpGET() {
        return $http({
          method: 'GET',
          url: ALIENS_GET_URL
          });
      },

      postReport: function httpPOST(report) {
        return $http({
          method: 'POST',
          url: REPORT_POST_URL,
          data: {'encounter' : report}
      });
    }
  };

  }
})();
