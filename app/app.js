
var app = angular.module("mypage", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
   $routeProvider.

   when('/addPerson', {
      templateUrl: 'static/js/views/create_person.html', controller: 'personRegCntr'
   }).
   otherwise({
      redirectTo: '/'
   });

}]);