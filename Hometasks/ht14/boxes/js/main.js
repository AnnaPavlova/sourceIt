$(function(){
	moveBlock('.box', '#wrapper');
	
	function moveBlock(blockClass, containerId){		
		var container = $(containerId);
		var block = container.find(blockClass);
		var x1, y1, x2, y2;
		var left, top;
		var flag = false;
		
		block.on('mousedown', function(ev){
			x1 = parseInt(ev.clientX);
			y1 = parseInt(ev.clientY);
			flag = true;
			console.log('x1: ', x1, 'y1: ', y1);
			$(this).css({'top': (y2-y1), 'left': (x2-x1)});	
		})
		
		block.on('mousemove', function(ev){
			if(flag){
				x2 = parseInt(ev.clientX);
				y2 = parseInt(ev.clientY);
				console.log('x2: ', x2, 'y2: ', y2);
				top = y2-y1;
				left = x2-x1;
				$(this).css({'top': (y2-y1), 'left': (x2-x1)});				
			}	
		})
		
		block.on('mouseup', function(){
			flag = false;
			$(this).css({'top': (y2-y1), 'left': (x2-x1)});
			
		})
		
	}
})






