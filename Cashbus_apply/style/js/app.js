$(function(){


	// input日期控件 change效果
	$("input[type='date']").on('change', function(){
		if($(this).val()){
			$(this).addClass('input_date_none_text');
		}else{
			$(this).removeClass('input_date_none_text');
		}
	})


	// 下拉选项框 改变时修改样式
	$("select").on('change', function(){
		$(this).removeClass('select_has_tips');
	})
	$("select[disabled]").removeClass('select_has_tips');


	// 上传图片 显示略缩图
	$("input[type='file']").on('change',function() {
		var fileShell = $(this).parent();
		var file = this.files[0];
		var readerFile = new FileReader();
		readerFile.onload = function (ev) {
			var data = ev.target.result;
			$(fileShell).css('background-image', 'url(' + data + ')');
			$(fileShell).addClass('file_has_img');
		}
		readerFile.readAsDataURL(file);
	});


	// input获取焦点时 元素位移至顶部
	$("input[type='text'], input[type='password']").on('focus', function(){
		$("html, body").animate({
			scrollTop: $(this).offset().top-88
		}, 200)
	})













})