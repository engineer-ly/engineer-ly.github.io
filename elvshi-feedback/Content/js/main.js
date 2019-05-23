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