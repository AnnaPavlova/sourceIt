$(function(){
	accordion();
	opening();
	tabsCollection();
});

function accordion(){
	var element = $('.accordion > li');
	var slider = $('.accordion .slider');
	var link = element.children('a');
	slider.hide();
	element.filter('.active').find(slider).show();
	
	link.each(function(){
		$(this).click(function(){
			var currentElement = $(this).parent();
			var currentSlide = $(this).siblings(slider);
			
			if(currentElement.hasClass('active')){
				currentElement.removeClass('active');
				currentSlide.slideUp('slow');
			}else{
				link.next(slider).slideUp('slow');
				link.parent().removeClass('active');
				$(this).next(slider).slideDown('slow');
				$(this).parent().addClass('active');
			}
			return false;
		});
	});
}

function opening(){
	var box = $('.box');
	var block = $('.box .block');
	var openBtn = $('.title > a');
	block.hide();
	box.filter('.open').find(block).show();
	
	openBtn.each(function(){
		$(this).click(function(){
			$(this).parent().parent().toggleClass('open');
			$(this).parent().parent().find('.block').slideToggle('slow');
			return false;
		});
	});
}
function tabsCollection(){
	var tabsText = $('.tab-content');
	var tabLinks = $('.tabset a');
	var activeTab = $('.tabset > li.active > a');
	var activeContent = $(activeTab.attr('href'));
	
	tabLinks.click(function(){
		tabLinks.parent().removeClass('active');
		$(this).parent().addClass('active');
		
		var shownContent = $(this).attr('href');
		tabsText.removeClass('active');
		$(shownContent).addClass('active');
		return false;
	});
	
}