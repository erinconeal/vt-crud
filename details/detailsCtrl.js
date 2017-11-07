angular
	.module('vtApp')
	.controller('detailsCtrl', function($scope, $stateParams, item) {
		$scope.title = 'Details';
		var groupId = $stateParams.id;
		var info = item.data;

		for (var i = 0; i < info.length; i++) {
			if (groupId == info[i].id) {
				$scope.groupData = info[i];
			}
		}
	});
