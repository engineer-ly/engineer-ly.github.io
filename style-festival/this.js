$(function(){
	// 添加彩蛋元素
	// $(".login_body").prepend("<i class='img-top'></i>");
	// $(".login_body").prepend("<i class='img-left'></i>");
	// $(".login_body").prepend("<i class='img-right'></i>");
	$(".login_body").prepend("<i class='img-bottom'></i>");
	

	// 禁止用户拖拽图片
	$("img").attr("draggable", false);

	// ie9兼容样式
	$("head").prepend("<!--[if lte IE 9]><link rel='stylesheet' type='text/css' href='fit-ie9.css'><![endif]-->")
	


})