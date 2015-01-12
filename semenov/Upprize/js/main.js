$(function (){
	setActive('#nav a');
	setActive('.tabset li');
	autoScaling('#nav a', '#nav');
	$("#tabs").tabs();
	slideGallery($('#gallery'), $('.winner'), 48, '#l-arrow', '#r-arrow');
	
	function setActive(list) {	
		$(list).each(function(e){
			$(this).click(function(index){		
				$(list).removeClass("active");
				$(this).addClass("active");
			});	
		})
	}	
	
	function autoScaling(navigation, container) {
		var containerWidth = $(container).width();
		var textWidth = getTextWidth(navigation);
		var paddings = (containerWidth - textWidth) / $(navigation).length / 2;
		
		$(navigation).css('padding-left', paddings).css('padding-right', paddings);
		
		
		function getTextWidth(list) {			
			var result = 0;
			
			$(list).each(function(){
				result += $(this).width();
			})
			return result;
		}	
	}
	
	function slideGallery(container, list, margin, prev, next) {
		var step = margin + $($(list)[0]).width();
		var elNumber = Math.round($(container).width() / step);
		var position = 0;
		
		setPosition();	
		
		$(prev).on('click', function(e){
			e.preventDefault();
			
			if (position < 0) {			
				position += step;			
				setPosition();
			}
		})
				
		$(next).on('click', function(e){
			e.preventDefault();
			if (position > -(step*(list.length-elNumber))) {			
				position -= step;			
				setPosition();
			}			
		})	
		
		function setPosition() {				
			$(list).each(function(index){
				$(this).css('left', (index * step + position) + 'px');
			})			
		}
		
	}
})
