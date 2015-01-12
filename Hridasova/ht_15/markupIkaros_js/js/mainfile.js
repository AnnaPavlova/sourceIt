$(function(){
	init();
	setActive($('.tabset li a'));
});

function setActive(el){
	el.each(function(){
		$(this).click(function(){
			el.parent().removeClass('active');
			$(this).parent().addClass('active');
		});
	});
}

function init(){
	var prev = $('.prev');
	var next = $('.next');
	var allList = $('.gallery > ul');
	var element = $('.gallery > ul > li');
	var elWidth = element.eq(0).width();
	var firstElement = element.eq(0).position().left;
	var lastElement = Math.floor(element.last().position().left);
	var list = element.parent().position().left;
	
	
	firstElement > 20 ? console.log('yes!') : console.log('no!');
	firstElement > lastElement ? console.log('yes, first the biggest!') : console.log('no, last the biggest!');
	if(lastElement == 2400){
	console.log('we see the last one');
	}else{console.log('we see the first');}	
	console.log('prev', prev);
	console.log('lastElement', lastElement);
	console.log('firstElement',firstElement);
	
function slide(par){
	var flag = true;
	var currentSlide = allList.data('current');
	currentSlide++;
	var element = $('.gallery > ul > li');
	var elWidth = element.eq(0).width();
	allList.animate({marginLeft: par*currentSlide*elWidth}, 2000).data('current', currentSlide);
	
}
/*
function slide(par){
	var element = $('.gallery > ul > li');
	var elWidth = element.eq(0).width();
	var index;
	lengthOfSlide = (par)*elWidth;
	$('.gallery > ul').animate({marginLeft: lengthOfSlide}, 2000);
	console.log('elWidth', elWidth);
	console.log('par', par);
	console.log('lengthOfSlide', lengthOfSlide);
}*/
prev.click(function onClickPrev(){
	slide(+1);
	if(currentSlide == 0){
		flag = false;
	}
	return false;
});
next.click(function onClickNext(){
	slide(-1);
	if(currentSlide == element.size()-1){
		flag = false;
	}
	return false;
});
}