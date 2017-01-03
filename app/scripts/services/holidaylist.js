angular.module('hplannerFrontendApp')
 .service('HolidayListService',function($http) {
	this.dates = function(){
		return $http.get("http://localhost:3000/api/leaves.json")
		.then(function(response) {
			 return response.data;
		},function(response) {
			return -1;
		});
	}
});
