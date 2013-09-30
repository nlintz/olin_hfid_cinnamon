var controllers = angular.module('teamCinnamon.controllers', [])

controllers.controller('teamController', ['$scope', 'Team', function($scope, Team){
	$scope.teamMembers = Team.data;
}])

controllers.controller('inspirationalDesignsController', ['$scope', 'InspirationalDesigns', function($scope, InspirationalDesigns){
	$scope.inspirationalDesigns = InspirationalDesigns.data;

	$scope.scrollTo = function(id){
		var location = "#"+id;
		$.scrollTo($(location), 500);
	}

	$(".fancybox").fancybox();

	$('#inspirational-designs-side-nav').affix({
		offset: { top: $('#inspirational-designs-side-nav').offset().top }
	});
}]);

controllers.controller('needsAnalysisController', ['$scope', 'NeedsAnalysis', 'Personas', function($scope, NeedsAnalysis, Personas){
	$scope.needsAnalysis = NeedsAnalysis.data;
	$scope.personas = Personas.data;
	$scope.topics=["Design Brief", "Impacts", "Data Gathering", "Task Analysis", "Personas", "Design Narratives", "Methodology Shortcomings"]

	$scope.scrollTo = function(id){
		var location = "#"+id;
		$.scrollTo($(location), 500);
	}

	$(".fancybox").fancybox();


	$('#needs-analysis-side-nav').affix({
		offset: { top: $('#needs-analysis-side-nav').offset().top }
	});


}])