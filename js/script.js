(function ($) {
  "use strict";

  // Get the container element
  var btnContainer = document.getElementById("myDIV");

  // Get all buttons with class="btn" inside the container
  var btns = btnContainer.getElementsByClassName("btn");

  // Loop through the buttons and add the active class to the current/clicked button
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }


  $('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
  });


  VANTA.FOG({
    el: "#vantajs",
    highlightColor: 0x513575,
    midtoneColor: 0x130216,
    lowlightColor: 0x1d0c6d,
    baseColor: 0x80e16,
    blurFactor: 0.55,
    speed: 2,
    zoom: 1.0
  });

  var typed = new Typed('.typed-text', {
    strings: ["I'm a Junior Frontend Web Developer. ^1000", " Web Designer"],
    typeSpeed: 100,
    showCursor: false,
    backSpeed: 20,
    loop: true,
    loopCount: Infinity,


  });





  $(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 630);
  });



  $('.carousel').carousel({
    interval: 2000,
  })



})(jQuery); // End of use strict


