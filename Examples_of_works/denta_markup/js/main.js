jQuery(document).ready(function(){
    openclose($(".btn-toggle"), $(".drop-menu"));
    valuta($("#uah"), $("#euro"),  $(".money"));
    function htmSlider(){
        var slideWrap = jQuery('.slide-wrap');
        var nextLink = jQuery('.next-slide');
        var prevLink = jQuery('.prev-slide');
        var playLink = jQuery('.auto');
        var is_animate = false;
        var slideWidth = jQuery('.slide-item').outerWidth();
        var newLeftPos = slideWrap.position().left - slideWidth;
        setInterval(function(){ nextLink.trigger('click');},4000);
        nextLink.click(function(){
            if(!slideWrap.is(':animated')) {

                slideWrap.animate({left: newLeftPos}, 500, function(){
                    slideWrap
                        .find('.slide-item:first')
                        .appendTo(slideWrap)
                        .parent()
                        .css({'left': 0});
                });

            }
        });
        prevLink.click(function(){
            if(!slideWrap.is(':animated')) {

                slideWrap
                    .css({'left': newLeftPos})
                    .find('.slide-item:last')
                    .prependTo(slideWrap)
                    .parent()
                    .animate({left: 0}, 500);

            }
        });
        function autoplay(){
            if(!is_animate){
                is_animate = true;
                slideWrap.animate({left: newLeftPos}, 500, function(){
                    slideWrap
                        .find('.slide-item:first')
                        .appendTo(slideWrap)
                        .parent()
                        .css({'left': 0});
                    is_animate = false;
                });
            }
        }
        playLink.click(function(){
            if(playLink.hasClass('play')){
                playLink.removeClass('play').addClass('pause');
                jQuery('.navy').addClass('disable');
                timer = setInterval(autoplay, 1000);
            } else {
                playLink.removeClass('pause').addClass('play');
                jQuery('.navy').removeClass('disable');
                clearInterval(timer);
            }
        });

    }
    function openclose(btn, content){
        $(content).css("display", "none");
        console.log(btn, content)
        $(btn).on("click", function(e){
            e.preventDefault();
            $(content).slideToggle("slow");
        });
    };

    function valuta(uah, euro, money){
        var toeuro = (26.0 * 10) / 10;
        var touah = (26.0 * 10) / 10;
        var activeval = $(".active-val");
        var valuta = $('.valuta');
        var money_eu_ua= $('.money_eu_ua')
        uah.addClass('active');
        start();
        function start(){
             money.each(function (i) {
                var price = $(money[i]).attr("price") || $(money[i]).html();
                var crntmnt = price * toeuro;
                $(money[i]).attr("price", crntmnt);
                crntmnt = crntmnt.toFixed(2);
                $(money[i]).text(crntmnt);
            })
         };
       
           function toUah(e){
            // event.preventDefault ? event.preventDefault() : (event.returnValue=false);
            activeval.text('eu');
            uah.removeClass('active');
            euro.addClass("active");
            money.each(function (i){
                var price = $(money[i]).attr("price") || $(money[i]).html();
                console.log('money' + i + ": ", $(money[i]).html(), "price: ", price);
                var crntmnt = price / touah;
                $(money[i]).attr("price", crntmnt);
                console.log("price", $(money[i]).attr("price"))
                console.log('crntmnt:', crntmnt)
                crntmnt = crntmnt.toFixed(2);
                console.log('crntmnt toFixed:', crntmnt)
                $(money[i]).text(crntmnt);
                money_eu_ua.text(" euro");

            })}

        function toEuro(e){
            // event.preventDefault ? event.preventDefault() : (event.returnValue=false);
            euro.removeClass('active');
            activeval.text('ua')
            uah.addClass("active");
            money.each(function (i) {
                var price = $(money[i]).attr("price") || $(money[i]).html();
                console.log('money' + i + ": ", $(money[i]).html(), "price: ", price);
                var crntmnt = price * toeuro;
                $(money[i]).attr("price", crntmnt);
                console.log("price", $(money[i]).attr("price"))
                console.log('crntmnt:', crntmnt)
                crntmnt = crntmnt.toFixed(0);
                console.log('crntmnt toFixed:', crntmnt)
                $(money[i]).text(crntmnt);
                money_eu_ua.text(" uah");
            })
        }



        euro.on("click", function() {
            if(euro.attr('class') != 'active') {
                toUah();
            }
        });

        uah.on("click", function() {
            if(uah.attr('class') != 'active') {
                toEuro()
             }
        });

        valuta.on('click', function(){
            if(euro.attr('class') != 'active'){
                toUah();
            }
            else if(uah.attr('class') != 'active'){
                toEuro();
            }
        });
        };
        
    htmSlider();
    
});