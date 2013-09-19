angular.module('teamCinnamon', ['teamCinnamon.controllers']).
	config(['$routeProvider', function($routeProvider) {
	  $routeProvider.
	      when('/home', {templateUrl: 'templates/home.html'}).
	      when('/process', {templateUrl: 'templates/process.html'}).
	      when('/proposal', {templateUrl: 'templates/proposal.html'}).
	      when('/team', {templateUrl: 'templates/team.html', controller: 'teamController'}).
	      otherwise({redirectTo: '/home'});
}]);
