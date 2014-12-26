$(function(){
	setWidth($('#nav'));
	
	function setWidth(ul){
		var ulWidth = ul.width();
		var element = ul.find('li');
		var liLength = element.length;
		var liWidth = 0;
		var padding, li;
		
		element.each(function(i){
			liWidth += $(this).outerWidth();
		});
		
		if(liWidth < ulWidth){
			padding = Math.floor((ulWidth - liWidth) / liLength);
			element.each(function(i){
			li = element.eq(i).outerWidth();
			$(this).outerWidth(li + padding);
			});
		}
		
	}
})