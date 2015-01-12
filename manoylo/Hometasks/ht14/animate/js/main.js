$(function(){
	$("button").click(function(){
		var div = $("div");
		startAnimation();
		
		function startAnimation(){
			div.animate({height: 300}, "slow");
			div.animate({width: 300}, "slow");
			div.css('background-color', "blue");
			div.animate({height: 100}, "slow");
			div.animate({width: 100}, "slow", startAnimation);
		}
	});
})