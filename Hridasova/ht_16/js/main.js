$(function(){
	moveGallery();
});

function moveGallery(){
	var galleryBlock = $('.gallery-block');
	var galleryList = $('.gallery-holder > .gallery');
	galleryBlock.append('<div class="control"><ul></ul></div>');
	var navList = $('.control > ul');
	var listItem = galleryList.find('li');
	var navItemIndex, navItem, listItemIndex;
	
	listItem.each(function(){
		navList.prepend('<li><a></a></li>');
		navItem = navList.find('li');
		/*attr для отображения курсора при наведении. чтобы не вносить изменения в стили*/
		navItem.find('a').attr('href', '#');
		navItem.each(function(){
			navItemIndex = $(this).index();
			$(this).find('a').text(navItemIndex + 1);
		});
		
	});
	
	function slide(obj){
		var step = listItem.width();
		galleryList.animate({marginLeft: '-'+step*obj}, 1000);
	}
	
	navItem.find('a').click(function(){
		var obj = $(this).parent().index();
		slide(obj);
		return false;
	});
}