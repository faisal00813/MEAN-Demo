'use strict';

angular.module('mean.meterilize').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('meterilize example page', {
      url: '/meterilize/example',
      templateUrl: 'meterilize/views/index.html'
    });
  }
]);
