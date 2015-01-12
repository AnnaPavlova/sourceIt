$(function(){
	resize();
});

function resize(){
	var box = $('.box');
	var btn = $('.btn');
	var parentBlock = box.parent();
	var boxWidth = box.width();
	var boxHeight = box.height();
	var coordEnterX = 0;
	var coordEnterY = 0;
	var flag;
	
	var maxWidth = parentBlock.width();
	var maxHeight = $(window).width() - (parentBlock.outerHeight() - parentBlock.height());
	
	btn.mousedown(function(e){
		coordEnterX = parseInt(e.pageX);
		coordEnterY = parseInt(e.pageY);
		flag = true;
	}).mouseup(function(){
		flag = false;
	});
	
	$(document).mousemove(function(e){
		if(flag){
			var difX = parseInt(e.pageX) - coordEnterX;
			var difY = parseInt(e.pageY) - coordEnterY;
			
			$('.box').width(boxWidth + difX > maxWidth? maxWidth : boxWidth + difX);
			$('.box').height(boxHeight + difY > maxHeight? maxHeight : boxHeight + difY);
		}
	}).mouseup(function(){
		flag = false;
		boxWidth = box.width();
		boxHeight = box.height();
	});
}