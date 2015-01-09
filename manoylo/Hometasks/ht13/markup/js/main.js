$(document).ready(function(){
	function equalHeight(col){
		var target = $(col),
		maxHeight = 0;

		target.each(function(){
			var thisHeight = $(this).height();
			if(thisHeight > maxHeight){
				maxHeight = thisHeight;
			}
		});
		
		target.height(maxHeight);
	}
	
	function listItemColor(){
		$(".list li:first-child").css({color: "red"});
	}
	
	function clearForm(){
		$(".btn-clean").on("click", function(e){
			e.preventDefault();
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
		equalHeight(".container .box");
		equalHeight(".container .block");
		listItemColor();
		clearForm();
		selectListItem();
		listNumbers();
	}
	
	initFunc();
});