$(function(){
	resize('.btn', '#wrapper');
	
	function resize(btn, wrapper){
		var container = $(wrapper);
		var btnBlock = container.find(btn);
		var box = container.find('.box');
		var x1, y1, x2, y2, i1, j1, i2, j2;
		var height, width, top, left;
		var flag = false;
	
		btnBlock.on('mousedown', function(ev){
			x1 = parseInt(ev.clientX);
			y1 = parseInt(ev.clientY);
			console.log('x1: ', x1, 'y1: ', y1);
			flag = true;
			top = $(this).position().top;
			left = $(this).position().left;
			boxTop = box.position().top;
			boxLeft = box.position().left;
			height = box.height();
			width = box.width();
			i1 = Math.abs(top - boxTop);
			j1 = Math.abs(left - boxLeft);
		})
		
		btnBlock.on('mousemove', function(ev){
			if(flag){
				x2 = parseInt(ev.clientX);
				y2 = parseInt(ev.clientY);
				$(this).css({'top': top + (y2-y1), 'left': left + (x2-x1)});
				i2 = Math.abs((top + (y2-y1)) - boxTop);
				j2 = Math.abs((left + (x2-x1)) - boxLeft);
				box.height(height + (i2 - i1));
				box.width(width - (j2 - j1));
			}
		})
		
		btnBlock.on('mouseup', function(){
			flag = false;
			$(this).css({'top': top + (y2-y1), 'left': left + (x2-x1)});
			box.height(height + (i2 - i1));
			box.width(width - (j2 - j1));
		})
	}
})