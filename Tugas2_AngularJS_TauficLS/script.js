angular.module('MyApp', [])
	.controller('HelloWorldCtrl', function($scope) {
		$scope.Hello = "Hello World";
		$scope.Welcome = "Welcome to the World of Simple Calculator"
	})
	.controller('Calculate2NumberCtrl', function($scope) {
		$scope.AddNumber = function() {
			var a = Number($scope.a);
			var b = Number($scope.b);
			$scope.sum = a + b;
			$scope.substract = a - b;
			$scope.multiplication = a * b;
			$scope.division = a / b;
			var pangkat = 1, i;
			for (i = 0; i < b; i++) {
				pangkat = pangkat * a;
			}
			$scope.power = pangkat;
		}
	})
	.controller('DateController', function($scope) {
		$scope.today = new Date();
	});