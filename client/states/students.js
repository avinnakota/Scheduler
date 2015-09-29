angular.module('scheduler.students', [])
.controller('studentsCtrl', function($scope, $state, $http){

	// var searchTime = function(data) {
	// 	console.log('in here');
 //    return $http({
 //      method: 'GET',
 //      url: '/students',
 //      data: JSON.stringify(data)
 //    })
 //    .then(function(resp) {
 //      console.log('received!');
 //    });
 //  };

  $scope.getTimes = function() {
  	var day = $('#day').value();
  	return $http({
      method: 'GET',
      url: '/students',
      data: JSON.stringify(day)
    })
    .then(function(resp) {
      console.log('received!');
    });
  };

});