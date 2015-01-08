$(function(){
	setWidth($('#nav'));
});

function setWidth(ul){
	var ulWidth = ul.width();
	var element = ul.find('li > a');
	var liLength = element.length;
	var liOuterWidth = element.parent().outerWidth(true);
	var liWidth = element.parent().width();
	var itemSpace = (liOuterWidth - liWidth) * liLength;
	var itemWidth, itemAdd;
	
	itemWidth = Math.floor((ulWidth - itemSpace)/liLength);
	itemAdd = Math.floor((ulWidth - itemSpace)%liLength);
	element.width(itemWidth);
	element.last().width(itemWidth + itemAdd);
}