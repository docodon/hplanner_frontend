'use strict';

angular.module('hplannerFrontendApp')
 .service('UserPreferenceService',function($http) {
	this.plans = function(submit_form){
		submit_form["holiday_list"] = date_list(submit_form["holiday_list"]);
		submit_form["date_from"] = date_rep(submit_form["date_from"]);

		return $http.post("http://localhost:3000/api/leaves/gen_plan.json",submit_form)
		.then(function(response) {
			 return response.data;
		},function(response) {
			return -1;
		});
	};

	var date_list = function(ar)
	{
		for(var i=0;i<ar.length;i++)
			ar[i] = date_rep(ar[i]);
		return ar;
	};
	
	var date_rep =function(x)
	{
		return x.format("YYYY-MM-DD");
	}
});
