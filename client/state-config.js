angular.
	module('scheduler')
	.config(function($stateProvider, $urlRouterProvider) {
		//default url - show home page
		$urlRouterProvider.otherwise('/home');

		$stateProvider
			//this is the home page where student/teacher identification occurs
			.state('home', {
					url: '/home', 
					templateUrl: 'states/home.html',
					controller: 'homeCtrl'
			})

			.state('students', {
					url: '/students', 
					templateUrl: 'states/students.html',
					controller: 'studentsCtrl'
			})

			.state('teachers', {
					url: '/teachers', 
					templateUrl: 'states/teachers.html',
					controller: 'teachersCtrl'
			});
	});