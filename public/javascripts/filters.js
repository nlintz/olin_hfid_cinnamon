var filters = angular.module('teamCinnamon.filters', []);

filters.filter('sum', function(){
	return function(inputArray){
		return _.reduce(inputArray, function(memo, num){return memo + parseInt(num, 10);}, 0);
	};
});