//1-st task

var boxes = $(".box");
var blocks = $(".block");

function getBiggestHeight(list) {
	var maxBlock = $(list[0]).height(),
	i, max = list.length;
	for (i = 0; i < max; i++) {
		if ($(list[i+1]).height() > maxBlock) {
			maxBlock = $(list[i+1]).height();
		}
	}
	return maxBlock;
}

$(".box").css("height", getBiggestHeight(boxes) + "px");
$(".block").css("height", getBiggestHeight(blocks) + "px");

//2-nd task

$(".list li:first-child").css("color", "#FF0000");

//3-d task

$(".btn-clean").click(function(e){
	e.preventDefault();
	$("#form")[0].reset();
});

// 4-th task

$("ul").each(function(){
	$(this).children("li:odd").each(function() {
		var index = $(this).index();		
		$(this).prepend(index + 1 + " "); 
	});
});

// 5-th task

$("ul").each(function(){
	var list = $(this).children(),
	i, max = list.length;
	$(this).children().click(function(){
		$(list).removeClass("active");
		$(this).addClass("active");
	});
});