$(function(){
	addPagination($('.gallery-block'), $('.gallery li'));
	slider($('.gallery'), $('.number'), $('#pagPrev'), $('#pagNext'), $('.gallery-holder').width());
})

function addPagination(holder, numberList){
	var paginationHolder = $('<div/>'),
	pagPrev,
	pagNext,
	numeration = [];

	paginationHolder.css({
		'font-size' : '20px'
	});

	pagPrev = $('<a/>', {id: 'pagPrev', href: '#'}).text('<');
	pagNext = $('<a/>', {id: 'pagNext', href: '#'}).text('>');

	numberList.each(function(index){
		numeration[index] = $('<a/>', {id: 'pagList' + (index+1), class: 'number', href: '#'}).text(index+1);
	})

	pagPrev.appendTo(paginationHolder);
	$(numeration).each(function(index){
		numeration[index].appendTo(paginationHolder);
	})
	pagNext.appendTo(paginationHolder);
	paginationHolder.addClass('control');
	paginationHolder.appendTo(holder);	
}

function slider(gallery, pagNumbers, prevButton, nextButton, gallaryWidth){
	var current = 0;

	prevButton.css('background', '#ffffff');

	pagNumbers.each(function(index){
		$(pagNumbers[index]).on('click', function(){
			current = -index;
			setSlide(current);			
		})
	})

	prevButton.on('click', function(){
		if(current < 0){			
			current++;	
			setSlide(current);
		}
	});

	nextButton.on('click', function(){
		if(current > -pagNumbers.length + 1){			
			current--;	
			setSlide(current);
		}
	});

	function setSlide(){
		gallery.css('margin-left', gallaryWidth * current);
		if(current == 0){
			prevButton.css('background', '#ffffff');
			nextButton.css('background', '#ccc');
		}else if(current == -pagNumbers.length + 1){
			nextButton.css('background', '#ffffff');
			prevButton.css('background', '#ccc');
		}else{
			prevButton.css('background', '#ccc');
			nextButton.css('background', '#ccc');
		}
	}
	
}