$(function(){
    //tab切换
    personalMethods.tabChange();
});
let personalMethods = {
    //tab切换
    tabChange:() =>{
        $('.tab-box a').on('click',function(){
           let myId = $(this).attr('myAttr');
           $('.tab-box a span').removeClass('active');
           $(this).find('span').addClass('active');
           $('.person-item').hide();
           $(myId).show();
        });
    }
}