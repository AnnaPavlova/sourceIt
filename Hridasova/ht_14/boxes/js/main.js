$(function(){
	moveBlock('.box', '#wrapper');
	
	function moveBlock(blockClass, containerId){		
		var container = $(containerId);
		var block = container.find(blockClass);
		var x1, y1, x2, y2;
		var left, top;
		var flag = false;
		var width = container.width();
		var height = container.height();
		console.log('width: ', width, 'height: ', height);
		
		block.on('mousedown', function(ev){
			x1 = parseInt(ev.clientX);
			y1 = parseInt(ev.clientY);
			flag = true;
			top = $(this).position().top;
			left = $(this).position().left;
			console.log('top: ', top,'left: ', left)
		})
		
		block.on('mousemove', function(ev){
			if(flag){
				x2 = parseInt(ev.clientX);
				y2 = parseInt(ev.clientY);
				$(this).css({'top': top + (y2-y1), 'left': left + (x2-x1)});
			}	
		})
		
		block.on('mouseup', function(){
			flag = false;
			$(this).css({'top': top + (y2-y1), 'left': left + (x2-x1)});
		})
	}
})






