$(function (){
	var elements = $(".container .box, .container .block");
	for (var i=0; i<elements.length; i++){
		var height = elements.eq(i).height();
		var nextHeight = elements.eq(i+1).height()
		if (height < nextHeight){
			elements.eq(i).height(nextHeight)
		}else{
			elements.eq(i+1).height(height);
	}}
	$(".list li:first-child").css("color","red");
	$(".btn-clean").click(function(){
		$("form input[type='text'], input[type='password']").val("");
	});
	$(".list li:odd").each(function (index) {
		var currentItem = $(this).index()+1;
		$(this).prepend(currentItem + " ");

	});
	$(".list li").click(function(){
		$(".list li").removeClass("active");
		$(this).addClass("active");
	});
});