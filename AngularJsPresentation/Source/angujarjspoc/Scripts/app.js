var myApp = angular.module('myApp', ['ngRoute', 'ngResource']);

myApp.config(function ($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl: '/Home/Home',
        controller: 'HomeController'
    })
    .when('/Home/About', {
        templateUrl: '/Home/About',
        controller: 'AboutController'
    })
    .when('/Home/Contact', {
        templateUrl: '/Home/Contact',
        controller: 'ContactController'
    })
    .when('/Employee/', {
        templateUrl: '/Employee/Index',
        controller: 'EmployeeController'
    })
    .when('/Account/Login', {
        templateUrl: '/Account/Login',
        controller: 'AccountLoginController'
    })
    .when('/Account/Register', {
        templateUrl: '/Account/Register',
        controller: 'AccountRegisterController'
    })
    .when('/Account/Manage', {
        templateUrl: '/Account/Manage',
        controller: 'AccountManageController'
    });
});

myApp.controller('HomeController', ['$scope', '$log', function ($scope, $log) {
    $scope.Name = "Home Uoww";

}]);


myApp.factory('employeeFactory', function ($resource) {
    return $resource("/Employee/Employess");
});



myApp.controller('EmployeeController', ['$scope', '$filter', 'employeeFactory', function ($scope,  $filter,employeeFactory) {
    $scope.Employee = {};
    $scope.Employees = employeeFactory.query();
    $scope.EmployeeTypes = [{ Id: 'Employee', Name: 'Employee' }, { Id: 'Outsourcing', Name: 'Outsourcing' }];
    $scope.showModal = false;

    $scope.add = function () {
        var employee = employeeFactory.save($scope.Employee, {}, function (data) {
            $scope.Employees = employeeFactory.query();
        });
    }

    $scope.openDelete = function (index) {
        $scope.showModal = !$scope.showModal;
        $scope.IndexToDelete = index;
    };

    $scope.closeDelete = function () {
        $scope.showModal = false;
    }

    $scope.delete = function () {        
        var employeeId = $scope.Employees[$scope.IndexToDelete].Id;
        employeeFactory.delete({ employeeId: employeeId }, function () {
            $scope.showModal = false;
            $scope.Employees = employeeFactory.query();            
        });
    }

    $scope.clear = function () {
        //$scope.Employees = employeeFactory.query();
        $scope.Employee = {};        
    }

    $scope.edit = function (index) {
        var employee = $scope.Employees[index];
        $scope.Employee = angular.copy(employee);
    }

}]);

myApp.controller('AboutController', ['$scope', '$log', function ($scope, $log) {
    $scope.Name = "About Uoww";
}]);

myApp.controller('ContactController', ['$scope', '$log', function ($scope, $log) {
    $scope.Name = "Contact Uoww";
}]);

myApp.controller('AccountLoginController', ['$scope', '$log', function ($scope, $log) {
    $scope.Name = "Account Login Uoww";
}]);

myApp.controller('AccountRegisterController', ['$scope', '$log', function ($scope, $log) {
    $scope.Name = "Account Login Uoww";
}]);