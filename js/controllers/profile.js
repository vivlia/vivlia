vivliaApp.controller("ProfileController",['$scope','$http','$rootScope'
                                        ,function($scope,$http,$rootScope){
	var userName;
	fetchProfile=function(){
		userName=localStorage.getItem("loggedInUser");
		var url="http://default-environment-qswam2itdu.elasticbeanstalk.com/rest/user/profile"
			var req = {
				 method: 'POST',
				 url: url,
				 headers: {
				   'Content-Type': 'application/x-www-form-urlencoded'
				 },
				 data: $.param({ email: userName})
				};
		$http(req).then(function(data){
			$scope.finalData=JSON.parse(angular.toJson(data));
			console.log($scope.finalData);
		});
	};
	fetchProfile();
	
}]);



		