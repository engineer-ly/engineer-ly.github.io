$(function(){
	// 添加元旦彩蛋元素
	$(".login_body").prepend("<i class='img-left'></i>");
	$(".login_body").prepend("<i class='img-right'></i>");
	$(".login_body").prepend("<i class='img-bottom'></i>");
	$(".login_body").prepend("<i class='img-top'></i>");
	$(".login_body").prepend("<i class='fireworks'></i>");
	$(".login_body").prepend("<video class='mp4' preload src='fireworks.mp4'></video>");

	// 视频播放控制方法
	var videoFn = {
		show : function(){
			$(".login_body > .mp4").addClass("show");
			$(".login_body > .mp4")[0].currentTime = 0;
			$(".login_body > .mp4")[0].play();
			$(".loginbox > .start").attr("disabled", true);
		},
		hide : function(){
			$(".login_body > .mp4").removeClass("show");
			$(".login_body > .mp4")[0].pause();
			$(".loginbox > .start").attr("disabled", false);
		}
	}

	// 播放烟花
	$(".loginbox").prepend("<button class='btn start'></button>");
	$(".loginbox > .start").on("click",function(){
		videoFn.show();
		setTimeout(function(){
			videoFn.hide();
		},7000)
	})

			

	// 禁止用户拖拽图片
	$("img").attr("draggable", false);


	$("head").prepend("<!--[if lte IE 9]><link rel='stylesheet' type='text/css' href='fit-ie9.css'><![endif]-->")
	


})