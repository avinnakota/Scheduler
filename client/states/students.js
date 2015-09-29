angular.module('scheduler.students', [])
.controller('studentsCtrl', function($scope, $state, studentService){


  $scope.getTimes = function() {
  	var day = $('#day').val();
  	studentService.searchTime(day);
  };

});