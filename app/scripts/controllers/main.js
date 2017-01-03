'use strict';

/**
 * @ngdoc function
 * @name hplannerFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hplannerFrontendApp
 */
 angular.module('hplannerFrontendApp')
 .controller('MainCtrl',function (HolidayListService, $scope) {

 	var value = HolidayListService.dates();
 	value.then(function(result){
 		$scope.val = result
 		$scope.holiday_list = result['holiday_list'];
 	})
 	
});
