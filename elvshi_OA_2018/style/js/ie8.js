
$(function(){

    // ie下回复默认配色
    document.getElementById('main_link').href = "style/css/main_blue.css";

    // 一级导航滚动
    var homeNav = $("#home_nav")
    homeNav.css('margin-top', '0');
    homeNav.on('mousewheel', function(){
        var e = window.event;

        t=(e.wheelDelta)?e.wheelDelta/2:-(e.detail||0)/3;

        homeNav.css('margin-top', parseInt(homeNav.css('margin-top')) + t + 'px');

        if(parseInt(homeNav.css('margin-top')) > 0){
            homeNav.css('margin-top', '0')
        }

        if(parseInt(homeNav.css('margin-top')) < (-parseInt(homeNav.css('height')) + $(window).height())){
            homeNav.css('margin-top', (-parseInt(homeNav.css('height')) + $(window).height()))
        }

    })




})