	$(function() {
		$(".mainMenu a").smoothScroll({
			offset: -100
		})

	$("li.history, li.skill, li.gallery, li.newsletter").hover(function(){
		
	$("#painInTheAss").css({"color": "#7BEEC7"});
     
}, function(){

	$("#painInTheAss").css({"color": "#111"});
});

	});