
// Young Codeing

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



	//a标签跳转获取参数
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return (r[2]); return null;
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
			script.src = 'style/js/language/zh.js';
			head.appendChild(script);
			setCookie("language", "zh");
			break;

			// 英文
			case 'en':
			script.src = 'style/js/language/en.js';
			head.appendChild(script);
			setCookie("language", "en");
			break;

			// 俄语
			case 'ru':
			script.src = 'style/js/language/ru.js';
			setCookie("language", "ru");
			break;

			// 土耳其语
			case 'tr':
			script.src = 'style/js/language/tr.js';
			setCookie("language", "tr");
			break;

			// 乌克兰语
			case 'uk':
			script.src = 'style/js/language/uk.js';
			setCookie("language", "uk");
			break;

			// 其他
			default:
			script.src = 'style/js/language/ru.js';
			setCookie("language", "ru");
			break;

		}
	}



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
		
	   	

	$(window).scroll(function(){
		var num = $(window).scrollTop();
		
		if(num > 100){
			$("header").addClass('nav_solid');
			$(".totop").slideDown('200');
		}
		if(num <= 100){
			$("header").removeClass('nav_solid');
			$(".totop").slideUp('200');

		}
		
	})

	$(".phone_menu_btn").click(function(){

		if($(".menu").css('display') == 'none'){
			$("header").addClass('nav_top')
		}else{
			$("header").removeClass('nav_top')
		}
		
	})

	$(".team_data_close").click(function(){
		$(".team-overlay").click();
	})


	// 语言切换
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




	// 置顶
	$('.totop').click(function(){
		$("html, body").animate({
			scrollTop: 0
		}, "400")

		return false
	})





	// 显示隐藏更多问题
	$(".btn_moreask").click(function(){
		$(".cashbus_ask").fadeIn(400);
	})
	$(".cashbus_ask > .close").click(function(){
		$(".cashbus_ask").fadeOut(400);
	})










	

	
})

