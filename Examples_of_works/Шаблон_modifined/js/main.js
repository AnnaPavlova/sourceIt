jQuery(document).ready(function(){
	tabs('.tabs-buttons-links', '.tabs-item-list li', '.tabs-buttons');
	$('.bxslider').bxSlider();
	
	function tabs(links, content, li){
		var links = $ (links),
			content = $(content)
		$(links).on('click', function(e){
			e.preventDefault();
			var jthis = $(this);
			var item = jthis.closest(li);
			var index = item.data('class');
			content.filter('.tabs-content_' + index)
				.add(item)
				.addClass('active')
				.siblings()
				.removeClass('active');
		 })
	}	
});