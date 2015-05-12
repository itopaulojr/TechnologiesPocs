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
    .when('/Employee', {
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
    return $resource("/Employee/Employess", {}, {

    });
});

myApp.controller('EmployeeController', ['$scope', '$window','$filter', 'employeeFactory', function ($scope, $window, $filter,employeeFactory) {
    $scope.Employee = {};
    $scope.Employee.Name = "Paulo";
    $scope.Employee.Address = "Av. Três de Março";
    $scope.Employee.AddressNumber = 1435;
    $scope.Employee.BlockName = "Bl. 14";
    $scope.Employee.Entrace = "abc";
    $scope.Employee.Floor = 1;
    $scope.Employee.Apartment = 103;
    $scope.Employee.InternalEmail = null;
    $scope.Employee.VendorCompanyName = null;
    $scope.Employee.Type = 'Outsourcing';

    $scope.Employees = [];

    $scope.EmployeeTypes = [{ Id: 'Employee', Name: 'Employee' }, { Id: 'Outsourcing', Name: 'Outsourcing' }];

    $scope.add = function () {

        var newEmployee = true;
        if($scope.Employee.Id)
            newEmployee = false;

        var employee = employeeFactory.save($scope.Employee, {}, function (data) {
            if(newEmployee){
                $scope.Employees.push(data);
            }else{
                var employee = $filter('filter')($scope.Employees, { Id: $scope.Employee.Id })[0];
            }                
            $scope.Employee = {};
        });

    }

    $scope.delete = function (index) {
        //$window.alert('teste');
        $scope.Employees.splice(index, 1);
    }

    $scope.clear = function () {
        //$scope.Employees = employeeFactory.query();
        $scope.Employee = {};        
    }

    $scope.edit = function (index) {
        var employee = $scope.Employees[index];
        employee.Index = index;
        $scope.Employee = employee;
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