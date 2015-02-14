jQuery(document).ready(function(){
    openclose($(".btn-toggle"), $(".drop-menu"));
    valuta($("#uah"), $("#euro"),  $(".money"));
    function htmSlider(){
        /* Зададим следующие переменные */

        /* обертка слайдера */
        var slideWrap = jQuery('.slide-wrap');
        /* ссылки на предудыщий иследующий слайд */
        var nextLink = jQuery('.next-slide');
        var prevLink = jQuery('.prev-slide');

        var playLink = jQuery('.auto');

        var is_animate = false;

        /* ширина слайда с отступами */
        var slideWidth = jQuery('.slide-item').outerWidth();

        /* смещение слайдера */
        var newLeftPos = slideWrap.position().left - slideWidth;

        /* Клик по ссылке на следующий слайд */
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

        /* Клик по ссылке на предыдующий слайд */
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


        /* Функция автоматической прокрутки слайдера */
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

        /* Клики по ссылкам старт/пауза */
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
        var toeuro = 29;
        var touah = 28.87;
        var activeval = $(".active-val");
        euro.addClass('active')
        euro.on("click", function() {
            activeval.text('euro')
            uah.removeClass('active');

            if(euro.attr('class') != 'active') {
                euro.addClass("active");
                console.log(euro.attr('class'))
                money.each(function (i){
                    var crntmnt = $(money[i]).html() * touah;
                    crntmnt = crntmnt.toFixed(2);
                    $(money[i]).text(crntmnt);
                })
            }

        })

        uah.on("click", function() {
            euro.removeClass('active')
            if(uah.attr('class') != 'active') {
                activeval.text('uah')
                uah.addClass("active");
                money.each(function (i) {
                    console.log(money[i]);
                    var crntmnt = $(money[i]).html() / toeuro;
                    crntmnt = crntmnt.toFixed(2);
                    $(money[i]).text(crntmnt);
                })
            }

        })
        }

    /* иницилизируем функцию слайдера */
    htmSlider();
});