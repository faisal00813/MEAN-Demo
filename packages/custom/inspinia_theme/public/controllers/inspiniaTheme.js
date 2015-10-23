'use strict';

/* jshint -W098 */
angular.module('mean.inspinia_theme').controller('InspiniaThemeController', ['$scope', 'Global', 'InspiniaTheme',
  function($scope, Global, InspiniaTheme) {
    $scope.global = Global;
    $scope.package = {
      name: 'inspinia_theme'
    };
    $scope.init = function(){
    	
    }
  }
]);
