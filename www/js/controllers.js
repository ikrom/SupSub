angular.module('starter.controllers', [])



.controller('HomeCtrl', function($scope, $http) {
	$scope.restComment=[];
  $scope.comments=[];
  $scope.lastComment=[];
	var url = "";
	if(ionic.Platform.isAndroid()){
		url = "/android_asset/www/";
	}
	$http.get('/js/data/timeline.json')
	.success(function(response){ 
		$scope.timeline=response;
		console.log(response);
		for(i=0;i<$scope.timeline.length;i++){
		  	$scope.comments[i] = $scope.timeline[i].comments;
		  	$scope.sumcomment=$scope.timeline[i].comments.length;
		  	$scope.restComment[i]=$scope.sumcomment-2;
		  	$scope.lastComment[i]=$scope.sumcomment-1;
		  }

	});
  
  //console.log($scope.timeline.sumcomment[0]);
  
  
  $scope.changeFavorite =function($index){

  }
  
})

.controller('MapCtrl', function($scope) {})

.controller('ProfileCtrl', function($scope) {})

.controller('ComingSoonCtrl', function($scope) {})

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
