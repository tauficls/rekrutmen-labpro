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
	.controller('DateCtrl', function($scope) {
		$scope.today = new Date();
	})
	.controller('Calculate2NumberCtrl2', function($scope) {
		//initialization
		var newNumber = true, Value = null, total = null, lastOperation = null, lastValue = null;
		$scope.output = "0";
		$scope.operator = "";
		//Mengeluarkan tampilan output setiap penekanan tombol
		$scope.Output = function(x) {
			if ($scope.output == "0" || newNumber) {
				 $scope.output = x;
				 newNumber = false;
			} else {
				$scope.output += String(x);
			}
			Value = parseInt($scope.output);
		};
		//jika menekan "+"
		$scope.Plus = function() {
			if (Value) {
				if (total) {
					total += Value;
				} else {
					total = Value;
				}
			}
			$scope.operator = "+";
			$scope.output = total;
       		newNumber = true;
       		Value = null;
		};
		//jika menekan "-"
		$scope.Substract = function() {
			if (Value) {
				if (total) {
					total -= Value;
				} else {
					total = Value;
				}
			}
			$scope.operator = "-";
			$scope.output = total;
       		newNumber = true;
       		Value = null;
		};
		//jika menekan "="
		$scope.SamaDengan = function() {
			if (!newNumber) {
				Value = parseInt($scope.output);
				lastValue = Value;
			}
			if ($scope.operator == "+") {
				total += Value;
				lastOperation = "+";
			} else if ($scope.operator == "-") {
				total -= Value;
				lastOperation = "-";
			} else if ($scope.operator == "*") {
				total = total * Value;
				lastOperation = "*";
			} else if ($scope.operator == ":") {
				total = total / Value;
				lastOperation = ":"
			} else {
				if (lastOperation) {
					if (lastOperation == "+") {
						if (total) {
							total += lastValue;
						} else {
							total = 0;
						}
					} else if (lastOperation == "-") {
						if (total) {
							total -= lastValue;
						} else {
							total = 0;
						}
					} else if (lastOperation == "*") {
						if (total) {
							total = total * lastValue;
						} else {
							total = 0;
						}
					} else if (lastOperation == ":") {
						if (total) {
							total = total / lastValue;
						} else {
							total = 0;
						}
					}
				} else {
					total = Value;
				}
			}
			$scope.operator = "";
			$scope.output = total;
			Value = null;
			newNumber = true;
		};
		//jika menekan "c"
		$scope.Clear = function() {
			$scope.operator = "";
			$scope.output = 0;
			newNumber = true;
			lastValue = null;
			lastOperation = "";
			Value = null;
			total = null;
		};
		//jika menekan "*"
		$scope.Multiplication = function() {
			if (Value) {
				if (total) {
					total *= Value;
				} else {
					total = Value;
				}
			}
			$scope.operator = "*";
			$scope.output = total;
       		newNumber = true;
       		Value = null;
		};
		$scope.Divide = function() {
			if (Value) {
				if (total) {
					total /= Value;
				} else {
					total = Value;
				}
			}
			$scope.operator = ":";
			$scope.output = total;
			newNumber = true;
			Value = null;
		};
	});

