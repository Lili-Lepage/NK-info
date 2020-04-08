$(document).ready(function() {

/***Navigation ***/

  $('#toggle').click(function() {
     $(this).toggleClass('active');
     $('#overlay').toggleClass('open');
     $('.main-nav').toggleClass('open-nav');
    });



    /*** Scroll vers la section 1 ***/

    $('#scroll').click(function(){
           var target = $("#section-1");

           if(target.length ) {
               $("html, body").stop().animate( { scrollTop: target.offset().top }, 800);
           }
    });



    /*** Compteur **/

    $('.incremental').each(function() {
        var object        = $(this),
            offsetTop     = object.offset().top,
            windowPercent = ($(window).height() / 100) * 85,
            min           = parseInt(object.html()),
            max           = object.attr('rel'),
            triggered     = false,
            executionTime = 2000,
            intervalTime  = parseInt(executionTime / (max - min));

        $(window).scroll(function() {
            if ($(window).scrollTop() + windowPercent > offsetTop && ! triggered) {
                triggered = true;

                var incrementalInterval = setInterval(function() {
                    if (parseInt(object.html()) < max) {
                      object.html(parseInt(object.html()) +1);
                    } else {
                      clearInterval(incrementalInterval);
                    }
                }, intervalTime);
            }
        });
    });


});
