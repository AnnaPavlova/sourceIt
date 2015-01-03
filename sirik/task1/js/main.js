$(function(){
	accordion($(".accordion"));
	openclose($(".title"), $(".block"));
	tabs($(".tabset li a"), $(".tab-content"));
	
	function accordion(list){
		var ul = $(list).find("ul");
		var a = $(list).children("li").children("a");
		var li = $(list).children("li");
		
		$(a).on("click", function(ev){
			var clickedLi = $(this).parent("li");
			$(li).removeClass("active");
			$(clickedLi).addClass("active");
			$("li").each(function (i) {
				if($(this).attr('class') == "active"){
					$(this).find("ul").slideDown("slow");
				}else{
					$(this).find("ul").slideUp("slow");
				}
			})
		});
	}
	
	function openclose(btn, content){
		console.log(btn, content)
		$(btn).on("click", function(){
			$(this).next(content).slideToggle("slow")
		});
	};
	
	function tabs(tab , content){
		$(tab).on("click", function(ev){
		$(tab).removeClass("active");
		$(this).toggleClass("active");
		$(tab).each (function (i) {
			if($(this).attr('class') == "active"){
				var crnt = $(this).attr("href");
				console.log("crnt 1 - ", crnt);
			} 
			$(content).each(function (i) {
				var crnt2 = "#" + $(this).attr("id")
				console.log("crnt 2 - " , crnt2);
				if(crnt == crnt2){
					$(crnt2).css("display", 'block')
					return false;
				}else{
				$(crnt2).css("display", 'none');
			}
			})	
		});
	});	
	};
});	
