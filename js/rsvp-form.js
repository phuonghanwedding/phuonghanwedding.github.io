// RSVP Form JavaScript
jQuery(document).ready(function ($) {
    $('.custom-form.rsvp-form').on('submit', function (e) {
        e.preventDefault();
        var el = document.querySelector(".button-bird");
        var text = document.querySelector(".button-bird__text");

        var formData = {
            name: $('#custom_name').val(),
            email: $('#custom_phone').val(),
            guests: $('#custom_guests').val(),
            message: $('#custom_message').val(),
        };

        $.ajax({
            method: 'POST',
            url: 'https://chualonghoa.vn/wp-json/mo/v1/rsvp', // Replace with the actual URL of your WordPress site
            data: formData,
            success: function (response) {
                // Handle the response here, such as displaying a success message
                console.log(response);
                el.classList.toggle('active');
                console.log('true');
                text.innerHTML = 'THANK YOU!';
            },
            error: function (error) {
                // Handle errors here, such as displaying an error message
                console.error(error);
            }
        });
    });
});
