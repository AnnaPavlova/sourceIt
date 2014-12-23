$(document).ready(function(){
	function equalHeight(parent, target){
		var parent = $(parent),
		target = $(target),
		maxHeight = 0;

		target.each(function(){
			if($(this).height() > maxHeight){
				maxHeight = $(this).height();
				console.log(maxHeight);
			}
		});
	}
	
	function listItemColor(){
		$(".list li:first-child").css({color: "red"});
	}
	
	function clearForm(){
		$(".btn-clean").on("click", function(){
			$("#form input[type='text']").val("");
			$("#form input[type='password']").val("");
		});
	}
	
	function listNumbers(){
		var list = $(".list li:odd"),
			itemNumber;
			
		list.each(function(){
			itemNumber = $(this).index() + 1;
			$(this).prepend(itemNumber + " ");
		});
	}
	
	function selectListItem(){
		$(".list li").on("click", function(){
			$(this).parent().find("li").removeClass("active");
			$(this).addClass("active");
		})
	}

	function initFunc(){
		equalHeight(".container", ".box");
		listItemColor();
		clearForm();
		selectListItem();
		listNumbers();
	}
	
	initFunc();
});