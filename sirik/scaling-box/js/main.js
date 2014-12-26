$(function(){
	function scalingBox(){
		var box = $(".box");
		var btn = $(".btn");
		var wrap = $("#wrapper");
		var body = $("body");
		console.log(body);
		var flag = false;
		var x1, y1, x2, y2;
		
	$(body).on('mousedown', function(ev){
		x1 = parseInt(ev.clientX);
		y1 = parseInt(ev.clientY);
		console.log(y1, x1);
		flag = true;
	});
	
	$(body).on('mouseup', function(){
		flag = false;
	});
	
	$(btn).on('mousemove', function(ev){
		if(flag){
			x2 = parseInt(ev.clientX);
			y2 = parseInt(ev.clientY);
			var height = $(box).height() + (y2-y1);
			var width = $(box).width() + (x2-x1);
			if(width < wrap.width()) {
				$(box).width(width).height(height);
			}
	}
	});
	
	
}
	scalingBox();
});






