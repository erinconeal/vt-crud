angular.module('vtApp').controller('homeCtrl', function($scope, vtSrv) {
	$scope.title = 'Members';
	$scope.propertyName = 'id';
	$scope.reverse = false;

	vtSrv.getGroups().then(function(response) {
		$scope.groups = response.data;
	});

	$scope.sortBy = function(propertyName) {
		$scope.reverse =
			$scope.propertyName === propertyName ? !$scope.reverse : true;
		$scope.propertyName = propertyName;
	};
});
