angular.module('teamCinnamon.services', []).
	factory('InspirationalDesign', ['$http', function($http){
			return $http.get('public/json/inspirationalDesigns.json')
		}]).
	factory('Team', ['$http', function($http){
			return $http.get('public/json/team.json')
		}])
