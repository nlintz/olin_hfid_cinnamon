angular.module('teamCinnamon.controllers', []).
	controller('teamController', ['$scope', function($scope){
		$scope.teamMembers = [
			{
				name: "Nathan Lintz",
				description: "Nathan Lintz is a Junior and loves writing code. He is interested in front end intrerface design, particularly writing JavaScript powered web apps.",
				imgURL: "nathan.jpg"
			},
			{
				name: "Sharon Grimshaw",
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
				imgURL: "sharon.jpg"
			},
			{
				name: "Chaz Gwenapp",
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
				imgURL: "chaz.jpg"
			},
			{
				name: "Jea Park",
				description: "Jea Young Park is a senior, but he's not that old. As a bioengineering major, he is interested in the mathematical modeling of biological systems as well as patient-oriented medical design. He likes watching soccer (is not good at playing soccer) and likes to talk about cuisine.",
				imgURL: "jea.jpg"
			}
		];
	}])