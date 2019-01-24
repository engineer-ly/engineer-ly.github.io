// 判断时间来控制是否启动夜间模式
var date = new Date;
if(date){
	if(date.getHours() >= 17){
		$("head").append('<link rel="stylesheet" type="text/css" href="style/css/night-mode.css">');
	}else{
		$("head").append('<link rel="stylesheet" type="text/css" href="style/css/day-mode.css">');
	}
}else{
	$("head").append('<link rel="stylesheet" type="text/css" href="style/css/day-mode.css">');
}


// 设置、获取cookie方法
function setCookie(c_name,value,expiredays){
	var exdate=new Date()
	exdate.setDate(exdate.getDate()+expiredays)
	document.cookie=c_name+ "=" +escape(value)+
	((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}
function getCookie(c_name){
	if (document.cookie.length>0)
	  {
	  c_start=document.cookie.indexOf(c_name + "=")
	  if (c_start!=-1)
	    { 
	    c_start=c_start + c_name.length+1 
	    c_end=document.cookie.indexOf(";",c_start)
	    if (c_end==-1) c_end=document.cookie.length
	    return unescape(document.cookie.substring(c_start,c_end))
	    } 
	  }
	return ""
}
// cookie存对象方法
// JSON.parse(str) 字符串转对象
// JSON.stringify(obj) 对象转字符串
// setCookie("tips",str,100*365); 设置cookie

// 页面缓动至某位置
function toScroll(num) {
	$("html, body").animate({
		scrollTop: num
	}, 300)
	return false
}


// 页面滚动和菜单光标相互绑定方法
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



// tips
var tipsFn = {
	tcookie: "",
	show: function(){
		$(".tips-add").fadeIn(200);
		$(".tips-add > .form").addClass("show");
	},
	close: function(){
		$(".tips-add").fadeOut(200);
		$(".tips-add > .form").removeClass("show");
	},
	add: function(){
		var info = $(".tips-add > .form > textarea").val();
		var color = $(".tips-add > .form > input:checked").val();
		if(info&&color){
			$(".tips-add > .form").addClass("stop"); //阻止form内元素点击 - 开启
			tipsFn.tcookie.push({"info":info,"color":color}); //数据数组push新内容
			setCookie("tips",JSON.stringify(tipsFn.tcookie),100*365); //添加至cookie
			tipsFn.close();  //关闭添加tips界面
			tipsFn.elem(info,color);
			$(".tips-add > .form > textarea").val("");  //清除textarea内容
			$(".tips-add > .form > input:eq(0)").attr("checked",true); //radio选中复位
			$(".tips-add > .form").removeClass("stop"); //阻止form内元素点击 - 解除
		}else{
			alert("请输入内容后再次操作")
		}
	},
	elem: function(info,color){
		info = info.split('<').join('&lt;');
		info = info.split('>').join('&gt;');
		info = info.split(' ').join('&nbsp;');
		var x =
		'<li class='+ color +'>'+
			'<span>'+ info +'</span>'+
			'<div class="ok" onclick="tipsFn.done(this)"></div>'+
		'</li>';
		$(".tips > .add").before(x);

	},
	done: function(it){
		var key = confirm("是否确认");
		if(key){
			var num = $(it).parent().index();
			tipsFn.tcookie.splice(num,1);
			setCookie("tips",JSON.stringify(tipsFn.tcookie),100*365);
			$(it).parent().remove();
		}
	}
}
$(function(){
	// 获取浏览器cookie
	tipsFn.tcookie = getCookie("tips");
	if(tipsFn.tcookie){
		tipsFn.tcookie = JSON.parse(getCookie("tips"));
		for (var i = 0; i < tipsFn.tcookie.length; i ++) {
			tipsFn.elem(tipsFn.tcookie[i].info,tipsFn.tcookie[i].color);
		}
	}else{
		tipsFn.tcookie = new Array;
	}
	// 阻止 .form元素 事件冒泡
	$(".tips-add > .form").click(function(event){
		event.stopPropagation();
	})
})
	



$(function(){

	// 旋转立方体上色
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
		$(".load").removeClass("load");

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


	// tips最小高度自动
	$(".tips").css("min-height",$(window).height() - 200 + "px");


})