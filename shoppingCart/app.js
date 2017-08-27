var app=angular.module('myApp',[]);
app.controller('myCtrl',['$scope','myOprt',function($scope,myOprt){
	$scope.cart = [
        {
            id: 1010,
            name: 'iphone5s',
            quantity: 4,
            price: 430
        },
        {
            id: 3300,
            name: 'iphone5',
            quantity: 3,
            price: 330
        },
        {
            id: 2302,
            name: 'imac',
            quantity: 3,
            price: 1300
        },
        {
            id: 1400,
            name: 'ipad',
            quantity: 5,
            price: 690
        },
        {
            id: 1560,
            name: 'ipad2',
            quantity: 9,
            price: 990
        },
        {
            id: 4091,
            name: 'iphone 6',
            quantity: 12,
            price: 610
        },
        {
            id: 9390,
            name: 'imac-pro',
            quantity: 7,
            price: 2200
        },
    ];
    $scope.add=function(x){myOprt.add(x);};
    $scope.reduce=function(x){myOprt.reduce(x);};
    $scope.remove=function(x){myOprt.remove($scope.cart,x);};
    $scope.totalQuantity=function(){
    	let tq=0;
    	for(let x of $scope.cart){
    		tq+=x.quantity;
    	}
    	return tq;
    }
    $scope.totalPrice=function(){
    	let tp=0;
    	for(let x of $scope.cart){
    		tp+=x.quantity*x.price;
    	}
    	return tp;
    }
}])
.service('myOprt',function(){
	this.add=function(x){
		x.quantity++;
	};
    this.reduce=function(x){
    	if(x.quantity){
    		x.quantity--;
    	}
    };
    this.remove=function(cart,x){
    	cart.splice(cart.indexOf(x),1);
    };
})