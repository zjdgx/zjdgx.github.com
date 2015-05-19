(function(angular){
	var module = angular.module('Controllers', []);
	
	module.controller('HelloController', [
		'$scope',
		function($scope) {
			$scope.greeting = {text: 'Hello'};
		}
	]);
	module.controller('CartController', [
		'$scope',
		function($scope) {
			$scope.items = [
				{title: 'Paint pots', quantity: 8, price: 3.95},
				{title: 'Polka dots', quantity: 17, price: 12.95},
				{title: 'Pebbles', quantity: 5, price: 6.95}
			];
			$scope.remove = function(index) {
				$scope.items.splice(index, 1);
			};
		}
	]);
})(window.angular);