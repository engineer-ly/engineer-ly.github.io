
// input value过滤为正浮点数并保留2为小数点
function justRmb(obj){  
	obj.value = obj.value.replace(/[^\d.]/g,"");  //清除“数字”和“.”以外的字符
	obj.value = obj.value.replace(/\.{2,}/g,"."); //只保留第一个. 清除多余的
	obj.value = obj.value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
	obj.value = obj.value.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3');//只能输入两个小数
	if(obj.value.indexOf(".")< 0 && obj.value !=""){//以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
		obj.value= parseFloat(obj.value);
	}       
}



// 页面置底
function toBottom(){
	$(document).scrollTop($(document).height());
}



$(function(){

	// 日期选择input提示
	$("input[type='date'],input[type='time']").on("input",function(){
        if($(this).val().length>0){
                $(this).addClass("full");
        }else{
                $(this).removeClass("full");
        }
	});


	// 地址选择
	var setBase = {
		open : function(){
			$(".screen .setbase").addClass('show');
			$(".x-item_list,.x-lawyer").addClass('disabled');
			$(".content").one("click", function(){
				setBase.close();
			})
			setBase.playBgm();
		},
		close : function(){
			$(".screen .setbase").removeClass('show');
			$(".x-item_list,.x-lawyer").removeClass('disabled');
			setBase.playBgm();
		},
		playBgm : function(){
			$(".setbase > .bgm")[0].play(); // 音效
		}
	}
	$(".screen > .base").on("click", function(){
		event.stopPropagation();
		if ($(".screen .setbase").hasClass('show')) {
			setBase.close();
		}else{
			setBase.open();	
		}
	})
	$(".screen .setbase > select").on('click', function(event) {
		event.stopPropagation();
	});
	$(".setbase > .go").on("click", function(){
		setBase.close();
	})



	// 小菜单
	$(".ico.more").on("click", function(event){
		$(".s-menu").toggle(200);
		$(".s-menu > .bgm")[0].play(); // 音效
		event.stopPropagation();
		$(".content").one("touchstart", function(){
			$(".s-menu").fadeOut(200);
		})
	})


	// 对话页面默认置底
	if($("#talk").length){
		toBottom();
	}
	$("#talk .x-talk_input > .text").on("focus" ,function(){
		toBottom();
	});
	// 消息发送音效
	$(".x-talk_input > .x-sbtn").on("click", function(){
		if( $(".x-talk_input > .text").val().length > 0 ){
			$(".x-talk_input > .bgm")[0].play();
		}
	})



})