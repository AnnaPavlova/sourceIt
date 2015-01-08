$(function(){
	accordion();
	opening();
	tabsCollection();
});

function accordion(){
	var slider = $('.slider');
	var firstEl = $('.accordion > li > a');
	slider.hide();
	slider.eq(1).show();
	
	firstEl.each(function(){
		$(this).click(function(){
			firstEl.next('.slider').slideUp('slow');
			firstEl.parent().removeClass('active');
			$(this).next('.slider').slideToggle('slow');
			$(this).parent().toggleClass('active');
			return false;
		});
	});
}

function opening(){
	var block = $('.box .block');
	var openBtn = $('.title > a');
	block.hide();
	block.eq(0).show();
	
	openBtn.each(function(){
		$(this).click(function(){
			$(this).parent().parent().toggleClass('open');
			$(this).parent().parent().find('.block').slideToggle('slow');
			return false;
		});
	});
}
function tabsCollection(){
	var tabsText = $('[id^="tab"]');
	var tabLinks = $('[href^="#tab"]');
	var href;
	
	tabLinks.click(function(i){
		tabLinks.parent().removeClass('active');
		$(this).parent().addClass('active');
		href = $(this).attr('href');
		
		switch(href){
			case '#tab1':
				tabsText.removeClass('active');
				$('#tab1').addClass('active');
				return false;
				break;
			case '#tab2':
				tabsText.removeClass('active');
				$('#tab2').addClass('active');
				return false;
				break;
			case '#tab3':
				tabsText.removeClass('active');
				$('#tab3').addClass('active');
				return false;
				break;
			default: $('#tab1').addClass('active');
		}
	});
}