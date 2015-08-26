$("#menu-login").click(function(e){
		 e.preventDefault();
		 $("#login").modal();
	});
$("#menu_signup").click(function(e){
	 e.preventDefault();
	 $("#signup").modal();
});
$("#browse").click(function(e) {
	e.preventDefault();
	$("#search").toggleClass("hide");
	$("#search").find("input").focus();
	$(".list-inline.intro-social-buttons").addClass("hide");
})
$("#search").find("input").focusout(function(){
	$("#search").toggleClass("hide");
	$(".list-inline.intro-social-buttons").removeClass("hide");
})