
app.controller('reviewController', ['$scope','$rootScope','calendarFactory', function($scope,$rootScope,calendarFactory){
	$scope.jump = $rootScope.jump;
	$scope.calendar = calendarFactory.calendar;
}]);