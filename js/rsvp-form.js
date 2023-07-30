// RSVP Form JavaScript
jQuery(document).ready(function($) {
    $('.custom-form.rsvp-form').on('submit', function(e) {
        e.preventDefault();

        var formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            guests: $('#guests').val(),
            message: $('#message').val(),
        };

        $.ajax({
            method: 'POST',
            url: 'https://chualonghoa.vn/zif/rsvp/v1/submit', // Replace with the actual URL of your WordPress site
            data: formData,
            success: function(response) {
                // Handle the response here, such as displaying a success message
                console.log(response);
            },
            error: function(error) {
                // Handle errors here, such as displaying an error message
                console.error(error);
            }
        });
    });
});
