$(document).ready(function() {
  var slideNumber = 1
  var slideshowSpeed = 3000
  var slideshowIntervalID = setInterval(slideshow, slideshowSpeed)

  $('.slideshow-image').click(function() {
    clearInterval(slideshowIntervalID)
    $('.slideshow-overlay').fadeIn(200)
    $(this).addClass('slideshow-viewer')
  })

  $('.slideshow-overlay').click(function() {
    $('.slideshow-viewer').removeClass('slideshow-viewer')
    $('.slideshow-overlay').fadeOut(200)
    setInterval(slideshow, slideshowSpeed)
  })

  function slideshow() {
    $('.slideshow-image').fadeOut(300).eq(slideNumber).delay(300).fadeIn(300);
    slideNumber = slideNumber + 1
    if ( slideNumber  == $('.slideshow-image').length) {
      slideNumber = 0;
    }
  }
$('h1').on({
  ready:function(){
    $(this).css("color", "tomato");
  }
})
})




<script type="text/javascript" src='home.js'></script>
