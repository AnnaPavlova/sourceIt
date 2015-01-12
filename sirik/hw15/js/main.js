$(function(){
	gallery($("p img"), $("li img"));
	
	function gallery(leargeimg, smallimg){
		$(smallimg).on("click", function(){
			$(".master").empty();
			$(leargeimg).attr({src : $(this).attr('src')})
			$(".master").append($(this).attr("title"));
	});
	
};
});