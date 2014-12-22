$(function(){
    // высота блоков
    function sameHeight(){
        var $columns = $('.js-same-height .box'),
            heights = [];
        $columns.each(function() {
            heights.push($(this).height());
        });
        var highest = Math.max.apply(this, heights);
        $columns.height(highest);
    }

    function sameInnerHeight(){
        var $columns = $('.js-same-inner-height .block'),
            heights = [];
        $columns.each(function() {
            heights.push($(this).innerHeight());
        });
        var highest = Math.max.apply(this, heights);
        $columns.innerHeight(highest);
    }

    // красный цвет на первый єлемент
    $('ul li:first-child').addClass('marked');

    // очитска инпутов
    function clearValue(){
        $('input[type=text], input[type=password]').val('');
    }
    $('.btn-clean').click(function (e){
        e.preventDefault();
        clearValue();
    });

    // порядковый номер для четных элементов
    $('ul').each(function() {
        var listItems = $( this).find('li');
        for (var i = 0, len = listItems.length; i < len; i++){
            var liNb = i + 1;
            $(listItems[i]).prepend('<span class="nb">' + liNb + ' </span>');
        }
        $('ul li:even').find('.nb').remove();
    });

    // класс active на клик
    $('ul').each(function() {
        var altItem = $( this).find('li');
        $(altItem).click(function(){
            $(altItem).removeClass('active');
            $(this).addClass('active');
        });
    });


    sameHeight();
    sameInnerHeight();
});