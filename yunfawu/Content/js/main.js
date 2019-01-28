
// 导航栏切换
var navFn = {
	on: function(it){
		$("header .menu > a").removeClass("on");
		if(typeof(it) == "object"){
			$(it).addClass("on");
		}else{
			$("header .menu > a:eq(" + it + ")").addClass("on");
		}
	}
}
$(function(){
	// 菜单事件绑定
	$("header .menu > a").click(function(){
		var index = $(this).index();
		navFn.on(this);
		$("html,body").animate({
			scrollTop:$("#point" + (index + 1)).offset().top - 40
		},300)
		return false;
	});
	// 页面事件绑定
	var navArr = new Array();
	(function(){
		for(var i = 1; ;i ++ ){
			if($("#point" + i).length){
				navArr.push($("#point" + i).offset().top - 41);
			}else{
				break;
			}
		}
	})();
	var windowTimer;
	$(window).scroll(function(){
		clearTimeout(windowTimer);
		windowTimer = setTimeout(function(){
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


$(function(){
	// 页面滚动时
	$(window).scroll(function(){
		if($(this).scrollTop() > 200){
			$("header").addClass("down");
		}else{
			$("header").removeClass("down");
		}
		
	})


	


















})