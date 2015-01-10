$(document).ready(function(){
	   function accordion(){
		var clickLink = $(".accordion li").has(".slider").find("a:first"),
			parent = $(".accordion");
			
			parent.find(".slider").hide();
			parent.find("li:first").addClass("active");
			parent.find(".slider:first").show();
			
		clickLink.click("click", function(e){
			e.preventDefault();
		
			var thisLi = $(this).parent("li");
			
			if(thisLi.hasClass("active")){
				thisLi.removeClass("active");
				thisLi.find(".slider:first").slideUp();
			}
			
			else{
				$(this).parents(parent).find(".slider").slideUp();
				parent.find("li").removeClass("active");
				thisLi.addClass("active");
				thisLi.find(".slider:first").slideToggle();
			}
		});
	}
	
	function openClose(){
		var boxContent = $(".box .block"),
			clickLink = $(".box .title a");
			
			if(boxContent.length){
				boxContent.parent(".box").addClass("open");
			}

			clickLink.on("click", function(e){
				e.preventDefault();
				var thisParent = $(this).parents(".box");
				
				thisParent.toggleClass("open");
				thisParent.find(".block").slideToggle();
			});
	}
	
	function tabs(){
		var tabItem = $(".tabset li a");
			tabContent = $(".tab-content");
			tabContent.hide();
			tabContent.first().show();
		
		tabItem.on("click", function(e){
			e.preventDefault();
		
			var attr = $(this).attr("href"),
				tabContentId = tabContent.attr("id"); 
				
				$(this).parents(".tabset").find("li").removeClass("active");
				$(this).parent().addClass("active");
				tabContent.hide();
				$(attr).show();
		});
	}
	
	function init(){
		accordion();
		openClose();
		tabs();
	}
	
	init();
});