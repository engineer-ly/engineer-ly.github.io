

var shell = document.getElementById('shell'),
	scoreBox = document.getElementById('game-score');

var snakeMove;
var level = 1;
function levelChange(){
	if(level < 1){
		level = 1;
	}
	document.getElementById('level-num').innerText = level;
}

init();
function init(){
	// 地图
	var shellW = window.innerWidth * 0.8,
		shellH = window.innerHeight;
	this.mapDiv = shell;
	this.mapDiv.style.width = Math.floor((shellW / 20)) * 20 + 'px';
	this.mapDiv.style.height = Math.floor((shellH / 20)) * 20 + 'px';
	this.mapW = parseInt(getComputedStyle(shell).width);
	this.mapH = parseInt(getComputedStyle(shell).height);

	// 操作
	document.getElementById('start').style.display = 'block';
	document.getElementById('pause').style.display = 'none';
	
	// 食物
	this.foodX = 0;
	this.foodY = 0;
	// 蛇
	this.snakeBody = [[3,1],[2,1],[1,1]];
	// 生成蛇
	snake();
	// 方向
	this.direct = 'right';
	this.left = false;
	this.right = false;
	this.up = true;
	this.down = true;

	// 游戏属性
	this.score = 0;

}
function startGame(){
	// 生成食物
	removeClass('food');
	food();

	snakeMove = setInterval(function(){
		move();
	},200 / level);
	bindEvent();

	document.getElementById('start').style.display = 'none';
	document.getElementById('pause').style.display = 'block';
	document.getElementById('level-fn').style.display = 'none';
}
function pauseGame(){
	alert('游戏已暂停，点击确定继续')
}
function gameOver(){
	alert('游戏结束 ' + '得分：' + this.score)
	clearInterval(snakeMove);
	removeClass('food');
	removeClass('snake');
	document.getElementById('level-fn').style.display = 'block';
	init();
	scoreBox.innerText = this.score;
}

function food(){
	var food = document.createElement('div');
	this.foodX = Math.floor( Math.random() * Math.floor((this.mapW / 20)) );
	this.foodY = Math.floor( Math.random() * Math.floor((this.mapH / 20)) );

	food.style.left = this.foodX * 20 + "px";
	food.style.top = this.foodY * 20 + "px";
	this.mapDiv.appendChild(food).setAttribute('class', 'food');
}
function snake(){
	for (var i = 0; i < this.snakeBody.length; i ++) {
		var snake = document.createElement('div');
		snake.style.left = this.snakeBody[i][0] * 20 + 'px';
		snake.style.top = this.snakeBody[i][1] * 20 + 'px';
		if(i == 0){
			this.mapDiv.appendChild(snake).setAttribute('class', 'snake head');	
		}else{
			this.mapDiv.appendChild(snake).setAttribute('class', 'snake');	
		}
		
	}
}
function move(){
	for (var i = this.snakeBody.length - 1; i > 0; i --) {
		this.snakeBody[i][0] = this.snakeBody[i - 1][0];
		this.snakeBody[i][1] = this.snakeBody[i - 1][1];
	}
	switch(this.direct){
		case 'right':
			this.snakeBody[0][0] += 1;
			this.left = false;
			this.right = false;
			this.up = true;
			this.down = true;
			break;
		case 'left':
			this.snakeBody[0][0] -= 1;
			this.left = false;
			this.right = false;
			this.up = true;
			this.down = true;
			break;
		case 'up':
			this.snakeBody[0][1] -= 1;
			this.left = true;
			this.right = true;
			this.up = false;
			this.down = false;
			break;
		case 'down':
			this.snakeBody[0][1] += 1;
			this.left = true;
			this.right = true;
			this.up = false;
			this.down = false;
			break;
		default: break;
	}
	removeClass('snake');
	snake();
	if(this.snakeBody[0][0] == this.foodX && this.snakeBody[0][1] == this.foodY){
		var arr = [];
		var snakeBodyEnd = this.snakeBody[this.snakeBody.length - 1];
		arr[0] = snakeBodyEnd[0];
		arr[1] = snakeBodyEnd[1];
		this.snakeBody.push(arr);
		this.score += level;
		scoreBox.innerText = this.score;
		removeClass('food');
		food();
	}
	var snakeHX = this.snakeBody[0][0],
		snakeHY = this.snakeBody[0][1];
	if(snakeHX < 0 || snakeHY < 0 || snakeHX >= mapW / 20 || snakeHY >= mapH / 20 ){
		gameOver();
	}
	for(var i = 1; i < this.snakeBody.length; i ++){
		if(snakeHX == this.snakeBody[i][0] && snakeHY == this.snakeBody[i][1]){
			gameOver();
		}
	}
	
}

function removeClass(className){
	var ele = document.getElementsByClassName(className);
	while (ele.length > 0) { 
		ele[0].remove();
	} 
}

function setDerict(code){
	switch(code){
		case 37:
		case 65:
		if(this.left){
			this.direct = 'left';
			
		}
		break;
		case 38:
		case 87:
		if(this.up){
			this.direct = 'up';
			
		}
		break;
		case 39:
		case 68:
		if(this.right){
			this.direct = 'right';
			
		}
		break;
		case 40:
		case 83:
		if(this.down){
			this.direct = 'down';
			
		}
		break;
		default:break;
	}
}

function bindEvent(){
	document.onkeydown = function(e){
		var code = e.keyCode;
		setDerict(code);
	}
}




