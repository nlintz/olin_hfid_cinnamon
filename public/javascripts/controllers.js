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
				description: "Sharon designs cool looking stuff",
				imgURL: "sharon.jpg"
			},
			{
				name: "Chaz Gwenapp",
				description: "Chaz knows all about AI",
				imgURL: "chaz.jpg"
			},
			{
				name: "Jea Park",
				description: "Jea Young Park is a senior, but he's not that old. As a bioengineering major, he is interested in the mathematical modeling of biological systems as well as patient-oriented medical design. He likes watching soccer (is not good at playing soccer) and likes to talk about cuisine.",
				imgURL: "jea.jpg"
			}
		];
	}])