$(function(){
	navigall();
	navigallHover();
	addPagination();
	navMove();
	
})


function navigall(){
	var styles = {
    	backgroundColor:'#dfdfdf',
    	width: 50, 
    	height: 197,
    	position: 'absolute',
    	top: 1,
    	left: 1,
    	opacity: 0.2,
	};
	$('.gallery-holder').css({
    	position: 'relative',
	})
	$('.gallery-holder').prepend('<div class="navleft">prev</div>')
	$('.gallery-holder').prepend('<div class="navright">next</div>')
	$('.navleft').css(styles)
	$('.navright').css(styles)
	$('.navright').css({left: 549})
}
function navigallHover(){
	$('.navleft, .navright').hover(function(){
		$(this).css({opacity: 1});
	}, function(){
		$(this).css({opacity:0.2});
	});
}
	
function navMove(){
	var prev =$('.navleft');
	var next = $('.navright');
	var step = $('.gallery>li').width();
	var currentMargin = 0;
	var currentIndex = 0;
	
	prev.click(function(){
		if (currentIndex !== 0){
			console.log('prev')
			var newMargin = currentMargin + step;
			$('.gallery').animate({marginLeft: newMargin}, 'slow', function(){
				currentMargin = newMargin;
				currentIndex--;
				
			});
		}
	});
	next.click(function(){
		if (currentIndex !== 5){
			console.log('next')
			var newMargin = currentMargin - step;
			$('.gallery').animate({marginLeft: newMargin}, 'slow', function(){
				currentMargin = newMargin;
				currentIndex++;
				
			});
		}
	});
	
	var btns = $('.control a')
	console.log(btns)
	btns.click(function(ev){

		ev.preventDefault();
		var i = btns.index(this);
		var newMargin = -i * step;
		console.log(newMargin)
			$('.gallery').animate({marginLeft: newMargin}, 'slow', function(){
				currentMargin = newMargin;
				currentIndex++;
				
			});

	})
}
function addPagination(){
	$('.gallery-block').append('<div class="control">')
	$('.control').append('<ul></ul>');
	for(i=0;i<6; i++){
    	$('.control > ul').append("<li><a href=#>" + (i + 1) + "</a></li>");
    }
    
}









