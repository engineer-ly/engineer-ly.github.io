
$(document).ready(function($) {
	// mobile导航
	
        // $(".menu-btn>a").click(function(){
        //     $(this).next("ul").slideToggle();
        // });
   


    // 选项卡 鼠标点击
    $(".TAB_CLICK li").click(function(){
        var tab=$(this).parent(".TAB_CLICK");
        var con=tab.attr("id");
        var on=tab.find("li").index(this);
        $(this).addClass('on').siblings(tab.find("li")).removeClass('on');
        $(con).eq(on).fadeIn().siblings(con).hide();
    });

	    $('#menu li').hover(function(event) {
        /* Act on the event .addClass('on')*/
        $(this).find('.par').toggleClass('on').next('.ul-sn').stop().toggle();
        
    });

    $('.btn-pop').click(function(e){            
        $('.m-nav').stop().slideToggle(400);
        e.stopPropagation();
    });

    // $('.m-nav li').click(function(event) {
    //     $(this).find('.m-sub').stop().slideToggle();
    //     // $(this).find('.par').toggleClass('on');
    //     // $(this).siblings('li').children('div').slideUp();
    //     // $(this).siblings('li').children('a').removeClass('on');
    // })
    $('.m-nav li').click(function(event) {
        $(this).find('.m-sub').slideToggle();
        $(this).find('.par').toggleClass('on');
        $(this).siblings('li').children('.m-sub').slideUp();
        $(this).siblings('li').children('a').removeClass('on');
    })
	
});