$(document).ready(function() {
    // Show or hide the back-to-top button
    $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
        $('.back-to-top').fadeIn();
      } else {
        $('.back-to-top').fadeOut();
      }
    });
  
    // Scroll to top when the back-to-top button is clicked
    $('.back-to-top').click(function(event) {
      event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 300);
    })
  });
  