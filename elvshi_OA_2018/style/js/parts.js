

// 页面加载loading事件
$(function(){
    var num = 1;
    var slow = setInterval(function(){
        num += -0.2;
        $('#loading').css('opacity' , num)
    }, 40);
    setTimeout(function(){
        $('#loading').css('display' , 'none')
        clearInterval(slow);
    }, 200)
});





// 多选框选中样式
$("input[type='checkbox'][checked]").addClass('input_checked');
$(':checkbox').change(function(){
    if($(this).prop("checked")){
        $(this).addClass('input_checked');
    }else{
        $(this).removeClass('input_checked');
    }
})

// 单选框选中样式
$("input[type='radio'][checked]").addClass('input_radio_checked');
$(':radio').change(function(){
    var name = $(this).attr('name');
    $("input[type='radio'][name=" + name + "]").removeClass('input_radio_checked');

    if($(this).prop("checked")){
        $(this).addClass('input_radio_checked');
    }else{
        $(this).removeClass('input_radio_checked');
    }
})


// 多选框全选
var allMarkNum = 0;
$('.all_mark').click(function(){
    allMarkNum ++;
    if(allMarkNum % 2 == 0){
        $(':checkbox').prop('checked', false);
        $(':checkbox').removeClass('input_checked');
    }else{
        $(':checkbox').prop('checked', true);
        $(':checkbox').addClass('input_checked');
    }  
})






// body padding-bottom 自适应 (页面底部内宽)
$( "body" ).css( 'paddingBottom' , $("footer").css("height") );
// 监听footer高度动态auto
var footerNum = $( "footer" ).css( "height" )
$( window ).resize(function() {
    if($( "footer" ).css( "height" ) != footerNum){
        footerNum = $( "footer" ).css( "height" );
        $( "body" ).css( 'paddingBottom' , $("footer").css("height") );
    }

 })




// 监听页面滚动事件 - 保持表头在视口内
if(document.getElementById('table')){   // 判断页面是否存在表格元素

    $("#table").attr('data-table-fixed-head-trigger', $('#table_title').offset().top);
    (function($){  
        $.fn.tfh = function(){  
      
            var method = (arguments.length === 2) ? arguments[0] : ((arguments.length === 1 && typeof arguments[0] === 'string' ? arguments[0] : undefined));  
            var options = $.extend({  
                trigger: 0,  
                top: 0  
            },(arguments.length === 2) ? arguments[1] : ((arguments.length === 1 && typeof arguments[0] === 'object' ? arguments[0] : {} )));  
      
            this.width = function(){  
                return this.find('thead').attr('data-tmp-width',parseInt(this.find('thead').css('width'))).find('*').each(function(){  
                    $(this).attr('data-tmp-width',parseInt($(this).css('width')));  
                }).end().end();  
            };  
      
            this.fix = function(){  
                return this.find('.table-fixed-head-thead').css({  
                    'top': options.top + 'px',  
                    'position': 'fixed'  
                }).end();  
            };  
      
            this.clone = function(){  
                return this.find('thead').clone(true).prependTo(this).addClass('table-fixed-head-thead').end().end().removeAttr('data-tmp-width').find('*').removeAttr('data-tmp-width').end().end();  
            };  
      
            this.build = function(){  
                return this.tfh('width').tfh('clone').find('[data-tmp-width]').each(function(){  
                    $(this).css({  
                        'width': $(this).data('tmp-width') + 'px',  
                        'minWidth': $(this).data('tmp-width') + 'px',  
                        'maxWidth': $(this).data('tmp-width') + 'px',  
                    });  
                }).removeAttr('data-tmp-width').end().tfh('fix', options);  
            };  
      
            this.kill = function(){  
                this.find('.table-fixed-head-thead').remove();  
            };  
      
            this.show = function(){  
                return this.addClass('fixed').find('thead').css('visibility','visible').not('.table-fixed-head-thead').css('visibility','hidden').end().end();  
            };  
      
            this.hide = function(){  
                return this.removeClass('fixed').find('thead').css('visibility','hidden').not('.table-fixed-head-thead').css('visibility','visible').end().end();  
            };  
      
            if(method !== undefined){  
                return this[method].call($(this));  
            } else {  
                var table = this.build.call($(this),options);  
                var tableWidth = table.css('width');  
                var tableScrollLeft = table.position().left;  
      
                if($(document).scrollTop() > options.trigger) {  
                    table.tfh('show');  
                } else {  
                    table.tfh('hide');  
                }  
      
                var resizeTimer;  
                $(window).resize(function(){  
                    window.clearInterval(resizeTimer);  
                    resizeTimer = window.setInterval(function() {  
                        window.clearInterval(resizeTimer);  
                        if(tableWidth !== table.css('width')) {  
                            tableWidth = table.css('width');  
                            table.tfh('kill');  
                            table.tfh(options);  
                        }  
                    }, 1000);  
                }).scroll(function(){  
                    if($(document).scrollTop() > options.trigger) {  
                        table.tfh('show');  
                        table.find('.table-fixed-head-thead').css('left',(tableScrollLeft - $(document).scrollLeft()) + 'px');  
                    } else {  
                        table.tfh('hide');  
                    }  
                });  
            }  
        }  
        $(document).ready(function(){  
            $('table.table-fixed-head').each(function(){  
                $(this).tfh({  
                    trigger: ($(this).data('table-fixed-head-trigger') !== undefined ? $(this).data('table-fixed-head-trigger') : 0),  
                    top: ($(this).data('table-fixed-head-top') !== undefined ? $(this).data('table-fixed-head-top') : $(this).position().top)  
                });  
            });  
        });  
    }(jQuery));
}




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


// 页面就绪
$(function () {
    // 提示信息
    $('[data-toggle="tooltip"]').tooltip();


    // 表格提示信息
    var td = document.getElementsByTagName('td');
    for(var i = 0; i < td.length; i ++){
        td[i].title = td[i].innerText;
    }

    $('td').on('mouseover', function(event){

        var titleBox = document.createElement('div');
        var num = parseInt($(this).css('width'))
        var textNum = $(this).text().length;

        if(textNum > 10 && num > 150){
            document.body.appendChild(titleBox);
            titleBox.className = 'td_title';
            $('.td_title:eq(0)').text(this.title);
            $('.td_title:eq(0)').css({
                'top' : event.clientY,
                'left' : event.clientX
            })
            this.title = '';
            $(this).on('mousemove', function(event){
                $('.td_title:eq(0)').css({
                    'top' : event.clientY,
                    'left' : event.clientX
                })
            })


            $(this).on('mouseout', function(){
                this.title = titleBox.innerText;
                if(titleBox.remove){
                   titleBox.remove() 
                }else{
                    titleBox.removeNode(true);
                }
                
                
            })
        }
    })



    // 右键菜单事件
    $('tbody , .small_menu').on( 'contextmenu' , false )

    $('tbody tr').on('mouseup', function(e){
        
        if(e.which == 3){

            displaySmallMenu(e, 'left', this);
            
        }
    })

    $(".case_set").click(function(e){

        e.stopPropagation();
        displaySmallMenu(e, 'right', this)

    })

    function displaySmallMenu(e, position, it){
        // if(it.id){
        //     console.log(it.id);
        // }else{
        //     console.log($(it).parents("tr")[0].id)  
        // }
        
        
        $('.small_menu').css({
            'top' : e.clientY
        })
        switch(position){

            case 'left':
            $('.small_menu').css({
                'right' : 'auto',
                'left' : e.clientX
            })
            break;

            case 'right':
            $('.small_menu').css({
                'left' : 'auto',
                'right' : $(window).width() - e.clientX
            })
            break;
        }


        var num = $(window).height() - (e.clientY + $('.small_menu').height());
        if(num < 0){
            $('.small_menu').css('top', e.clientY + num)
        }

        $('.small_menu').show(100);

        $(document).one('click', function(){
            $('.small_menu').hide();
        })
    }





    // 页面padding-top根据header的高度自适应
    $( "body" ).css( 'paddingTop' , $("header").css("height") );

    


    // 页面内定位导航
    $("#content .tab2 a").each(function(i){

        $(this).click(function(){

            $("#content .tab2 a").removeClass('tab2_on');

            $(this).addClass('tab2_on');

            $(window).scrollTop(
                $('.shell:eq(' + i + ')').offset().top - parseInt($("header").css("height")) + 60
            );


        })
        
    })



    // input3 展开隐藏功能

    $(".input_display").click(function(){
        $(".input3_other").slideToggle(200);
        setTimeout(function(){
            if( $(".input3_other").css("display") == "block" ){
                $(".input_display").text("收起")
            }else{
                $(".input_display").text("展开")
            }
        },240)
        
    })


    









});



















