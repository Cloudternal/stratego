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
                        $('.tag1').html(data[1]);
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
    $('#play').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            method: 'post',
            url: '/play',
            data: $(this).serialize(),
            success: function (data) {
                alert('success!');
                if (!data) {
                    alert('rendering error');
                    return;
                }
                switch (data[0]) {
                case 'Success':
                    if (data[1]) {
                        $('.tag2').html(data[1]);
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