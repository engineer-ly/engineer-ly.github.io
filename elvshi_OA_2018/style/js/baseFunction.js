// 获取可视窗口宽高
function getViewportOffset(){
	if(window.innerWidth){
		return {
			w : window.innerWidth,
			h : window.innerHeight				
		}
	}else{
		if(document.compatMode === "BackCompat"){
			return {
				w : document.body.clientWidth,
				h : document.body.clientHeight
			}
		}else{
			return {
				w : document.documentElement.clientWidth,
				h : document.documentElement.clientHeight
			}
		}
	}
}

// 获取滚动条X，Y轴
function getScrollOffset(){
	if(window.pageXOffset || window.pageXOffset == 0){
		return {
			x : window.pageXOffset,
			y : window.pageYOffset
		}
	}else{
		return {
			x : document.body.scrollTop + document.documentElement.scorllTop,
			y : document.body.scrollLeft + document.documentElement.scorllLeft
		}
	}
}

// 获取元素最终显示样式
function getStyle(elem, prop){
	if(window.getComputedStyle){
		return window.getComputedStyle(elem, null)[prop];
	}else{
		return elem.currentStyle[prop];
	}
}

// 元素绑定事件（this指向自身）
function addEvent(elem, type, handle){
	if(elem.addEventListener){
		elem.addEventListener(type, handle, false);
	}else if(elem.attachEvent){
		elem.attachEvent('on' + type, function(){
			handle.call(elem);
		})
	}else{
		elem['on' + type] = handle;
	}
}

// 取消元素绑定事件
function removeEvent(elem, type, handle){
	if(elem.removeEventListener){
		elem.removeEventListener(type, handle, false);
	}else if(elem.detachEvent){
		elem.detachEvent('on' + 'type', handle);
	}else{
		elem['on' + type] = null;
	}
}

// 取消冒泡事件
function stopBubble(event){
	if(event.stopPropagation){
		event.stopPropagation();
	}else{
		event.cancelBubble = true;
	}
}

// 取消右键菜单显示
function cancelHandler(event){
	if(event.preventDefault){
		event.preventDefault();
	}else{
		event.returnValue = false;
	}
}

