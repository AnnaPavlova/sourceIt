$(function(){
	moveBlock();
});
	function moveBlock(){
		var box = $(".box");
		var posX = box.position().left;
		var posY = box.position().top;
		var flag = false;
		var coordEnterX, coordEnterY;
		
		var maxLeft = box.parent().width() - box.width();
		var maxTop = box.parent().height() - box.height();
		
		box.mousedown(function(ev){
			coordEnterX = parseInt(ev.pageX);
			coordEnterY = parseInt(ev.pageY);
			flag = true;
		}).mouseup(function(){
			flag = false;
		});
		
		$(document).mousemove(function(e){
		if(flag){
			var difX = parseInt(e.pageX) - coordEnterX;
			var difY = parseInt(e.pageY) - coordEnterY;
			
			if(posX + difX > maxLeft){
				box.css({'left': maxLeft})
			}else{
				if(posX + difX < 0){
					box.css({'left': 0})
				}else{
					box.css({'left': posX + difX})
				}
			}
			if(posY + difY > maxTop){
				box.css({'top': maxTop})
			}else{
				if(posY + difY < 0){
					box.css({'top': 0})
				}else{
					box.css({'top': posY + difY})
				}
			}
		}
		}).mouseup(function(){
			flag = false;
			posX = box.position().left;
			posY = box.position().top;
		});
	}







