$(function(){
	setWidth($('#nav'));
	
	function setWidth(ul){
		var ulWidth = ul.width();
		var element = ul.find('li');
		var liLength = element.length;
		var liWidth = 0;
		var padding, li;
		console.log('element: ', element);
		
		element.each(function(i){
			liWidth += $(this).outerWidth();
			console.log('liWidth1: ', liWidth);
		});
		
		if(liWidth < ulWidth){
			padding = Math.floor((ulWidth - liWidth) / liLength);
			element.each(function(i){
			li = element.eq(i).outerWidth();
			console.log('li: ', li);
			$(this).outerWidth(li + padding);
			console.log('padding: ', padding);
			console.log('all width: ', $(this).outerWidth());
			});
		}
		
	}
})