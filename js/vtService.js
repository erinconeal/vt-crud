angular.module('vtApp').service('vtSrv', function($http) {
	var baseUrl = 'http://middleware.vt.edu/interview';
	const proxyurl = 'https://cors-anywhere.herokuapp.com/';

	// var proxyurl = 'http://crossorigin.me/';

	this.getGroups = function() {
		return $http({
			method: 'GET',
			url: proxyurl + baseUrl + '/groups'
		});
	};

	this.getOneMemberGroup = function(id) {
		return $http({
			method: 'GET',
			url: proxyurl + baseUrl + '/groups/' + id
		});
	};
});
