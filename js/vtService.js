angular.module('vtApp').service('vtSrv', function($http, $q) {
	var baseUrl = 'http://middleware.vt.edu/interview/groups';

	this.getMembers = function() {
		return $http.get(baseUrl).then(function(memberResponse) {
			return memberResponse.data;
		});
	};
});
