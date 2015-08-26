$(function () {
    $('button.square').on('click', function () {
        alert("Button " + $(this).val());
            $.ajax({
                method: 'post',
                url: '/squareclicked',
                data: {
                    square: $(this).val()
                },
                success: function (data) {
                    if (!data) {
                        alert('rendering error');
                        return;
                    }
                    switch (data[0]) {
                    case 'Success':
                        if (data[1]) {
                            $('.alert').html(data[1]);
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
    $('form#play').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            method: 'post',
            url: '/gamestart',
            data: $(this).serialize(),
            success: function (data) {
                if (!data) {
                    alert('rendering error');
                    return;
                }
                switch (data[0]) {
                    case 'Success':
                        if (data[1]) {
                            var form = $('form#play');
                            form.before(data[1]);
                            form.remove();                            
                        }
                        break;
                    default: break;
                }
            },
            error: function () {
                alert('error!');
            }
        });
    });
});