angular.module('vtApp').controller('homeCtrl', function($scope, vtSrv) {
	$scope.getMembers = function() {
		vtSrv.getMembers().then(function(response) {
			console.log(response);
			$scope.members = response.data;
		});
	};
	$scope.getMembers();
});
