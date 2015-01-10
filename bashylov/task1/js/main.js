$ (function (){
	accord();
	openClose();
	tabs();

	function accord(){
		var listItem = $(".accordion>li");		
		var submenu = $(".slider");
		var defaultActive = listItem.filter(".active").find(".slider");
		submenu.hide();
		defaultActive.show();

		listItem.click(function(){
			var currentSubMenu = $(this).find(submenu);
			
			if ($(this).hasClass("active")){
				$(this).removeClass("active");
				currentSubMenu.hide("slow");
			} else {
				submenu.hide("slow"); 	// скрываем все подменю
				listItem.removeClass("active"); 	// у всех элементов списка удаляем класс Active 
				$(this).addClass("active"); 	// класс active для той на которую кликнули
				currentSubMenu.show("slow");  // показываем сабменю относяеещся к элементу списка по которому кликнули
			}  
		})

	}

	function openClose(){
		var opener = $(".title")
		var mainBoxes = $(".box");
		var innerBlock = $(".block");
		var defaultOpen = mainBoxes.filter(".open").find(".block")
		innerBlock.hide();
		defaultOpen.show();

		opener.click(function(){
			var currentOpen = $(this).siblings();

			if ($(this).parent().hasClass("box open")){
				$(this).parent().removeClass("open")
				currentOpen.hide("slow");
			} else { 
				$(this).parent().addClass("open")
				currentOpen.show("slow")
			}
			
		})
	}

	function tabs(){
		var allTab = $(".tab-content");
		console.log(allTab)
		var links = $(".tabset a");
		console.log(links)
		var allLi = $(".tabset li");
		console.log(allLi)

		allTab.hide();
		$("#tab1").show()

		links.click(function(){
			var currentLi = $(this).parent()
			var contId = $(this).attr("href");
			console.log(contId)
			if (currentLi.hasClass("active")){
				
			} else {
				allLi.removeClass("active");
				currentLi.addClass("active");
				console.log(allLi);
				allTab.hide();
				$(contId).show()
			}
			return false
		})
		
	}
});