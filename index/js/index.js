var page = document.getElementById("page");
function randomNum(){
	return parseInt(Math.random() * 10) + '';
}
setInterval(function(){
	page.style.backgroundColor = "#" + randomNum() + randomNum() + "2e3c";
},4000)