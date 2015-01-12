$(function(){
	moveBlock('.btn', '.box', '#wrapper');
	
	function moveBlock(btn, blockClass, containerId){		
		var btn = $(btn);
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
		var width;
		var height;
		var flag = false;
		var parent;
		
		btn.on('mousedown', function(ev){
			flag = true;
		
			x1 = parseInt(ev.clientX);
			y1 = parseInt(ev.clientY);
			
			console.log('x1 '+x1);
			$(this).parent(block).css({'width': width, 'height':height});
		})
		
		block.on('mousemove', function(ev){
			x2 = parseInt(ev.clientX);
			y2 = parseInt(ev.clientY);
			console.log('x2 '+x2);
			
			width = selfWidth + (x2-x1);
			height = selfHeight + (y2-y1);
			
			$(this).css({'width': width, 'height':height});
		})
		
		btn.on('mouseup', function(){
			flag = false;
		})
	}
})






