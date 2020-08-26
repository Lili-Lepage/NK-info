$(document).ready(function() {

// Variables

var sm = 576,
    md = 768,
    lg = 990,
    xl = 992;


/**** navigation  ***/

$('#toggle').click(function() {
   $(this).toggleClass('active');
    $('.main-nav').toggleClass('open-nav');
  });

  if (window.matchMedia("(max-width:"+lg+"px)").matches) {
    $('.sub-menu').slideUp();
    $('html').toggleClass('unscroll');
    $('.link-service').click(function(e){
      e.preventDefault();
      $('.sub-menu').slideToggle();
    });
  }

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

    $('#scroll').click(function(event){
       event.preventDefault();
           var target = $("#section-1");
           if(target.length ) {
               $("html, body").stop().animate( { scrollTop: target.offset().top }, 800);
           }
    });



    /*** Compteur ***/

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


/**** Slider *****/

        $('.slider-logos').slick({
               slidesToShow: 6,
               slidesToScroll: 1,
               autoplay: true,
               autoplaySpeed: 1500,
               arrows: true,
               prevArrow: '<span class="slick-prev"></span>',
               nextArrow: '<span class="slick-next"></span>',
               dots: false,
               pauseOnHover: false,
               responsive: [{
                   breakpoint: 768,
                   settings: {
                       slidesToShow: 4
                   }
               }, {
                   breakpoint: 520,
                   settings: {
                       slidesToShow: 3
                   }
               }]
           });

          $(".slider-testimonial").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            prevArrow: '<span class="slick-prev"></span>',
            nextArrow: '<span class="slick-next"></span>',
            dots: false,
            pauseOnHover: true,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                slidesToShow: 2,
                centerMode: false
                }
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1
                }
              }
            ]
          });





});
