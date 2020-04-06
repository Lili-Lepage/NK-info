$(document).ready(function() {

/***Navigation ***/

  $('#toggle').click(function() {
     $(this).toggleClass('active');
     $('#overlay').toggleClass('open');
     $('.main-nav').toggleClass('open-nav');
    });


/*** Compteur **/

$(window).scroll(function(){
    if( $(window).scrollTop() == 1000){
      alert('ok');
    }
  });

});
