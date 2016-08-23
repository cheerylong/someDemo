//获取元素对象
function g(id){return document.getElementById(id);}
//自动居中浮层
function autoCenter(el){
	//实际可视区域宽高
	var bodyW = document.documentElement.clientWidth;
	var bodyH = document.documentElement.clientHeight;
	//元素宽高
	var elW = el.offsetWidth;
	var elH = el.offsetHeight;

	el.style.left = (bodyW-elW)/2 + 'px';
	el.style.top = (bodyH-elH)/2 + 'px';
}
//全屏代码
function fillToBody(el){
	el.style.width = document.documentElement.clientWidth + 'px';
	el.style.height = document.documentElement.clientHeight + 'px';
}
//三个鼠标事件 鼠标按下去 移动 离开
//按下去
var mouseOffsetX = 0;
var mouseOffSetY = 0;
var isDrag = false;
g('dialogTitle').addEventListener('mousedown',function(){
	var e = e||window.event;
	mouseOffSetX = e.pageX - g('dialog').offsetLeft;
	mouseOffSetY = e.pageY - g('dialog').offsetTop;
	isDrag = true;
})
//移动 检测是否为可拖动的状态
document.onmousemove = function(e){
	var e = e||window.event;
	//鼠标当前的位置
	var mousex = e.pageX;
	var mousey = e.pageY;
	//浮层元素的新位置
	var movex = 0;
	var movey = 0;
	if(isDrag === true){
		movex = mousex - mouseOffSetX;
		movey = mousey - mouseOffSetY;
		//登录浮层范围限定
		//                movex>0同时movex<(可视区域-元素本身宽度)
		//                movey>0同时movey<(可视区域-元素本身高度)
		var limitX = document.documentElement.clientWidth - g('dialog').offsetWidth;
		var limitY = document.documentElement.clientHeight - g('dialog').offsetHeight;
		// if(movex<0){
		// 	g('dialog').style.left = 0 + 'px';
		// 	return;
		// }
		// else if(movex>limitX){
		// 	//alert(1);
		// 	g('dialog').style.left = limitX + 'px';
		// 	return;
		// }
		movex = Math.min(limitX,Math.max(0,movex));
		movey = Math.min(limitY,Math.max(0,movey));
		//拖拽后更新登录浮层位置
		g('dialog').style.left = movex + 'px';
		g('dialog').style.top = movey + 'px';
	}

}

//松开
document.onmouseup = function(){
	isDrag = false;
}
//展示登录浮层和遮罩
function showDialog(){
	g('dialog').style.display = "block";
	g('mask').style.display = "block";
	autoCenter(g('dialog'));
	fillToBody(g('mask'));
}
//隐藏遮罩和登录浮层
function hiddenDialog(){
	g('dialog').style.display = "none";
	g('mask').style.display = "none";
}
//窗口大小改变时的处理
window.onresize = function(){
	autoCenter(g('dialog'));
	fillToBody(g('mask'));
}

//拖拽特效分析
// 1.ui界面分析 dialog>dialog-title+dialog-content + mask
// 2.拖拽原理：三个事件的执行
//   >>1.mousedown鼠标按下(识别鼠标是否落在可拖动区域，改变是否拖动标识)
//   >>2.onmousemove鼠标移动(计算拖拽后的left和top更新位置，范围限定)
//   >>3.onmouseup鼠标放开(不可拖动)
// 3.前端界面开发 div+css
//   >>onselectstart = return false不可选中；
//   >>a标签更适合做伪类a标签href="javascript:dosomething";
// 4.拖拽功能实现
//   >>1.g(id)用来获取元素
//   >>2.autoCenter()用来使浮动元素自动居中
//   >>3.fillToBody()用来使遮罩全屏显示
//   >>4.三个鼠标事件
//     >>addEventListener('',function(){
//     	// 侦听事件
//     })
//     >>mousedown鼠标按下事件
//     >>onmousemove鼠标移动
//     >>onmouseup鼠标放开
//   >>5.showDialog(),hiddenDialog()
//   >>6.window.onresize()窗口大小改变
   // 5.重点属性
   // >>1.窗口显示区域的宽高
   //   document.documentElement.clientWidth;
   //   document.documentElement.clientHeight;
   // >>2.当前事件发生时鼠标的宽和高
   //   event.pageX,event.pageY;
   // >>3.获得元素的实际宽和高
   //   element.offsetWidth,element.offsetHeight