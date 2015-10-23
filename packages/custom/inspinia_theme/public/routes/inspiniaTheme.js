'use strict';

angular.module('mean.inspinia_theme').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('inspiniaTheme example page', {
      url: '/inspiniaTheme/landing',
      templateUrl: 'inspinia_theme/views/header.html'
    });
  }
]);
