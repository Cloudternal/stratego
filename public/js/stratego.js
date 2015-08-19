$(function () {
    $('#start').on('click', function () {
        alert('Starting Stratego!');
        $.ajax({
            method: 'post',
            url: '/start',
            data: {
                msg: 'hello',
                name: 'david'
            },
            success: function (data) {
                alert('success!');
                if (!data) {
                    alert('rendering error');
                    return;
                }
                switch (data[0]) {
                case 'Success':
                    if (data[1]) {
                        $('body').prepend(data[1]);
                    }
                    break;
                default: break;
                }
            },
            error: function () {
                alert('error!');
            },
            complete: function () {
                alert('complete!');
            }
        });
    });
});