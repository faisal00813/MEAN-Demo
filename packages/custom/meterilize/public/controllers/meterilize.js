'use strict';

/* jshint -W098 */
angular.module('mean.meterilize').controller('MeterilizeController', ['$scope', 'Global', 'Meterilize',
  function($scope, Global, Meterilize) {
    $scope.global = Global;
    $scope.package = {
      name: 'meterilize'
    };
  }
]);
