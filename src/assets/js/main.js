$(document).ready(function() {

// Variables

var sm = 576,
    md = 768,
    lg = 992,
    xl = 1200;

/**** navigation  ***/

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


 /***** slider ****/
 function defer(method) {
if (window.jQuery)
  method();
else
  setTimeout(function() {
    defer(method)
  }, 50);
}
defer(function() {
(function($) {

  function doneResizing() {
    var totalScroll = $('.slider-frame').scrollLeft();
    var itemWidth = $('.slider-item').width();
    var difference = totalScroll % itemWidth;
    if ( difference !== 0 ) {
      $('.slider-frame').animate({
        scrollLeft: '-=' + difference
      }, 500, function() {
        checkArrows();
      });
    }
  }

  function checkArrows() {
    var totalWidth = $('.slider .slider-item').length * $('.slider-item').width();
    var frameWidth = $('.slider-frame').width();
    var itemWidth = $('.slider-item').width();
    var totalScroll = $('.slider-frame').scrollLeft();

   // if ( ((totalWidth - frameWidth) - totalScroll) < itemWidth ) {
   //   $(".next").css("visibility", "hidden");
   // }
   // else {
   //   $(".next").css("visibility", "visible");
   // }
   // if ( totalScroll < itemWidth ) {
   //   $(".prev").css("visibility", "hidden");
   // }
   // else {
   //   $(".prev").css("visibility", "visible");
   // }
  }

  $('.arrow').on('click', function() {
    var $this = $(this),
      width = $('.slider-item').width(),
      speed = 500;
    if ($this.hasClass('prev')) {
      $('.slider-frame').animate({
        scrollLeft: '-=' + width
      }, speed, function() {
        checkArrows();
      });
    } else if ($this.hasClass('next')) {
      $('.slider-frame').animate({
        scrollLeft: '+=' + width
      }, speed, function() {
        checkArrows();
      });
    }
  });

  $(window).on("load resize", function() {
    checkArrows();
    $('.slider .slider-item').each(function(i) {
      var $this = $(this),
        left = $this.width() * i;
      $this.css({
        left: left
      })
    });
  });

  var resizeId;
  $(window).resize(function() {
      clearTimeout(resizeId);
      resizeId = setTimeout(doneResizing, 500);
  });

})(jQuery);
});


/**** Temoignages *****/

$("#testimonial-slider").owlCarousel({
        items:3,
        itemsDesktop:[1000,2],
        itemsDesktopSmall:[980,1],
        itemsTablet:[768,1],
        pagination:true,
        navigation:true,
        navigationText:["<",">"],
        autoPlay:true
    });

});
