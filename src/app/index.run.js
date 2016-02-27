(function() {
  'use strict';

  angular
    .module('red')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $state, $rootScope) {

    $rootScope.state = $state;

    $log.debug('Run block end!');


    $rootScope.$on('$stateChangeStart', function(event, toState){
      $rootScope.stateName = toState.name + '-container';

    });
  }

})();
