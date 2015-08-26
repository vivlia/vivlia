vivliaApp.controller("LoginController",['$scope','$http','$rootScope'
                                        ,function($scope,$http,$rootScope){
	
	$("#username").focusout(function(){
		var userName=$("#username").val();
		if(userName==""){
			$("#userError").toggleClass("hide");
		}
		else{
			$("#userError").addClass("hide");
		}
	});
	$("#password").focusout(function(){
		var userName=$("#username").val();
		if(password==""){
			$("#pwdError").toggleClass("hide");
		}
		else{
			$("#pwdError").addClass("hide");
		}
	});
	$("#firstName").focusout(function(){
		var firstName=$("#firstName").val();
		if(firstName==""){
			$("#firstNameError").toggleClass("hide");
		}
		else{
			$("#firstNameError").addClass("hide");
		}
	});
	$("#lastName").focusout(function(){
		var lastName=$("#lastName").val();
		if(lastName==""){
			$("#lastNameError").toggleClass("hide");
		}
		else{
			$("#lastNameError").addClass("hide");
		}
	});
	$("#p_email").focusout(function(){
		var p_email=$("#p_email").val();
		if(p_email==""){
			$("#emailError").toggleClass("hide");
		}
		else{
			$("#emailError").addClass("hide");
		}
	});
	$("#school").focusout(function(){
		var school=$("#school").val();
		if(school==""){
			$("#schoolError").toggleClass("hide");
		}
		else{
			$("#schoolError").addClass("hide");
		}
	});
	$("#major").focusout(function(){
		var major=$("#major").val();
		if(major==""){
			$("#majorError").toggleClass("hide");
		}
		else{
			$("#majorError").addClass("hide");
		}
	});
	$("#year").focusout(function(){
		var year=$("#year").val();
		if(year==""){
			$("#semError").toggleClass("hide");
		}
		else{
			$("#semError").addClass("hide");
		}
	});
	$("#signUpPassword").focusout(function(){
		var signUpPassword=$("#signUpPassword").val();
		if(signUpPassword==""){
			$("#signUpPwdError").toggleClass("hide");
		}
		else{
			$("#signUpPwdError").addClass("hide");
		}
	});
	$("#con_password").focusout(function(){
		var con_password=$("#con_password").val();
		if(con_password==""){
			$("#confirmPwdError").toggleClass("hide");
		}
		else{
			$("#confirmPwdError").addClass("hide");
		}
	});
	$scope.login=function(){
	var userName=$("#username").val();
	var password=$("#password").val();
	if(userName==""){
		$("#userError").toggleClass("hide");
	}
	else if(password==""){
		$("#pwdError").toggleClass("hide");
	}
	else{
		$("#login").modal("hide");
		var url="http://default-environment-qswam2itdu.elasticbeanstalk.com/rest/user/login"
			var req = {
				 method: 'POST',
				 url: url,
				 headers: {
				   'Content-Type': 'application/x-www-form-urlencoded'
				 },
				 data: $.param({ email: userName,password:password })
				};
			$http(req).then(function(data){
				var finalData=JSON.parse(angular.toJson(data));
				console.log(finalData);
				if(finalData.data.status=="successful"){
					localStorage.setItem("loggedInUser",userName);
					window.location="profile.html#/myProfile";
				}
			});
		}
	}
	$scope.signupAction=function(){
		var firstName=$("#firstName").val();
		var lastName=$("#lastName").val();
		var p_email=$("#p_email").val();
		var s_email=$("#s_email").val();
		var school=$("#school").val();
		var major=$("#major").val();
		var year=$("#year").val();
		var semester=$("#semester").val();
		var signUpPassword=$("#signUpPassword").val();
		var con_password=$("#con_password").val();
		if(firstName==""){
			$("#firstNameError").toggleClass("hide");
		}
		else if(lastName==""){
			$("#lastNameError").toggleClass("hide");
		}
		else if(p_email==""){
			$("#emailError").toggleClass("hide");
		}
		else if(school==""){
			$("#schoolError").toggleClass("hide");
		}
		else if(major==""){
			$("#majorError").toggleClass("hide");
		}
		else if(year==""){
			$("#semError").toggleClass("hide");
		}
		else if(signUpPassword==""){
			$("#signUpPwdError").toggleClass("hide");
		}
		else if(con_password==""){
			$("#confirmPwdError").toggleClass("hide");
		}
		else if(signUpPassword!=con_password){
			$("#noMatchError").toggleClass("hide");
		}
		else{
			semester=semester+" "+year;
			
			var url="http://default-environment-qswam2itdu.elasticbeanstalk.com/rest/user/signup"
				var req = {
					 method: 'POST',
					 url: url,
					 headers: {
					   'Content-Type': 'application/x-www-form-urlencoded'
					 },
					 data: $.param({ firstName: firstName,lastName:lastName,s_email:s_email,p_email:p_email,school:school,major:major,semester:semester,signUpPassword:signUpPassword})
					};
				$http(req).then(function(data){
					var finalData=JSON.parse(angular.toJson(data));
					console.log(finalData);
					if(finalData.data.status=="successful"){
						$("#signup").modal("hide");
						$("#thanks").modal();
						//localStorage.setItem("loggedInUser",userName);
						//window.location="profile.html#/myProfile";
					}
					else{
						$("#wrong").modal();
					}
				});
		}
			
	}
}]);



		