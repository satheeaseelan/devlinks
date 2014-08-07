var app = angular.module("dev", []);

function devlinks($scope){
	$scope.getClass = function getClass(idx) {
	  
		return {special:0}
	
	};
	$scope.items = [
		{
			head: 'Reducing Friction',
			title: "Immobilized: Nearly half of US consumers couldn't go a day without their smartphone.",
			url: 'http://www.google.com',
			desc: 'Findings from Bank of America Trends in Consumer Mobility Report'
		},
		{
			head: 'Being the Bank of Choice',
			title: "Who are the best investment banks out there?",
			url: 'http://www.google.com',
			desc: 'If you want an incumbent bank that stands out, then it always has to be Goldman Sachs.'
		},
		{
			head: 'Delivering Best Experiences',
			title: "Personal Capital's Financial Management App Now Available on Android Wear",
			url: 'http://www.google.com',
			desc: 'Monitor your personal finances with easy-to-understand charts and graphs.'
		},
		{
			head: 'Delighting People',
			title: "Instant Prescreen: I do not think it means what you think it means.",
			url: 'http://www.google.com',
			desc: 'How instant prescreen works, how bankers can distinguish it from the more common batch prescreen solutions and utilize it effectively in digital banking.'
		},
		{
			head: 'Innovation Opportunities',
			title: "Barriers to Entry In Banking Spell Opportunity. But Do We Seize It?",
			url: 'http://www.google.com',
			desc: '10 strategic issues banks should address to position themselves to take advantage of high barriers to entry.'
		},
		{
			head: 'Delighting People',
			title: "Instant Prescreen: I do not think it means what you think it means.",
			url: 'http://www.google.com',
			desc: 'How instant prescreen works, how bankers can distinguish it from the more common batch prescreen solutions and utilize it effectively in digital banking.'
		},
		{
			head: 'Innovation Opportunities',
			title: "Barriers to Entry In Banking Spell Opportunity. But Do We Seize It?",
			url: 'http://www.google.com',
			desc: '10 strategic issues banks should address to position themselves to take advantage of high barriers to entry.'
		}
	];
}
