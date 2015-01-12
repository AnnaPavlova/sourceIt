$(function(){
	moveBlock('.box', '#wrapper');
	
	function moveBlock(blockClass, containerId){		
		var container = $(containerId);
		var block = container.find(blockClass);
		var x1, y1, x2, y2;
		var left, top;
		var flag = false;	
		var wrap = $("#wrapper");
		var top = $(block).position().top;
		var left = $(block).position().left;
		
		block.on('mousedown', function(ev){
			x1 = parseInt(ev.clientX);
			y1 = parseInt(ev.clientY);
			flag = true;		
		})
		
		block.on('mousemove', function(ev){
			if(flag){
				x2 = parseInt(ev.clientX);
				y2 = parseInt(ev.clientY);
				top += (y2-y1);
				left += (x2-x1);
				$(this).css({'top': top, 'left': left});
				if(left > ($(wrap).width() - $(block).width())){
					flat = false;
					left = ($(wrap).width() - $(block).width());
				}else if(top > ($(wrap).height() - $(block).height())){
					flag = false;
					top = ($(wrap).height() - $(block).height())
				}
			}	
		})
		
		$("body").on('mouseup', function(){
			flag = false;
		})
		
	}
})






