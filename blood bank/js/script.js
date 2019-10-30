


$(".do-nicescrol4").niceScroll(".wrap");  // hwscroll!!

$("body").niceScroll({
  cursorcolor:"#c0e7f3",
  cursorwidth:"10px"
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  autoplay:true,
  autoplayTimeout:1000,
  autoplayHoverPause:true,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:2,
          nav:false
      },
      1000:{
          items:3,
          nav:true,
          loop:false
      }
  }
})


$( function() {
  $( "#datepicker" ).datepicker();
} );


