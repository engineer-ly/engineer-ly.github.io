// 用户信息浮窗
var userInfo = {
	add : function(it, photoLink, name, v, base, firm, number){
		var top = $(it).offset().top + 40;
		var left = $(it).offset().left - 40;
		var html = '';
		html +=
		'<div class="user-hover-info" style="top:'+ top +'px;left:'+ left +'px;">'+
            '<img class="photo" src="'+ photoLink +'">'+
            '<div class="right">'+
                '<p class="name">'+
                    '<span>'+ name +'</span><em class="'+ v +'"></em>'+
                '</p>'+
                '<span class="base">'+ base +'</span>'+
                '<span class="firm">'+ firm +'</span>'+
                '<span class="number">'+ number +'</span>'+
            '</div>'+
        '</div>';
    	$("body").append(html);
	},
	rm : function(){
		$('.user-hover-info').remove();
	}
}


// 添加用户浮窗
var addUser = {
	show : function(it){
		event.stopPropagation();
		$(it).find('.item-user-add').fadeIn(200);
		$(it).find('.input-box').focus();
		$(window).one('click',function(){
			addUser.hide();
		})
	},
	hide : function(){
		$('.item-user-add').fadeOut(200);
	}
}



// 阶段切换
var stageTabFn = {
	switch : function(it, add){
		$(".item-stage > li").removeClass('on');
		$(it).addClass('on');
		if(add){// 添加阶段
			$(".center .stage-info-fn > input").val('');
			stageFn.edit();
		}else{// 切换阶段
			var txt = $(it).children('p').text();
			$(".center .stage-info-fn > input").val(txt);
			stageFn.look();

			data.refreshTaskList();//对接后台-刷新任务列表

			$(".stage-task > li:eq(0)").click();
		}
	}
}


// 阶段名称编辑、展示状态切换
var stageFn = {
	look : function(){
		$(".center .stage-info-fn > .fn").removeClass("edit");
		$(".center .stage-info-fn > input").attr('disabled', true);
	},
	edit : function(){
		$(".center .stage-info-fn > .fn").addClass("edit");
		$(".center .stage-info-fn > input:text").focus(function(){
			this.select();
		});
		$(".center .stage-info-fn > input").attr('disabled', false).focus();
	},
	done : function(){
		var txt = $(".center .stage-info-fn > input").val();
		if(txt){
			this.look();
			if($(".item-stage > li.on").hasClass('add')){// 添加阶段
				var html = '';
				html +=
				'<li onclick="stageTabFn.switch(this)">'+
					'<p>'+ txt +'</p>'+
					'<span>0/0</span>'+
				'</li>';
				$(".item-stage > li.add").before(html);
				$(".item-stage > li.add").prev('li').click();

				data.addStage('name');// 对接后台
			}else{// 编辑阶段
				$(".item-stage > li.on > p").text(txt);

				data.changeStage('id','name',[3,12]);// 对接后台
			}
		}else{
			alert('内容不可为空！');
		}
	},
	rm : function(){
		if(confirm('是否确定？')){
			var rmEvent = $(".item-stage > li.on");
			var prev = $(rmEvent).prev('li');
			$(rmEvent).remove();
			if(prev.length){
				$(prev).click();
			}else{
				$(".item-stage > li:eq(0)").click();
			}
			
			data.rmStage('id');// 对接后台
		}
	}
}



// 任务切换
var taskTabFn = {
	switch : function(it,add){
		if(add){// 添加任务
			$("#item .content > .right input, #item .content > .right textarea").not(
				".task-state input,.file-upload > input,.task-comment input,.task-fast input"
			).val('');
			$("input[name='task-fast'][value='1']").attr('checked',true);
			$(".task-file > .right > .file").remove();
			$(".task-member").not(".master").find(".right > .user-info").remove();
			taskFn.edit();
			var num = $(".stage-task > li.on").index();// 记录切换至添加任务前 .on 的位置
			$(".stage-task > li.add").attr("source-task",num);
		}else{
			taskFn.look();

			data.refreshTaskInfo();//对接后台
		}
		$(".stage-task > li").removeClass('on');
		$(it).addClass('on');
	}
}


// 任务详情编辑、展示状态切换
var taskFn = {
	look : function(cancel){
		$("#item .content > .right").addClass('state-look');
		$("#item .content > .right input, #item .content > .right textarea").not(
			".task-state input,.file-upload > input,.task-comment input"
		).attr('disabled', true);
		var txt = $(".task-info > .task-note > .right > textarea");
		$(".state-look .task-info > .task-note > .right > .txt");

		if(cancel){
			var key = $(".stage-task > li.add").hasClass("on");
			if(key){
				var num = $(".stage-task > li.add").attr("source-task");
				$(".stage-task > li:eq("+ num +")").click();
			}
		}
	},
	edit : function(){
		$("#item .content > .right").removeClass('state-look');
		$("#item .content > .right input, #item .content > .right textarea").not(
			".task-state input,.file-upload > input,.task-comment input"
		).attr('disabled', false);
	},
	done : function(){
		this.look();
		
		if( $(".stage-task > li.add").hasClass('on') ){// 增加任务
			var html = '';
			html +=
			'<li onclick="taskTabFn.switch(this)">'+
	            '<div class="top">'+
	                '<input type="checkbox" name="">'+
	                '<p>国内手机回收业务市场调查</p><em class="fast-2"></em>'+
	                '<i class="no">已过期</i>'+
	            '</div>'+
	            '<div class="bottom">'+
	                '<span>任务截止</span>'+
	                '<p>2019年3月15日 15:45</p>'+
	            '</div>'+
	        '</li>';
	        $(".stage-task > li.add").before(html);
	        $(".stage-task > li.add").prev('li').click();

	        data.addTask();// 对接后台
        }else{// 编辑任务信息
    		data.changeTask();// 对接后台
        }
	},
	rm : function(){
		if(confirm('是否确定？')){
			var rmEvent = $(".stage-task > li.on");
			var prev = $(rmEvent).prev('li');
			$(rmEvent).remove();
			if(prev.length){
				$(prev).click();
			}else{
				$(".stage-task > li:eq(0)").click();
			}
			
			data.rmTask('id');// 对接后台
		}
	}
}



// 任务文件操作相关
var taskFileFn = {
	add : function(link, name, user, time){
		var html = '';
		html +=
		'<div class="file">'+
            '<a href="'+ link +'" class="download" download>'+ name +'</a>'+
            '<span class="rm" onclick="taskFileFn.rm(this)">删除</span>'+
            '<p class="tips">由'+ user +'上传于'+ time +'</p>'+
        '</div>';
        $(".task-file .file-upload.add").before(html);
	},
	rm : function(it){
		$(it).parent().remove();

		data.taskFileRm();// 对接后台
	}
}




// 任务执行人操作
var taskExecutorFn = {
	add : function(it){
		event.stopPropagation();
		$(it).remove();
		addUser.hide();
		var html = '';
		html +=
		'<div class="user-info" onmouseover="userInfo.add(this,\'Content/img/user.png\',\'田峰凝\',\'v\',\'地点\',\'公司\',\'电话\')" onmouseout="userInfo.rm()">'+
            '<img class="photo" src="Content/img/user.png">'+
            '<span class="name">田峰凝</span>'+
            '<div class="fn" onclick="taskExecutorFn.rm(this)">移除</div>'+
        '</div>';
        $(".task-member > .right > .add").before(html);

        data.taskExecutorAdd();// 对接后台
	},
	rm : function(it){
		if(confirm('是否确定？')){
			$(it).parent().remove();
			userInfo.rm();

			data.taskExecutorRm();// 对接后台
		}
		
	}
}





// 任务评论操作相关
var taskCommentFn = {
	add : function(it){
		var txt = $(it).prev("input").val();
		if(!txt){
			return alert("不可为空！");
		}
		$(it).prev("input").val('');
		var html = '';
		html +=
		'<div class="task-comment-card">'+
            '<div class="user-info" onmouseover="userInfo.add(this, \'Content/img/user.png\',\'田峰凝\',\'v\',\'地点\',\'公司\',\'电话\')" onmouseout="userInfo.rm()">'+
                '<img class="photo" src="Content/img/user.png">'+
                '<span class="name">田峰凝</span>'+
            '</div>'+
            '<span class="time">2019年02月25日 19:37</span>'+
            '<span class="rm" onclick="taskCommentFn.rm(this)">删除</span>'+
            '<p>'+ txt +'</p>'+
        '</div>';
        $(".task-comment .send").before(html);

        data.taskCommentAdd();// 对接后台
	},
	rm : function(it){
		$(it).parent().remove();

		data.taskCommentRm();// 对接后台
	}
}




// input绑定回车提交事件
function inputBindEnter(e, it){
	var keyCode = null;
	if(e.which){
		keyCode = e.which;
	}else if(e.keyCode){
		keyCode = e.keyCode;
	}
	if(keyCode == 13) {
		var cue = $(it).attr("input-bind");
		$("[input-bind-send='"+ cue +"']").click();
	}
}



// 鼠标拖动排序
var listSort = {
	start: function(it){
		var beforeNum = $(it).index();
		$(it).siblings().not(".add").on("mousemove",function(){
			var a = $(it).index();
			var b = $(this).index();
			if(a > b){
				$(this).before(it);
			}else{
				$(this).after(it);
			}
			$(it).addClass("list-sort-now");
			$(it).siblings().addClass("list-sort-other");
			$(window).off("mouseup");
			$(window).one("mouseup",function(){
				var change = [beforeNum,b];
				listSort.end(it, change);
			});
		});
		$(window).one("mouseup",function(){
			listSort.end(it);
		});
	},
	end: function(it, change){
		if(change && change[0] != change[1]){
			console.log("对接后台:顺序由" + change[0] + "变更为" + change[1]);
			console.log($(it).parent()[0].className);//用来判断 阶段 or 任务
		}
		$(it).siblings().not(".add").off("mousemove");
		$(it).removeClass("list-sort-now");
		$(it).siblings().removeClass("list-sort-other");
	}
}

$(function(){
	$(".stage-task > li,.item-stage > li").not(".add").on("mousedown",function(){
		listSort.start(this);
	})	

})





