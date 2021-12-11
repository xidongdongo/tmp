//获取url中的参数
function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg); //匹配目标参数
	if(r != null) return unescape(r[2]);
	return null; //返回参数值
}

function getColor(){
	var c=localStorage.getItem("color");
	if(c!=null){
		return c;
	}else{
		return "#888";
	}
}

function setColor(color){
	alert("颜色设置成功！");
	localStorage.setItem("color",color);
}