angular.module('teamCinnamon', ['ngSanitize', 'teamCinnamon.controllers', 'teamCinnamon.services', 'teamCinnamon.directives', 'teamCinnamon.filters']).
	config(['$routeProvider', function($routeProvider) {
	  $routeProvider.
	      when('/home', {templateUrl: 'templates/home.html'}).
	      when('/process', {templateUrl: 'templates/process.html'}).
	      when('/proposal', {templateUrl: 'templates/proposal.html'}).
	      when('/team', 
	      	{templateUrl: 'templates/team.html', controller: 'teamController', resolve: {Team: 'Team'}}).
	      when('/inspirational_designs', 
	      	{templateUrl: 'templates/inspirational_designs.html', controller: 'inspirationalDesignsController', resolve: {InspirationalDesigns: 'InspirationalDesign'}}).
	      when('/needs_analysis', 
	      	{templateUrl: 'templates/needs_analysis.html', controller:'needsAnalysisController', resolve: {NeedsAnalysis: 'NeedsAnalysis', Personas: 'Personas'}}).
	      when('/work_distribution',
	      	{templateUrl: 'templates/work_distribution.html', controller: 'workDistributionController', resolve: {WorkDistribution: 'WorkDistribution'}}).
	      otherwise({redirectTo: '/home'});
}]);
