$(function(){
	autoScaling('#nav a', '#wrapper', '#nav li');
	
	function autoScaling(navigation, container, borderedBlock) {
		var containerWidth = $(container).width();
		var textWidth = getTextWidth(navigation);
		var borders = getBordersWidth(borderedBlock);
		var paddings = (containerWidth - textWidth - borders) / $(navigation).length / 2;
		
		$(navigation).css('padding-left', paddings).css('padding-right', paddings);
		
		
		function getTextWidth(list) {			
			var result = 0;
			
			$(list).each(function(){
				result += $(this).width();
			})
			return result;
		}	

		function getBordersWidth(list) {			
			var result = 0;
			
			$(list).each(function(){
				result += $(this).outerWidth() - $(this).innerWidth();
			})		
			return result;
		}
	}
})
