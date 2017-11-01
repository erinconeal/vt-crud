angular
	.module('vtApp', ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider.state('home', {
			templateUrl: 'home/home.html',
			controller: 'homeCtrl',
			url: '/'
		});
	});
