var app = angular.module('practice', []);

app.controller('ctrl1', function ($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});

app.controller('ctrl2', function ($scope) {
    $scope.names = ['Kai', 'Jimmy', 'Tom'];
});

app.controller('ctrl3', function ($scope) {
    $scope.scopeName = "Runoob";
    $scope.sayHello = function () {
        $scope.greeting = 'Hello' + ' ' + $scope.scopeName + '!';
    };
});

app.controller('ctrl4', function ($scope) {
    $scope.names = ["Googel", "Apple", "Microsoft"];
});

app.controller('ctrl5', function ($scope) {
    $scope.cars = {
        car01: { brand: "Ford", model: "Mustang", color: "red" },
        car02: { brand: "Fiat", model: "500", color: "white" },
        car03: { brand: "Volvo", model: "XC90", color: "black" }
    }
});

app.controller('ctrl6', function ($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Hu";
    $scope.myVar = false;
    $scope.toggle = function () {
        $scope.myVar = !$scope.myVar;
    }
});

app.controller('ctrl7', function ($scope) {
    $scope.user="John Doe";
    $scope.email="Ranran.Lv@elekta.com";
});