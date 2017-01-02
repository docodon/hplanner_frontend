'use strict';

/**
 * @ngdoc overview
 * @name hplannerFrontendApp
 * @description
 * # hplannerFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('hplannerFrontendApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'mwl.calendar', 
    'ui.bootstrap',
    'multipleDatePicker'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
