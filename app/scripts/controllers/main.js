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
 		
 		var resp = result['holiday_list'];
		$scope.holiday_list = []

 		if(resp==-1)
 		{
 			$scope.from = moment.now();
 			$scope.to = moment.now()+365
 		}
 		else
 		{
 			for (var i = 0; i < resp.length; i++) 
    			$scope.holiday_list.push( moment(resp[i]) )

 			$scope.from = moment(result['date_from'])
 			$scope.to = moment(result['date_to'])	
		}

	});

});