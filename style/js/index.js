
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

	function randomNum(){
		return parseInt(Math.random() * 255);
	}
	function randomColor(){
		return "rgba("+ randomNum() +","+ randomNum() +","+ randomNum() +",0.8)";
	}
	
	// $(".cube > div").each(function(){
	// 	$(this).css("background-color",randomColor());
	// })
	$(".cube > div").css("background-color",randomColor());


	// 数据拉取
	function getData(){
		var output1 = '';
		var output2 = '';
		// console.log(data)
		for (var i = 0; i < data.length; i ++) {
			output1 += "<li onclick='pakeRoll.on(this)'>"+ data[i].title +"</li>";
			output2 += 
			"<li><div class='title'>"+ data[i].title +"</div>"+
			"<div class='s-list'>";
			for(var x = 0; x < data[i].content.length; x ++){
				var get = data[i].content[x];
				output2 +=
				"<a href="+ get.link +" target='_blank'>"+
					"<img src="+ get.logo +">"+
					"<p>"+ get.name +"</p>";
				if(data[i].content[x].label){
					for(var y = 0; y < data[i].content[x].label.length; y ++){
						output2 += "<em>"+ data[i].content[x].label[y] +"</em>";
					}
				}
				
				output2 +=
					"<span>"+ get.info +"</span>"+
				"</a>";
			}
			output2 += "</div></li>";
		}
		$("header > .wrap > .menu").prepend(output1);
		$(".web-list").html(output2);
			
		pageLoad();
	}
	getData();


	function pageLoad(){
		$("header > .wrap > .menu > li:eq(0)").addClass("on");
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
	}


	


})