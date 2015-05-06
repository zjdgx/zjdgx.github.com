(function(angular){
	var module = angular.module('Controllers', []);
	
	module.controller('HelloController', [
		'$scope',
		function($scope) {
			$scope.greeting = {text: 'Hello'};
		}
	]);
})(window.angular);