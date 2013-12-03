angular.module('teamCinnamon', ['ngSanitize', 'teamCinnamon.controllers', 'teamCinnamon.services', 'teamCinnamon.directives', 'teamCinnamon.filters', 'ui.bootstrap']).
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
		  when('/design_development', 
			{templateUrl: 'templates/design_development.html', controller:'designDevelopmentController', resolve: {Insights: 'DesignDevelopmentInsights', DesignDevelopmentAlternatives: 'DesignDevelopmentAlternatives', Portfolio: 'Portfolio', Interactions: 'Interactions'}}).
		  when('/design_refinement', 
			{templateUrl: 'templates/design_refinement.html', controller:'designRefinementController'}).
		  when('/work_distribution',
			{templateUrl: 'templates/work_distribution.html', controller: 'workDistributionController', resolve: {WorkDistribution: 'WorkDistribution'}}).
		  when('/story_boards',
			{templateUrl: 'templates/story_boards.html'}).
		  when('/interaction_flows',
			{templateUrl: 'templates/interaction_flows.html'}).
		  when('/wireframes_sitemap',
		  	{templateUrl: 'templates/wireframes_sitemap.html', controller: 'wireframeSitemapController'}).
		  when('/final_refinement',
		  	{templateUrl: 'templates/final_refinement.html', controller: 'finalRefinementController'}).
		  otherwise({redirectTo: '/home'});
}]);
