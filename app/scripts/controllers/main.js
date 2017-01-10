'use strict';

/**
 * @ngdoc function
 * @name hplannerFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hplannerFrontendApp
 */
 angular.module('hplannerFrontendApp')
 .controller('MainCtrl',function (HolidayListService, UserPreferenceService, $scope, $location, $interval, $mdSidenav) {

 	var response = HolidayListService.dates();
 
 	response.then(function(result){
 		
 		var resp = result.holiday_list ;
		$scope.circle = 0;
		$scope.fmonth = 0;
    $scope.submited = false; 
		
    $scope.submit_form = {
			holiday_list: [],
			leaves: 0
		};

 		if(resp===-1)
 		{
 			$scope.submit_form.date_from = moment.now();
 			$scope.submit_form.date_to = moment.now()+365;
 		}
 		else
 		{
 			for (var i = 0; i < resp.length; i++) 
    	{		
        $scope.submit_form.holiday_list.push( moment(resp[i]) );
      }

 			$scope.submit_form.date_from = moment(result.date_from);
 			$scope.submit_form.date_to = moment(result.date_to);	
		}

	});

 	var months = [];
    var date = moment($scope.date_from);
    var monthNextYear = moment(date).add(550, 'd');

	for(; date < monthNextYear; date.add(1, 'month')){
   		 months.push(moment(date));
	}
	
	$scope.months = months;

  $scope.changeFmonth = function(num){
  	$scope.fmonth = num;
  };


 	$scope.submit = function(){

 		$interval(function() {
			$scope.circle += 1;
        	if ($scope.circle > 100) {
          		$scope.circle = 30;
        	}
      	}, 100);

    $scope.submited = true; 

 		UserPreferenceService.plans($scope.submit_form,UserPreferenceService.recommendations)
 		.then(function(result){
 			$location.path("/recommendations");
 		},function(result){
 			$location.path("/"); 			
 		});

    };


  $scope.changeFmonthSidenav = function(num){
    $scope.fmonth = num;
    $mdSidenav('left').close();
  };

  $scope.openSideNavPanel = function() {
    $mdSidenav('left').open();
  };
  
  $scope.closeSideNavPanel = function() {
    $mdSidenav('left').close();
  };


});