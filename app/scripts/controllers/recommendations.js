'use strict';

 angular.module('hplannerFrontendApp')
 .controller('RecommendCtrl',function (UserPreferenceService, $scope, $location,  $mdSidenav) {

 	var response = UserPreferenceService.recommendations['api_recommendations'];
 	if(response == -1)
 		$location.path("/");	

 	$scope.date_from = moment(response['date_from']) ;
 	$scope.date_to = moment($scope.date_from).add(365,'days');
 	$scope.rnumber = 0;	

 	var array_resp = response["response"];
 	$scope.recommendations = new Array();

 	for(var i=0;i<array_resp.length;i++)
 	{
 		var tmp = {'id':i};
 		tmp['fitness_score'] = array_resp[i]['fitness_score'];
 		tmp['plan'] = new Array();
 		for(var j=0;j<array_resp[i]['array'].length;j++)
 		{
 			if(array_resp[i]['array'][j][1]!='workday' )
 				tmp['plan'].push(moment(array_resp[i]['array'][j][0]));
 		}
 	  $scope.recommendations.push(tmp);
 	}

 	$scope.disableClick = function(event) {
        event.preventDefault();
    }


	var months = [];
    var date = moment($scope.date_from);
    var monthNextYear = moment(date).add(550, 'd');

	for(; date < monthNextYear; date.add(1, 'month')){
   		 months.push(moment(date));
	}
	$scope.months = months;
	
	$scope.getNumber = function(num) {
   	 var ar = [];
   	 for(var i=0;i<num;i++)
   	 	ar.push(i);
   	 return ar;   
	}

  $scope.change_rnumber = function(num){
    $scope.rnumber = num;
  };

  $scope.changeRnumberSidenav = function(num){
    $scope.rnumber = num;
    $mdSidenav('left').close();
  };

  $scope.openSideNavPanel = function() {
    $mdSidenav('left').open();
  };
  
  $scope.closeSideNavPanel = function() {
    $mdSidenav('left').close();
  };


});