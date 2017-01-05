'use strict';

 angular.module('hplannerFrontendApp')
 .controller('RecommendCtrl',function (UserPreferenceService, $scope) {

 	 $scope.resp = UserPreferenceService.recommendations['api_recommendations'];


});