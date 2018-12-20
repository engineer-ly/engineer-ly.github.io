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





$(function(){


// 页面下拉显示头部
$(window).scroll(function(){
	var num = $(window).scrollTop();
	
	if(num > 400){
		$(".index header").addClass('header_display');
		$(".totop_shell .totop li:eq(1)").css('display', 'block');
	}
	if(num <= 400){
		$(".index header").removeClass('header_display');
		$(".totop_shell .totop li:eq(1)").css('display', 'none');
	}
	
})


// 帮助 切换选项卡
$(".ask_title > li:eq(0)").click(function() {
	$(".wrap").attr({
		class: 'wrap before'
	});
});
$(".ask_title > li:eq(1)").click(function() {
	$(".wrap").attr({
		class: 'wrap after'
	});
});


	
























	
})