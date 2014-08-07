var app = angular.module("dev", []);

function devlinks($scope){
	$scope.getClass = function getClass(idx) {
	  
		return {special:0}
	
	};
	$scope.items = [
		{
			head: 'Javascript',
			title: "Server-Side Device Detection With JavaScript",
			url: 'http://www.smashingmagazine.com/2014/07/01/server-side-device-detection-with-javascript/',
			desc: 'There are many strategies to choose from when developing a modern, device independent website nowadays. How should capabilities of the device or browser be determined? Should the presentation logic be server side or client side? Traditionally, mobile optimization had to happen server side.'
		},
		{
			head: 'Javascript',
			title: "Modules, a Future Approach to JavaScript Libraries",
			url: 'http://code.tutsplus.com/articles/modules-a-future-approach-to-javascript-libraries--cms-21800',
			desc: 'A module is an encapsulated piece of functionality that does one thing only, and that one thing very well.'
		},
		{
			head: 'Javascript',
			title: "JavaScript Patterns Collection",
			url: 'http://shichuan.github.io/javascript-patterns/',
			desc: 'A JavaScript pattern and antipattern collection that covers function patterns, jQuery patterns, jQuery plugin patterns, design patterns, general patterns, literals and constructor patterns, object creation patterns, code reuse patterns, DOM and browser patterns'
		},
		{
			head: 'OOPS Javascript',
			title: "The Definitive Guide to Object-Oriented JavaScript",
			url: 'http://www.objectplayground.com/',
			desc: 'Let’s Code: Test-Driven JavaScript and start watching today!'
		},
		{
			head: 'Programming',
			title: "Understanding the Principles of Algorithm Design",
			url: 'http://code.tutsplus.com/tutorials/understanding-the-principles-of-algorithm-design--net-26561',
			desc: 'Algorithms are not a special type of operation, necessarily. They are conceptual, a set of steps that you take in code to reach a specific goal.'
		}
	];
}
