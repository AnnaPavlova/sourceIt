$(function(){
	init();
});

function init(){
	var prev = $('.prev');
	var next = $('.next');
	var element = $('.gallery > ul > li');
	var elWidth = element.eq(0).width();
	var firstElement = element.eq(0).position().left;
	var lastElement = Math.floor(element.last().position().left);
	
	
	firstElement > 20 ? console.log('yes!') : console.log('no!');
	firstElement > lastElement ? console.log('yes, first the biggest!') : console.log('no, last the biggest!');
	if(lastElement == 2400){
	console.log('we see the last one');
	}else{console.log('we see the first');}	
	console.log('lastElement', lastElement);
	console.log('prev', prev);
	console.log('firstElement',firstElement);


function slide(par){
	var element = $('.gallery > ul > li');
	var elWidth = element.eq(0).width();
	var index;
	lengthOfSlide = (par)*elWidth;
	$('.gallery > ul').animate({marginLeft: lengthOfSlide}, 2000);
	console.log('elWidth', elWidth);
	console.log('par', par);
	console.log('lengthOfSlide', lengthOfSlide);
}
prev.click(function onClickPrev(){
	slide(+1);
	return false;
});
next.click(function onClickNext(){
	slide(-1);
	return false;
});
}