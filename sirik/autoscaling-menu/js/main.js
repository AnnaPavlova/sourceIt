$(function(){
	function widthMenu(){
		var widthWrap = $("#wrapper").width();
		var outerWidth =$("#wrapper").outerWidth();
		var padding = outerWidth - widthWrap;
		var li = $("#nav").find("li");
		var length = $(li).length;
		var liWidth = (widthWrap-padding) / length;
		
		$(li).width(liWidth);
		$(li).find("a").css({'width' : '100%'});
		
	};
	widthMenu()
})






