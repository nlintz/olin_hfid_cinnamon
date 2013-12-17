var controllers = angular.module('teamCinnamon.controllers', []);

controllers.controller('teamController', ['$scope', 'Team', function($scope, Team){
	$scope.teamMembers = Team.data;
}]);

controllers.controller('inspirationalDesignsController', ['$scope', 'InspirationalDesigns', function($scope, InspirationalDesigns){
	$scope.inspirationalDesigns = InspirationalDesigns.data;

	$scope.scrollTo = function(id){
		var location = "#"+id;
		$.scrollTo($(location), 500);
	};

	$(".fancybox").fancybox();

	$('#inspirational-designs-side-nav').affix({
		offset: { top: $('#inspirational-designs-side-nav').offset().top }
	});
}]);

controllers.controller('needsAnalysisController', ['$scope', 'NeedsAnalysis', 'Personas', function($scope, NeedsAnalysis, Personas){
	$scope.needsAnalysis = NeedsAnalysis.data;
	$scope.personas = Personas.data;
	$scope.topics=["Design Brief", "Impacts", "Data Gathering", "Task Analysis", "Personas", "Design Narratives", "Methodology Shortcomings"];

	$scope.scrollTo = function(id){
		var location = "#"+id;
		$.scrollTo($(location), 500);
	};

	$(".fancybox").fancybox();


	$('#needs-analysis-side-nav').affix({
		offset: { top: $('#needs-analysis-side-nav').offset().top }
	});
}]);

controllers.controller('designDevelopmentController', ['$scope', 'Insights', 'DesignDevelopmentAlternatives', 'Portfolio', 'Interactions', function($scope, Insights, DesignDevelopmentAlternatives, Portfolio, Interactions){
	// $scope.needsAnalysis = NeedsAnalysis.data;
	// $scope.personas = Personas.data;
	$scope.topics=["User Needs", "Design", "Interaction Flow", "Strengths", "User Feedback", "Key Insights", "Alternative Designs", "Idea Portfolio"];
	$scope.insights = Insights.data;
	$scope.alternatives = DesignDevelopmentAlternatives.data;
	$scope.portfolio = Portfolio.data;
	$scope.interactions = Interactions.data;
	$scope.scrollTo = function(id){
		var location = "#"+id.split(' ').join('');
		$.scrollTo($(location), 500);
	};

	$(".fancybox").fancybox();


	$('#needs-analysis-side-nav').affix({
		offset: { top: $('#needs-analysis-side-nav').offset().top }
	});
	slides = [];
	slides.push({
      image: 'public/images/cinnamon.jpeg',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
    slides.push({
      image: 'public/images/cinnamon.jpeg',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });

    $scope.slides = slides;

}]);

controllers.controller('wireframeSitemapController', ['$scope', function($scope){
		$(".fancybox").fancybox();
}]);

controllers.controller('workDistributionController', ['$scope', 'WorkDistribution', function($scope, WorkDistribution){
	$scope.workDistribution = WorkDistribution.data;
	$scope.research = $scope.workDistribution[0];
	$scope.needsAnalysis = $scope.workDistribution[1];
	$scope.designDevelopment = $scope.workDistribution[2];
	$scope.designRefinement = $scope.workDistribution[3];
}]);

controllers.controller('designRefinementController', ['$scope', function($scope){
	$scope.headings = ["Design Overview", "Design Walkthrough", "Major Changes", 
	"Limitations and Future Work", "Insights", "Appendix", "Wireframes", "Sitemap", 
	"Cognitive Walkthrough", "Heuristic Evaluation", "Scenarios"];

	$scope.scrollTo = function(heading){
		var location = "#" + heading.split(" ").join("");
		$.scrollTo($(location), 500);
	}

	$(".fancybox").fancybox();
}]);

controllers.controller('finalRefinementController', ['$scope', function($scope){
	$scope.headings = ["FinalReport", "Appendix", "Usability Study Report", "Design Changes", "Usability Study Protocol Rev 2", "Usability Study Protocol Rev 1"];

	$scope.scrollTo = function(heading){
		var location = "#" + heading.split(" ").join("");
		$.scrollTo($(location), 500);
	}

	$(".fancybox").fancybox();
}])