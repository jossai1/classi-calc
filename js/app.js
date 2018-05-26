var app = angular.module('app', ["ngRoute"]);


app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "views/main.html",
                controller: "MainController"  
            })
            .otherwise({       
                redirectTo: '/' 
            });


    }
]);
