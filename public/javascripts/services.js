angular.module('teamCinnamon.services', []).
	factory('InspirationalDesignData', ['$http', '$location', function($http, $location){
			return $http.get('public/json/inspirationalDesigns.json')
		}])