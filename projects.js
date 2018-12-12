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
    var clicks = $(this).data('clicks');
    if (clicks) {
    $('.slideshow-viewer').removeClass('slideshow-viewer')
    $('.slideshow-overlay').fadeOut(200)
    setInterval(slideshow, slideshowSpeed)
  }
   /*else (clicks) {
    $('.slideshow-viewer').addClass('slideshow-viewer')
    $('.slideshow-overlay').fadeIn(200)
    setInterval(slideshow, slideshowSpeed)
  }*/

  })

  function slideshow() {
    $('.slideshow-image').fadeOut(400).eq(slideNumber).delay(400).fadeIn(400);
    slideNumber = slideNumber + 1
    if ( slideNumber  == $('.slideshow-image').length) {
      slideNumber = 0;
    }
  }


  $('.project-filter a').click(function() {
    var selected = $(this).text().toLowerCase()
    if ( selected == 'all') {
      $('.project').fadeIn(200)
      $('.project').parent('a').fadeIn(200)
    } else {
      $('.project').filter('.' + selected).fadeIn(200).parent('a').fadeIn(200)
      $('.project').not('.' + selected).fadeOut(200).parent('a').fadeOut(200)
    }

    /*$('.project-filter a').click(function() {
      $('.slideshow-viewer').addClass('slideshow-viewer')
      $('.slideshow-overlay').fadeIn(200)
      setInterval(slideshow, slideshowSpeed)*/
  })
})
