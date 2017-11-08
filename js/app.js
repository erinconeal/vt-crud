angular
	.module('vtApp', ['ui.router', 'angular.filter'])
	.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				templateUrl: 'home/home.html',
				controller: 'homeCtrl',
				url: '/'
			})
			.state('details', {
				templateUrl: 'details/details.html',
				controller: 'detailsCtrl',
				url: '/details/:id',
				resolve: {
					item: function($stateParams, vtSrv) {
						return vtSrv.getOneMemberGroup($stateParams.id);
					}
				}
			});
	});
