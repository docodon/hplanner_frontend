'use strict';

angular.module('hplannerFrontendApp')
 .service('UserPreferenceService',function($http, ENV) {

 	this.recommendations = {'api_recommendations':-1};

	this.plans = function(submit_form,recommendations){
		submit_form["holiday_list"] = date_list(submit_form["holiday_list"]);
		submit_form["date_from"] = date_rep(submit_form["date_from"]);

		return $http.post(ENV.apiEndpoint + "/api/leaves/gen_plan.json",submit_form)
		.then(function(response) {
			 recommendations['api_recommendations'] = response.data;
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
