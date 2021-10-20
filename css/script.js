// alert('Welcome Seestudio');
//点击登录弹出表单↓
//检测用户是手机还是PC访问↓
if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
	window.location.href="linkUs.html";
}else{
	window.location.href="index.html";
}
var btn = document.getElementById('btn');
var biaodan = document.getElementById('biaodan');		
btn.onclick = function(){
	biaodan.style.display = 'block';
}
// var my_video = document.getElementById("my-video");
// var btn_mute = document.getElementById('btn-mute');
var type =1;
  function add(){
    if(type == 1){
      type = 0
      document.getElementById('my_video').muted = true
	  document.getElementById('close').style.display = 'block'
	  
    }else{
      type = 1
      document.getElementById('my_video').muted = false
      document.getElementById('close').style.display = 'none'
	  
    }
  }
//鼠标全屏滚动下！！！！！！！！！！！！！！！！！！！！！！
	var oWrap =document.getElementsByClassName("wrap")[0];
		var aPages = document.getElementsByClassName("page");
		for(var i =0 ;i < aPages.length; i++){
			aPages[i].style.height = window.innerHeight+"px";
			aPages[i].style.width = window.innerWidth+"px";
		}
			
			
			
	var index=0;
	
	var Bargo = document.getElementById('bargo');
	
	var text_bar = document.querySelector('.wrap .text-bar');  //获每一屏的动效文字
	
	window.onmousewheel=function(ev){
		console.log(ev.wheelDelta);  //判断鼠标往上还是往下
		ev=ev||window.event;
		if(ev.wheelDelta>0){
			//页面向上滚动
			index<1?index=0:index--;
			oWrap.style.top=-(window.innerHeight)*index+"px";
			oWrap.style.transition="all 1s ease";
			
			text_bar.style.top = "20%";
			// text_bar.style.animation = "1s  ease-in-out";
			text_bar.style.transition ="all .5s ease";
			
		}else if(ev.wheelDelta<0){
			//页面向下滚动
			index>3?index=4:index++;
			oWrap.style.top=-(window.innerHeight)*index+"px";
			oWrap.style.transition="all 1s ease";
			
			Bargo.style.top +=92*index+"px";
			Bargo.style.transition="all 1s ease";
			
			
			text_bar.style.top = "20%";
			// text_bar.style.animation = "1s  ease-in-out";
			text_bar.style.transition ="all .5s ease";
			
		}
	}
	
	var cLbf = document.getElementById('bf');
	
	var sLogan = document.getElementById('slogan');
	function BF(){
		cLbf.style.display = 'none';
		sLogan.style.opacity ='100%';
		sLogan.style.transition="all 1s ease";
		
				var player = document.getElementById("my_video");
				var time = document.getElementById("time");
				if (player.paused) {
					player.play();
				} else {
					player.pause();
				}
				/*
					player.currentTime;//视频播放时间
					player.duration;//视频的总长度
				*/
	}
			
			
			