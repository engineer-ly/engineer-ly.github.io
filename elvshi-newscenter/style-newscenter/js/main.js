// 图片点击放大
function biggerImg(it) {
   var link = $(it).attr('src');
   var html = '';
   html +=
   '<div class="bigimg-box">' +
       '<img src="' + link + '" />' +
   '</div>';
   $('body').append(html);
   $(".bigimg-box").fadeIn(200);
   $(".bigimg-box").one("click", function () {
       $(".bigimg-box").remove();
   })
}
$(function () {
   $(".coment-pic img").on("click", function () {
       biggerImg(this);
   });
});


// 弹窗
var newscenterPopup = {
  open: function(){
    $(".newscenter-popup").fadeIn(200);
    $(".newscenter-body").addClass("filter");
  },
  close: function(){
    $(".newscenter-popup").fadeOut(200);
    $(".newscenter-body").removeClass("filter");
  }
}
