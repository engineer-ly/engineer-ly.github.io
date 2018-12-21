$(function(){
	// 联盟主菜单移动端 显示/隐藏
	$(".switchmenu").on("click", function(){
		$(".menu").slideToggle(200);
	})
	$(".menu > li").on("click",function(){
		$(this).children('.smenu').slideToggle(200);
	})


	// 活动板块 个人中心移动端 显示/隐藏
	$(".user-center > .userpic").on("click", function(){
		if($(document).width() < 648){
			$(".pa-nav").addClass("show-user-center");
		}
	})
	$(".user-center > .pa-close").on("click", function(){
		$(".pa-nav").removeClass("show-user-center");
	})


	// 地址选择
	$(".pa-type > .pa-wrap > .base").on("click", function(){
		$(".setbase").fadeIn(200);
	})
	$(".setbase , .setbase > .go").on("click", function(event){
		$(".setbase").fadeOut(200);
		event.stopPropagation();
	})
	$(".setbase > select").on("click", function(event){
		event.stopPropagation();
	})









	
})