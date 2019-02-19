
// 导航栏切换
var navFn = {
	on: function(it){
		$("header .menu > a").removeClass("on");
		if(typeof(it) == "object"){
			$(it).addClass("on");
		}else{
			$("header .menu > a:eq(" + it + ")").addClass("on");
			var w = $("header .menu").width();
			var itw = $("header .menu > a:eq(" + it + ")").width();
			var s = $("header .menu").scrollLeft();
			var l = $("header .menu > a:eq(" + it + ")").position().left;
			$("header .menu").scrollLeft(l+s-(w/2)+(itw/2));
		}
	}
}
$(function(){
	// 主菜单事件绑定
	$("header .menu > a").click(function(){
		var index = $(this).index();
		navFn.on(this);
		$("html,body").animate({
			scrollTop:$("#point" + (index + 1)).offset().top - 40
		},300)
		return false;
	});
	// 主菜单页面事件绑定
	var navArr = new Array();
	function setNavScroll(){
		navArr = new Array();
		for(var i = 1; ;i ++ ){
			if($("#point" + i).length){
				navArr.push($("#point" + i).offset().top - 41);
			}else{
				break;
			}
		}
	};
	var windowTimer;
	$(window).scroll(function(){
		clearTimeout(windowTimer);
		windowTimer = setTimeout(function(){
			setNavScroll();
			var num = $(window).scrollTop();
			var x = 0;
			for (var i = 0; i <= navArr.length; i++) {
				if(num >= navArr[i]){
					x = i;
				}
			}
			navFn.on(x);
		}, 50)
	})
})


// 法律服务-菜单选中与页面滚动绑定
var snavFn = {
	on: function(it){
		$(".law-list > .left > a").removeClass("on");
		if(typeof(it) == "object"){
			$(it).addClass("on");
		}else{
			$(".law-list > .left > a:eq(" + it + ")").addClass("on");
		}
	}
}
$(function(){
	$(".law-list > .left > a").click(function(){
		var index = $(this).index();
		snavFn.on(this);
		$("html,body").animate({
			scrollTop:$("#s-point" + (index + 1)).offset().top - 60
		},300)
		return false;
	});
	// 法律服务子菜单页面事件绑定
	var snavArr = new Array();
	function setSnavScroll(){
		snavArr = new Array();
		for(var i = 1; ;i ++ ){
			if($("#s-point" + i).length){
				snavArr.push($("#s-point" + i).offset().top - 61);
			}else{
				break;
			}
		}
	};
	var s_windowTimer;
	$(window).scroll(function(){
		clearTimeout(s_windowTimer);
		s_windowTimer = setTimeout(function(){
			setSnavScroll();
			var num = $(window).scrollTop();
			var x = 0;
			for (var i = 0; i <= snavArr.length; i++) {
				if(num >= snavArr[i]){
					x = i;
				}
			}
			snavFn.on(x);
		}, 50)
	})
})


$(function(){
	
	// 页面滚动时
	$(window).scroll(function(){
		if($(this).scrollTop() > 100){
			$("header").addClass("down");
		}else{
			$("header").removeClass("down");
		}
		if($(this).scrollTop() > 240){
			$(".law-list > .left").addClass('fixed');
		}else{
			$(".law-list > .left").removeClass('fixed');
		}
	})


	// pc端点击下载按钮
	$(".banner > .wrap > .right > .btn").on("click",function(){
		var num = $(window).width();
		if(num >= 867){
			$(".download-ewm-bg").fadeIn(200);
			$(".download-ewm-bg").on("click",function(){
				$(this).fadeOut(200);
			})
			if($(this).hasClass("lawyer")){
				$(".download-ewm").addClass("lawyer");
			}else {
				$(".download-ewm").removeClass("lawyer");
			}
			return false;
		}
	});


})