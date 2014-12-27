(function () {
    var form = $('#ajax-form');

    form.on('submit', function (ev) {
        ev.preventDefault();
        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            data: form.serialize(),
            dataType: 'json'
        }).done(function (result) {
            console.log(result);
            var message = $('<p>', {
                text: result.sum
            })
                .hide()
                .appendTo(form.find('fieldset'))
                .slideDown()
                .delay(3000)
                .slideUp(function () {
                    $(this).remove();
                });
        });
    });
})();