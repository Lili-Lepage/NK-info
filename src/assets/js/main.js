$(document).ready(function() {

/***Navigation ***/

  $('#toggle').click(function() {
     $(this).toggleClass('active');
     $('#overlay').toggleClass('open');
     $('.main-nav').toggleClass('open-nav');
    });


    /*** Compteur **/
    $('.incremental').each(function() {
        var object        = $(this),
            offsetTop     = object.offset().top,
            windowPercent = ($(window).height() / 100) * 85,
            max           = object.attr('rel'),
            triggered     = false;

        $(window).scroll(function() {
            if ($(window).scrollTop() + windowPercent > offsetTop && ! triggered) {
                triggered = true;

                var incrementalInterval = setInterval(function() {
                    if (parseInt(object.html()) < max) {
                        var nb = parseInt(object.html()) + 1 ;
                        object.html(parseInt(object.html()) + 1);
                    } else {
                        clearInterval(incrementalInterval);
                    }
                }, 40);
            }
        });
    });
});
