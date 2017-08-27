angular.module('tutorialCtrlModule',[])
.controller('TutorialCtrl',['$scope','Calculation','myService',function($scope,Calculation,myService){
	$scope.say='Hello';
	$scope.number=1;
	$scope.firstName='Absi';
	$scope.lastName='Syne';
	$scope.timesTwo=function(){
		//$scope.number=Calculation.timesTwo($scope.number);
		$scope.number=myService.timesTwo($scope.number);
	}
}])
.directive('welcomeMessage',function(){
	return {
		restrict:'E',
		template:'<div>How are you?</div>'
	};
})
.factory('Calculation',function(){
	let calculation={};
	calculation.timesTwo=function(a){return a*2;};
	calculation.pytheorm=function(a,b){return a*a+b*b;};
	return calculation;
})
.service('myService',function(){
	this.timesTwo=function(a){return a*2;};
	this.pytheorm=function(a,b){return a*a+b*b};
})
.controller('TutorialCtrl2',['$scope',function($scope){
	$scope.secondTutrl='This is the second tutorial!';
}]);
