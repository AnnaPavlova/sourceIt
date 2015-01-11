$(function(){
	accordion('#accordion');
	openClose('.box');
	tabSet('#tabs');
});
	
function accordion(ul) {
	var list = $(ul).children();
	$(list).each(function(){
		$($(this).children('.toggle')[0]).on('click', function(e){
			e.preventDefault();
			$(this).siblings('.slider').slideToggle("slow");

		});		
	})	
}

function openClose(box) {
	var boxes = $(box);
	$(boxes).each(function(){
		$($(this).children('.title')[0]).on('click', function(e){
			e.preventDefault();
			$(this).siblings('.block').toggle("slow");

		});		
	})	
}

function tabSet(tabs) {
	var tabSet = $(tabs).find('.tabset a');		
	var content = $(tabs).find('.tab-content');
	
	setActive(tabSet);
	setTabContent(tabSet, content);
	
	function setTabContent(tabNav, tabContent){
		$(tabNav).each(function(){
			$(tabContent).hide();
			$(this).click(function(e){
				e.preventDefault();
				$(tabContent).css('display', 'none');
				$($(this).attr('href')).show();
			});
		});		
	}	
}
	
function setActive(list) {	
		$(list).each(function(){
			$(this).click(function(){
				$(list).removeClass("active");
				$(this).addClass("active");
			});
		});
	}














