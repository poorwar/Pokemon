// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })
    // set the date we're counting down to
var target_date = new Date('Oct, 9, 2014').getTime();
 
// variables for time units
var days, hours, minutes, seconds, ms_step=10;
 
// get tag element
var countdown = document.getElementById('countdown');
 
setInterval(function () {
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
    min = parseInt(seconds_left / 60);
    sec = parseInt(seconds_left % 60);
    ms = parseInt(target_date-current_date);
     
    // format countdown string + set tag value
   countdown.innerHTML = ''+
      '<span class="days">'+days+'<b>Days</b></span>'+
      '<span class="hours">'+hours+'<b>Hours</b></span>'+
      '<span class="minutes">'+min+'<b>Minutes</b></span>'+
      '<span class="seconds">'+sec+'<b>Seconds</b></span>'+
      '<span class="ms">'+ms+'ms</span>';  
// this is just for milliseconds only
  /* countdown.innerHTML = 
      '<span class="ms">'+ms+' ms</span>'; */
}, ms_step);
    

})(jQuery); // End of use strict
