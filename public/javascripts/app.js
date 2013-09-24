angular.module('teamCinnamon', ['ngSanitize', 'teamCinnamon.controllers', 'teamCinnamon.services']).
	config(['$routeProvider', function($routeProvider) {
	  $routeProvider.
	      when('/home', {templateUrl: 'templates/home.html'}).
	      when('/process', {templateUrl: 'templates/process.html'}).
	      when('/proposal', {templateUrl: 'templates/proposal.html'}).
	      when('/team', 
	      	{templateUrl: 'templates/team.html', controller: 'teamController', resolve: {Team: 'Team'}}).
	      when('/inspirational_designs', 
	      	{templateUrl: 'templates/inspirational_designs.html', controller: 'inspirationalDesignsController', resolve: {InspirationalDesigns: 'InspirationalDesign'}}).
	      otherwise({redirectTo: '/home'});
}]);
