$(function(){
	$(".login_body").prepend("<i class='img-left'></i>");
	$(".login_body").prepend("<i class='img-right'></i>");
	$(".login_body").prepend("<i class='img-bottom'></i>");
	$(".login_body").prepend("<i class='img-top'></i>");
	$(".login_body").prepend("<div class='start'>放烟花</div>");

	$(".login_body > .start").on("click",function(){
		$(".login_body").addClass("fireworks");
		setTimeout(function(){
			$(".login_body").removeClass("fireworks");
		},4000)
	})
})