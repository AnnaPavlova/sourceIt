$(function(){
	moveBlock('.box', '#wrapper');
	
	function moveBlock(blockClass, containerId){		
		var container = $(containerId);
		var block = container.find(blockClass);
		var	parentWidth = $(containerId).width();
		var	parentHeight = $(containerId).height();
		var	selfWidth = block.width();
		var	selfHeight = block.width();
		var x1, y1, x2, y2;
		var left, top;
		var startTop, startLeft;
		var position;
		var flag = false;
		
		block.on('mousedown', function(ev){
			position = $(this).position();
			startTop = position.top;
			startLeft = position.left;
			x1 = parseInt(ev.clientX);
			y1 = parseInt(ev.clientY);
			flag = true;
			$(this).css({'top': top, 'left': left});
		})
		
		block.on('mousemove', function(ev){
			if(flag){
				x2 = parseInt(ev.clientX);
				y2 = parseInt(ev.clientY);
				
				left = startLeft + (x2-x1);
				top = startTop + (y2-y1);
			
				$(this).css({'top': top, 'left': left});				
			}
		})
		
		block.on('mouseup', function(){
			flag = false;
		})
	}
})






