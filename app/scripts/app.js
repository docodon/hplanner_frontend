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
    'ngMaterial',
    'multipleDatePicker',
    'config'
  ])
  .config(function ($routeProvider,$httpProvider,$mdThemingProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/recommendations', {
        templateUrl: 'views/recommendations.html',
        controller: 'RecommendCtrl',
        controllerAs: 'recommend'
      })
      .otherwise({
        redirectTo: '/'
      });
    
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

  });
