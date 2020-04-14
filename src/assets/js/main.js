$(document).ready(function() {

// Variables

var sm = 576,
    md = 768,
    lg = 992,
    xl = 1200;

/***Navigation ***/

  /*$('#toggle').click(function() {
     $(this).toggleClass('active');
     $('#overlay').toggleClass('open');
     $('.main-nav').toggleClass('open-nav');
   });*/


/**** navigation 2 ***/



$('#toggle').click(function() {
   $(this).toggleClass('active');
    $('.main-nav').toggleClass('open-nav');
      if (window.matchMedia("(max-width:"+lg+"px)").matches) {
        $('html').toggleClass('unscroll');
      }
  });

    $(window).resize(function(){
      if($('.main-nav').hasClass('open-nav')){
        if (window.matchMedia("(max-width:"+lg+"px)").matches) {
          $('html').addClass('unscroll');
        }else {
          $('html').removeClass('unscroll');
        }

      }
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
