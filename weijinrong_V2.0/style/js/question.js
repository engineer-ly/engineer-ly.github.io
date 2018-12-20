// 页面置顶
function toTop(){
    if(window.scrollY){
        var toTop = setInterval(function(){
            var toHeight = scrollY / 7;
            if(scrollY > 0){
                scrollBy(0,(-toHeight - 1));

            }else{
                clearInterval(toTop);

            }
        },10)
    }else{
        window.scroll(0,0);
    }
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





$(function(){



// 创建script标签
var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
head.appendChild(script);

// 语言切换
function switchLan( country ){

	switch( country ){

		// 中文
		case 'zh':
		script.src = 'style/js/cashbus/zh.js';
		head.appendChild(script);
		setCookie("language", "zh");
		break;

		// 英文
		case 'en':
		script.src = 'style/js/cashbus/en.js';
		head.appendChild(script);
		setCookie("language", "en");
		break;

		// 俄语
		case 'ru':
		script.src = 'style/js/cashbus/ru.js';
		setCookie("language", "ru");
		break;

		// 土耳其语
		case 'tr':
		script.src = 'style/js/cashbus/tr.js';
		setCookie("language", "tr");
		break;

		// 乌克兰语
		case 'uk':
		script.src = 'style/js/cashbus/uk.js';
		setCookie("language", "uk");
		break;

		// 其他
		default:
		script.src = 'style/js/cashbus/ru.js';
		setCookie("language", "ru");
		break;

	}
}


// 如果cookie为空 则判断浏览器语言
if( getCookie("language") == "" ){

	// 判断浏览器语言
	var JsSrc =(navigator.language || navigator.browserLanguage).toLowerCase();
	if(JsSrc.indexOf('zh')>=0)
    {
  	 	// 中文
  	 	switchLan("zh");
    }
    else if(JsSrc.indexOf('en')>=0)
    {
        // 英文
       	switchLan("en");
    }
    else if(JsSrc.indexOf('ru')>=0)
    {
       	// 俄语
       	switchLan("ru");
   	}
   	// else if(JsSrc.indexOf('tr')>=0)
    // {
    //   	土耳其语
    //   	switchLan("tr");
   	// }
   	// else if(JsSrc.indexOf('uk')>=0)
    // {
    //     乌克兰语
    // 	switchLan("uk");
   	// }
   	else{
   		// 中文
  	 	switchLan("zh");
   	}
}else{
	switchLan( getCookie("language") );
}




// 页面下拉显示头部
$(window).scroll(function(){
	var num = $(window).scrollTop();
	
	if(num > 400){
		$(".index header").addClass('header_display');
		$(".totop_shell .totop li:eq(2)").css('display', 'block');
	}
	if(num <= 400){
		$(".index header").removeClass('header_display');
		$(".totop_shell .totop li:eq(2)").css('display', 'none');
	}
	
})


// 帮助 切换选项卡
$(".ask_title > li:eq(0)").click(function() {
	$("#title").attr({
		'class': 'wrap before'
	});
});
$(".ask_title > li:eq(1)").click(function() {
	$("#title").attr({
		'class': 'wrap after'
	});
});


	




// 语言切换界面 显示隐藏
$(".language").click(function(){
	$(".language_interface").fadeIn(200);
});

$(".language_interface").click(function(){
	$(".language_interface").fadeOut(200);
});

$(".language_interface li").click(function(){
	$(".language_interface").fadeOut(200);
	var lan = $(this).attr("lan");
	switchLan( lan );
	location.reload();
});



















	
})