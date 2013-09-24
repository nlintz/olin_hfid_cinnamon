angular.module('teamCinnamon.controllers', []).
	controller('teamController', ['$scope', 'Team', function($scope, Team){
		$scope.teamMembers = Team.data;
	}]).
	controller('inspirationalDesignsController', ['$scope', 'InspirationalDesigns', function($scope, InspirationalDesigns){
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
