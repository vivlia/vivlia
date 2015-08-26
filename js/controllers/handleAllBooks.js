vivliaApp.controller("UploadBookRequest",['$scope','$http','$rootScope'
                                        ,function($scope,$http,$rootScope){
	var userName=localStorage.getItem("loggedInUser");
	$scope.user=userName;
	var url="http://default-environment-qswam2itdu.elasticbeanstalk.com/rest/user/showAllBooks?userName="+userName
		var req = {
			 method: 'GET',
			 url: url,
			 data: $.param({ email: userName})
			};
	$http(req).then(function(data){
		$scope.bookData=JSON.parse(angular.toJson(data));
		console.log($scope.bookData);
	});
}]);