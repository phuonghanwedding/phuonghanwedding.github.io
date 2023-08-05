// RSVP Form JavaScript
// jQuery(document).ready(function ($) {
//     $('.custom-form.rsvp-form').on('submit', function (e) {
//         e.preventDefault();
//         var el = document.querySelector(".button-bird");
//         var text = document.querySelector(".button-bird__text");

//         var formData = {
//             name: $('#custom_name').val(),
//             email: $('#custom_phone').val(),
//             guests: $('#custom_guests').val(),
//             message: $('#custom_message').val(),
//         };

//         $.ajax({
//             method: 'POST',
//             url: 'https://chualonghoa.vn/wp-json/mo/v1/rsvp', // Replace with the actual URL of your WordPress site
//             headers: {
//                 "Content-Type": "application/x-www-form-urlencoded"
//             },
//             data: formData,
//             success: function (response) {
//                 // Handle the response here, such as displaying a success message
//                 console.log(response);
//                 el.classList.toggle('active');
//                 console.log('true');
//                 text.innerHTML = 'THANK YOU!';
//             },
//             error: function (error) {
//                 // Handle errors here, such as displaying an error message
//                 console.error(error);
//             }
//         });
//     });
// });

jQuery(document).ready(function ($) {
    $('.custom-form.rsvp-form').on('submit', function (e) {
        e.preventDefault();
        var el = document.querySelector(".button-bird");
        var text = document.querySelector(".button-bird__text");
        var $processingCircle = $(this).find('.processing-circle');
        var form = this;

        // Show processing spinner
        $processingCircle.show();

        var settings = {
            "url": "https://chualonghoa.vn/wp-json/mo/v1/rsvp",
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            "data": {
                "custom_name": $('#custom_name').val(),
                "custom_phone": $('#custom_phone').val(),
                "custom_guests": $('#custom_guests').val(),
                "custom_message": $('#custom_message').val()
            }
        };

        $.ajax(settings).done(function (response) {
            console.log(response);

            $processingCircle.hide();

            if (response == 1) {
                el.classList.toggle('active');
                console.log('true');
                text.innerHTML = 'THANK YOU!';
                // Reset the form fields
                form.reset();
            } else {
                console.log('false');
                text.innerHTML = 'SUBMIT AGAIN!';
            }
        });
    });
});

