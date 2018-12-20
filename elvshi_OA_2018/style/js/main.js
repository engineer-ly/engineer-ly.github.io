// 所有全局变量声明

var prefix = ''; //所有跳转链接的前缀
var allVar = {
	logo : document.getElementById('main_logo'),
	homeBtnFlex : {
		btn : document.getElementById('home_btn_flex'),
		body : document.getElementById('home_nav'),
		span : document.getElementById('home_nav').getElementsByTagName('span'),
		li : document.getElementById('home_nav').getElementsByTagName('li'),
		svg : document.getElementById('home_btn_flex').getElementsByTagName('svg'),
		key : true
	},
	iframeBox : document.getElementById('iframeBox'),
	homeNav2 : document.getElementById('home_nav2'),
	homeNav2Elem : document.getElementById('home_nav2').getElementsByTagName('ul')[0].getElementsByTagName('li'),
	homeNav2Switch : document.getElementById('home_nav2_switch'),
	homeNav2SwitchP : document.getElementById('home_nav2_switch').getElementsByTagName('p')[0]
}


// 一级导航宽度伸缩
allVar.homeBtnFlex.btn.onclick = function(){
	var get = allVar.homeBtnFlex;
	if(get.key){
		get.body.style.width = '160px';
		for(var i = 0; i < get.span.length; i ++){
			get.span[i].style.display = 'block';
		}
		$('.home_menu li').tooltip('destroy');  // 隐藏提示文字
		get.svg[0].style.display = 'none';
		get.svg[1].style.display = 'inline';
		get.key = false;
	}
	else{
		get.body.style.width = '60px';
		for(var i = 0; i < get.span.length; i ++){
			get.span[i].style.display = 'none';
		}
		$('.home_menu li').tooltip();  // 显示提示文字
		get.svg[0].style.display = 'inline';
		get.svg[1].style.display = 'none';
		get.key = true;
	}
}


// 一级导航提示信息
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
(function (){
	var get = allVar.homeBtnFlex;
	for(var i = 0; i < get.li.length; i ++){
		get.li[i].title = get.span[i].innerText;
	}

}())


// 左侧跳转页面
function toThisPage(url, it){
	allVar.iframeBox.src = prefix + url;
	var allButton = allVar.homeNav2.getElementsByTagName('button');
	for(var i = 0; i < allButton.length; i ++){
		allButton[i].className = 'btn';
	}
	if(it){
		if(it.className == 'btn'){
			it.className = 'btn home_btn_on';
		}
	}
}


// 切换菜单
function toThisMenu(it, url){
	var get = allVar.homeBtnFlex;
	var num;
	for(var i = 0; i < get.li.length; i ++){
		get.li[i].className = 'btn btn1_hover';
		if(get.li[i] == it){
			num = i;  // 获取自身在元素数组的位置
		}
	}
	it.className = 'btn btn1_hover home_btn_on';
	if(num == 0){  // 如果为0，则表示当前按钮是首页按钮
		allVar.iframeBox.src = prefix + url;
		allVar.homeNav2.style.width = '0px';
		allVar.homeNav2Switch.style.display = 'none';
		var allButton = allVar.homeNav2.getElementsByTagName('button');
		for(var i = 0; i < allButton.length; i ++){  // 遍历去除二级菜单下所有button的选中状态
			allButton[i].className = 'btn';
		}
	}else{
		num += -1;
		allVar.homeNav2.style.width = '180px';
		allVar.homeNav2Switch.style.display = 'block';
		allVar.homeNav2Switch.getElementsByTagName('p')[0].className = 'home_nav2_close';
		allVar.homeNav2.getElementsByTagName('ul')[0].style.marginTop = -getViewportOffset().h * num + 'px';
	}
}



// homeNav2高度auto
for(var i = 0; i < allVar.homeNav2Elem.length; i ++){
	allVar.homeNav2Elem[i].style.height = getViewportOffset().h + 'px';
}


// 二级导航显示隐藏
allVar.homeNav2Switch.onclick = function(){
	var get = allVar.homeNav2.style;
	var get1 = allVar.homeNav2Switch.getElementsByTagName('p')[0];
	if(get.width != '0px'){
		get.width = '0px';
		get1.className = 'home_nav2_open';
	}else{
		get.width = '180px';
		get1.className = 'home_nav2_close';
	}
}


// 功能性弹窗
var newViewVar = {
	view : document.getElementById('id_new_view'),
	iframeView : document.getElementById('id_new_view').getElementsByTagName('iframe')[0],
	body : document.getElementById('view'),
	close : document.getElementById('id_new_view').getElementsByTagName('a')[0],
	span : document.getElementById('id_new_view').getElementsByTagName('span')[0]
}
function newView(url, it){
	newViewVar.body.className = 'view_filter';
	newViewVar.iframeView.src = prefix + url;

	
	newViewVar.view.style.display = 'block';
	var num = 0;
	newViewVar.view.style.opacity = num;
	var slow = setInterval(function(){
		if(num != 1){
			num += 0.2;
			newViewVar.view.style.opacity = num;
		}else{
			clearInterval(slow);
		}
	},20)
}
// 控制是否可通过点击空白区域关闭弹窗
// newViewVar.view.onclick = function(){
// 	newViewVar.body.className = 'view';
// 	newViewVar.view.style.display = 'none';
// }
newViewVar.close.onclick = function(){
	newViewVar.body.className = 'view';
	newViewVar.view.style.display = 'none';
}



// 修改界面颜色
var newView2 = {
	view : document.getElementById('ui_color'),
	close : document.getElementById('ui_color').getElementsByTagName('a')[0],
	li : document.getElementById('ui_color').getElementsByTagName('li')
}
function changeColor(){
	newViewVar.body.className = 'view_filter';
	newView2.view.style.display = 'block';
	var num = 0;
	newView2.view.style.opacity = num;
	var slow = setInterval(function(){
		if(num != 1){
			num += 0.2;
			newView2.view.style.opacity = num;
		}else{
			clearInterval(slow);
		}
	},20)
}
function newView2Close(){
	newViewVar.body.className = 'view';
	newView2.view.style.display = 'none';
}
addEvent(newView2.close, 'click', newView2Close);
addEvent(newView2.view, 'click', newView2Close);
function mainColor(url, it){
	if(url){
		var get = newView2.li;
		for(var i = 0; i < get.length; i ++){
			get[i].className = 'btn';
		}
		it.className = 'btn new_view2_on';
		document.getElementById('main_link').href = url;
		newView2Close();
	}else{
		alert('未设置CSS链接地址')
	}
}


// 兼容火狐浏览器下一级导航滚动
if (navigator.userAgent.indexOf('Firefox') >= 0) {  
		
    var homeNav = $("#home_nav");
    homeNav.css('overflow-y', 'visible');
    homeNav.css('margin-top', '0');
    
    homeNav.on('DOMMouseScroll', function(e){

        var t = -e.originalEvent.detail * 50;

        homeNav.css('margin-top', parseInt(homeNav.css('margin-top')) + t + 'px');

        if(parseInt(homeNav.css('margin-top')) > 0){
            homeNav.css('margin-top', '0')
        }


        if(parseInt(homeNav.css('margin-top')) < (-parseInt($(".home_menu").css('height')) + $(window).height() - 100 )){
        	console.log()
            homeNav.css('margin-top', (-parseInt($(".home_menu").css('height')) + $(window).height() - 100 ))
        }

    })
}



// 非模态提示框 showCue( 显示延迟, 显示时间-传空不自动关闭 )
function showCue( delay, timeLength ){

	setTimeout(function(){
		$(".not_mode_cue").show(200);

		if(timeLength){
			setTimeout(function(){
				$(".not_mode_cue").hide(200);
			},timeLength)
		}
		
	},delay)
	
}

$(function(){
	$(".not_mode_cue .btn").click(function(){
		$(".not_mode_cue").hide(200);
	})
})














