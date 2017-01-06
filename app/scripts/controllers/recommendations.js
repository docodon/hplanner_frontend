'use strict';

 angular.module('hplannerFrontendApp')
 .controller('RecommendCtrl',function (UserPreferenceService, $scope) {

 	var response = UserPreferenceService.recommendations['api_recommendations'];
 	
 	$scope.response = response;
 	$scope.date_from = moment(response['date_from']) ;
 	$scope.date_to = moment($scope.date_from).add(365,'days');
 	
 	var array_resp = response["response"]
 	$scope.recommendations = new Array();

 	for(var i=0;i<array_resp.length;i++)
 	{
 		var tmp = {}
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

});