angular.module('teamCinnamon', ['teamCinnamon.controllers', 'teamCinnamon.services']).
	config(['$routeProvider', function($routeProvider) {
	  $routeProvider.
	      when('/home', {templateUrl: 'templates/home.html'}).
	      when('/process', {templateUrl: 'templates/process.html'}).
	      when('/proposal', {templateUrl: 'templates/proposal.html'}).
	      when('/team', {templateUrl: 'templates/team.html', controller: 'teamController'}).
	      when('/inspirational_designs', {templateUrl: 'templates/inspirational_designs.html', controller: 'inspirationalDesignsController'}).
	      otherwise({redirectTo: '/home'});
}]);
