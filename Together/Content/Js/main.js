
// 导航栏切换
function switchTab( url, it ){
	$("#conetent").attr('src', url);
	if(it != false){
		$("#main > .nav > li").removeClass('now');
		$(it).addClass('now');
	}
	
}


$(function(){






















})