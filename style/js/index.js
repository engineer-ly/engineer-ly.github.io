
function toScroll(num) {
	$("html, body").animate({
		scrollTop: num
	}, 300)
	return false
}


var pakeRoll = {
	menu: function (){
		$("header > .wrap > .menu > .now").css({
			left: $("header > .wrap > .menu > li.on").position().left,
			width: $("header > .wrap > .menu > li.on").width()
		})	
	},
	on: function(it){
		$("header > .wrap > .menu > li").removeClass("on");
		if(typeof(it) == "object"){
			$(it).addClass("on");
			pakeRoll.list( $(it).index() );
		}else{
			$("header > .wrap > .menu > li:eq(" + it + ")").addClass("on");
		}
		pakeRoll.menu();
	},
	list: function(num){
		toScroll( $(".web-list > li:eq(" + num + ")").offset().top - 100 )
	}
}



$(function(){
	pakeRoll.menu();
	
	var arr = new Array();
	$(".web-list > li").each(function(){
		arr.push($(this).offset().top - 100);
	})
	var windowTimer;
	
	$(window).scroll(function(){
		clearTimeout(windowTimer);
		windowTimer = setTimeout(function(){
			var num = $(window).scrollTop();
			var x = 0;
			for (var i = 0; i <= arr.length; i++) {
				if(num >= arr[i]){
					x = i;
				}
			}
			pakeRoll.on(x);
		}, 100)
	})
	
	










})