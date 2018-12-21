// 实例化Vue对象
new Vue({
	el : "#vue_shell",
	data : {
		age : 30,
		x : 0,
		y : 0
	},
	methods : {
		plus : function( num ){
			this.age += num;
		},
		reduce : function( num){
			this.age -= num;
		},
		updateXY : function( event ){
			this.x = event.offsetX;
			this.y = event.offsetY;
		}

	}

});


// el: element 需要获取的元素,一定是html中的更容器元素
// data: 用于数据的存储
// methods: 用于储存各种方法