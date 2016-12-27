
var app = angular.module("mypage", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
   $routeProvider.

   when('/project', {
      templateUrl: 'project-1.html'
   }).
   otherwise({
      templateUrl: 'home_page.html'
   });

}]);