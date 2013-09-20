angular.module('teamCinnamon.controllers', []).
	controller('teamController', ['$scope', function($scope){
		$scope.teamMembers = [
			{
				name: "Nathan Lintz",
				description: "Nathan Lintz is a Junior and loves writing code. He is interested in front end intrerface design, particularly writing JavaScript powered web apps. When not in front of a terminal, Nathan can typically found making and mixing electronic music.",
				imgURL: "nathan.jpg"
			},
			{
				name: "Sharon Grimshaw",
				description: "Sharon Grimshaw, graduating from Olin College of Engineering in 2015, is majoring in Engineering: Interaction Design.  She is especially interested in designing products for a specific user group.  When not studying, Sharon enjoys giving tours to visiting professors, debating new ideas with friends, and going out for fro-yo.",
				imgURL: "sharon.jpg"
			},
			{
				name: "Chaz Gwenapp",
				description: "Chaz is a Junior working on an E:C major with a focus on AI. In his free time, he enjoys hanging out with friends, playing the organ, and working on crazy CS projects (though not typically at the same time).",
				imgURL: "chaz.jpg"
			},
			{
				name: "Jea Park",
				description: "Jea Young Park is a senior, but he's not that old. As a bioengineering major, he is interested in the mathematical modeling of biological systems as well as patient-oriented medical design. He likes watching soccer (is not good at playing soccer) and likes to talk about cuisine.",
				imgURL: "jea.png"
			}
		];
	}])