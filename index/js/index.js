var page = document.getElementById("page");
function randomNum(){
	return parseInt(Math.random() * 10) + '';
}
setInterval(function(){
	page.style.backgroundColor = "#" + randomNum() + randomNum() + randomNum() + "d6f";
},4000)
