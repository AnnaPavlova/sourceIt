

$(document).ready(function(){
    $(".accordion a:first").addClass("active");
    $(".accordion .slider:not(:first)").hide();

    $(".accordion a").click(function(){

        $(this).next(".slider").slideToggle("slow")
        .siblings(".slider li:visible").slideUp("slow");
        $(this).toggleClass("active");
        $(this).siblings("a").removeClass("active");
     });
 
 });
$(document).ready(function() {
    $('.block').hide();
    $('.title').click(function() {
        $(this).next('.block').slideToggle(1000);
        return false;
    });
});


 $(function() {
    $( "#tabs" ).tabs();
  });

$(document).ready(function() {
			var images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
			var currentImage = 0;
			$("#img").attr("src", images[currentImage]);
			
			$("#back").click(function() {
				if (currentImage != 0) {
					currentImage--;
					$("#img").fadeToggle("fast");
					setTimeout(function() {
						$("#img").attr("src", images[currentImage]);
					}, 200);
					$("#img").fadeToggle("fast");
				}
			});
			$("#next").click(function() {
				if (currentImage != images.length - 1) {
					currentImage++;
					$("#img").fadeToggle("fast");
					setTimeout(function() {
						$("#img").attr("src", images[currentImage]);
					}, 200);
					$("#img").fadeToggle("fast");
				}
			});
		});