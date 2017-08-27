var app=angular.module('tutorialApp',['tutorialCtrlModule','ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:'views/tutorial.html',
		controller:'TutorialCtrl'
	})
	.when('/tutorial2',{
		templateUrl:'views/tutorial2.html',
		controller:'TutorialCtrl2'
	})
	.otherwise({
		redirectTo:'/'
	});
})