angular.module('scheduler.home', ['ui.router'])

.controller('homeCtrl', function($scope, $state, $http){

	$scope.selectedOption = function (){
		$scope.identified = true;
	};

	$scope.identify = function() {
		//enters in the student or teacher info and that sends a request to server to pull up that mongo data
		$state.go('students');
	}
});