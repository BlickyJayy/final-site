$(document).ready(function() {
  var slideNumber = 1
  var slideshowSpeed = 3000
  var slideshowIntervalID = setInterval(slideshow, slideshowSpeed)



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
