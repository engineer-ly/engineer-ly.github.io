
function toScroll(num) {
	$("html, body").animate({
		scrollTop: num
	}, 200)
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
		$(it).addClass("on");
		pakeRoll.menu();
		pakeRoll.list( $(it).index() )
		console.log($(it).index())
	},
	list: function(num){
		toScroll( $(".web-list > li:eq(" + num + ")").offset().top - 100 )
	}
}



$(function(){
	pakeRoll.menu()
	

	$(".web-list > li").each(function(){
		// console.log($(this).offset().top)
	})
	
})