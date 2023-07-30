 // Set your wedding date here (year, month [0-11], day, hours, minutes, seconds)
 const weddingDate = new Date('2023-12-31T12:00:00');

 function updateCountdown() {
     const now = new Date();
     const timeRemaining = weddingDate - now;

     if (timeRemaining <= 0) {
         document.getElementById('countdown').innerHTML = 'It\'s Our Wedding Day!';
     } else {
         const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
         const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
         const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

         document.getElementById('days').innerHTML = days + ' days';
         document.getElementById('hours').innerHTML = hours + ' hours';
         document.getElementById('minutes').innerHTML = minutes + ' minutes';
         document.getElementById('seconds').innerHTML = seconds + ' seconds';
     }
 }

 // Update the countdown every second
 //setInterval(updateCountdown, 1000);

 // Initial update
 //updateCountdown();

 function handleTickInit(tick) {

    // Uncomment to set labels to different language ( in this case Dutch )
    /*
    var locale = {
        YEAR_PLURAL: 'Jaren',
        YEAR_SINGULAR: 'Jaar',
        MONTH_PLURAL: 'Maanden',
        MONTH_SINGULAR: 'Maand',
        WEEK_PLURAL: 'Weken',
        WEEK_SINGULAR: 'Week',
        DAY_PLURAL: 'Dagen',
        DAY_SINGULAR: 'Dag',
        HOUR_PLURAL: 'Uren',
        HOUR_SINGULAR: 'Uur',
        MINUTE_PLURAL: 'Minuten',
        MINUTE_SINGULAR: 'Minuut',
        SECOND_PLURAL: 'Seconden',
        SECOND_SINGULAR: 'Seconde',
        MILLISECOND_PLURAL: 'Milliseconden',
        MILLISECOND_SINGULAR: 'Milliseconde'
    };

    for (var key in locale) {
        if (!locale.hasOwnProperty(key)) { continue; }
        tick.setConstant(key, locale[key]);
    }
    */

    // var nextYear = (new Date()).getFullYear() + 1;
    // const now = new Date();
    //  const timeRemaining = weddingDate - now;
    Tick.count.down('2023-10-01').onupdate = function(value) {
        tick.value = value;
    };

}