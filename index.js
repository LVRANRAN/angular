var app = angular.module('practice', []);
app.controller('ctrl1', function ($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});

app.controller('ctrl2',function($scope){
    $scope.names=['Kai','Jimmy','Tom'];
});

app.controller('ctrl3',function($scope){
    $scope.scopeName="Runoob";
    $scope.sayHello=function(){
        $scope.greeting='Hello' +' '+ $scope.scopeName + '!';
    };
});