angular.module('teamCinnamon.services', []).
	factory('InspirationalDesign', ['$http', function($http){
			return $http.get('public/json/inspirationalDesigns.json')
		}]).
	factory('Team', ['$http', function($http){
			return $http.get('public/json/team.json')
		}]).
	factory('NeedsAnalysis', ['$http', function($http){
			return $http.get('public/json/needsAnalysis.json')
		}]).
	factory('Personas', ['$http', function($http){
			return $http.get('public/json/personas.json')
		}]).
	factory('WorkDistribution', ['$http', function($http){
			return $http.get('public/json/workDistribution.json')
		}]).
	factory('DesignDevelopmentInsights', ['$http', function($http){
			return $http.get('public/json/designDevelopment_insights.json')
		}])
