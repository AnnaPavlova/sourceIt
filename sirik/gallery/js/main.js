$(function(){
	var li = $(".gallery li");
	$(".gallery-block").append("<ul class='control'> </ul>")
	var control = $(".control");
	control.append("<li class='direction-lf'><a> < </a> </li>")
	li.each( function(i){
		var number = i+1;
		control.append("<li class=" + number + ' ><a>' + number + "</a> </li>")
	});
	control.append("<li class='direction-rg'><a> > </a> </li>")
	scroll($(".control li"), $(".gallery"));
	
	
	function scroll (pagination, gallery){
		var width = $(".gallery .box").outerWidth();
		pagination.on("click", function(){
			if($(this).attr('class') == 'direction-rg'){
				gallery.animate({marginLeft:'-=600px'})
				console.log(step);
			}else if($(this).attr('class') == 'direction-lf'){
				gallery.animate({marginLeft:'+=600px'})
			}else{
				var step = (+($(this).attr("class")) -1)*width;
				gallery.animate({marginLeft: '-' + step ++});
			}
		});
	}
	});	
