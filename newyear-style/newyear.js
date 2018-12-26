$(function(){
	$(".login_body").prepend("<img class='test-fireworks' src='img/fireworks.gif'>");

	$(".login_body").prepend("<i class='img-left'></i>");
	$(".login_body").prepend("<i class='img-right'></i>");
	$(".login_body").prepend("<i class='img-bottom'></i>");
	$(".login_body").prepend("<i class='img-top'></i>");
	$(".login_body").prepend("<i class='fireworks'></i>");

	$(".login_body > .test-fireworks").load(function(){
		$(".login_body").prepend("<div class='start'>看烟花</div>");
		$(".login_body > .start").on("click",function(){
			$(".login_body > .fireworks").addClass("show");
			setTimeout(function(){
				$(".login_body > .fireworks").removeClass("show");
			},4000)
		})
	})
			

	
	


})