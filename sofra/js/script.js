


$(".do-nicescrol4").niceScroll(".wrap");  // hwscroll!!

$("body").niceScroll({
  cursorcolor:"#c0e7f3",
  cursorwidth:"10px"
});


$(".form_datetime").datetimepicker({
  format: "yyyy-mm-dd"
});

$('.dropdown-toggle').dropdown()

// Get the container element
var btnContainer = document.getElementById("myDIV");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

$('#myModal').modal(options)


$('[data-fancybox="gallery"]').fancybox({
  buttons : [ 
    'slideShow',
    'share',
    'zoom',
    'fullScreen',
    'close'
  ],
  thumbs : {
    autoStart : true
  }
});