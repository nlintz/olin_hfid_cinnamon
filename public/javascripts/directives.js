var directives = angular.module('teamCinnamon.directives', [])

directives.directive('pageTitle', function(){
	return {
		restrict: 'E',
		scope: {
			title: '@'
		},
		templateUrl: 'partials/pageTitle.html'
	}
})