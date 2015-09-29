angular.module('scheduler.services',[])

.factory('studentService', function($state, $http) {
	var searchTime = function(data) {
    return $http({
      method: 'GET',
      url: '/students',
      data: JSON.stringify(data)
    })
    .then(function(resp) {
      console.log(resp);
    });
  };

  return {
  	searchTime: searchTime
  }
});