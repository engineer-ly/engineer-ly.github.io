
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
  

// 评论轮播
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.rightarrow',
    prevEl: '.leftarrow',
  },
});

setInterval(function(){
  $(".rightarrow").click();
},6000)


// 置顶模块显示
$(window).scroll(function(){
  var num = $(window).scrollTop();
  
  if(num > 400){
    $(".totop").css('display', 'block');
  }
  if(num <= 400){
    $(".totop").css('display', 'none');
  }
  
})












})