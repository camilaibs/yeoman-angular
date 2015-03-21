'use strict';

/**
 * @ngdoc function
 * @name yeomanAngularApp.controller:ProdutoCtrl
 * @description
 * # ProdutoCtrl
 * Controller of the yeomanAngularApp
 */
angular.module('yeomanAngularApp')
  .controller('ProdutoCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
