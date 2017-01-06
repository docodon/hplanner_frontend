'use strict';

/**
 * @ngdoc function
 * @name hplannerFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hplannerFrontendApp
 */
 angular.module('hplannerFrontendApp')
 .controller('MainCtrl',function (HolidayListService, UserPreferenceService, $scope, $location, $interval) {

 	var response = HolidayListService.dates();
 
 	response.then(function(result){
 		
 		var resp = result['holiday_list'];
		$scope.circle = 0;

		$scope.submit_form = {
			holiday_list: [],
			leaves: 0
		}

 		if(resp==-1)
 		{
 			$scope.submit_form.date_from = moment.now();
 			$scope.submit_form.date_to = moment.now()+365
 		}
 		else
 		{
 			for (var i = 0; i < resp.length; i++) 
    			$scope.submit_form.holiday_list.push( moment(resp[i]) )

 			$scope.submit_form.date_from = moment(result['date_from'])
 			$scope.submit_form.date_to = moment(result['date_to'])	
		}

	});


 	$scope.submit = function(){
    	
 		$interval(function() {
			$scope.circle += 1;
        	if ($scope.circle > 100) {
          		$scope.circle = 30;
        	}
      	}, 100);


 		UserPreferenceService.plans($scope.submit_form,UserPreferenceService.recommendations)
 		.then(function(result){
 			$location.path("/recommendations")
 		},function(result){
 			$location.path("/") 			
 		});

    };


});