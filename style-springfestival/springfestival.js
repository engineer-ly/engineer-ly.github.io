$(function(){
	// 添加春节彩蛋元素
	$(".login_body").prepend("<i class='img-left'></i>");
	$(".login_body").prepend("<i class='img-right'></i>");
	$(".login_body").prepend("<i class='img-bottom'></i>");
	$(".login_body").prepend("<i class='img-top'></i>");
	$(".loginbox").prepend("<i class='lucky'></i>");

	// lucky-show控制方法
	var luckyFn = {
		show : function(event){
			event.stopPropagation();
			$(".loginbox").addClass("lucky-show");
			$(".loginbox > .start").attr("disabled", true);
		},
		hide : function(){
			$(".loginbox").removeClass("lucky-show");
			$(".loginbox > .start").attr("disabled", false);
		}
	}

	// 播放烟花
	$(".loginbox").prepend("<button class='btn start'></button>");
	$(".loginbox > .start").on("click",function(){
		luckyFn.show(event);
		$(window).one("click",function(){
			luckyFn.hide();
		})
	})

			

	// 禁止用户拖拽图片
	$("img").attr("draggable", false);


	$("head").prepend("<!--[if lte IE 9]><link rel='stylesheet' type='text/css' href='fit-ie9.css'><![endif]-->")
	


})