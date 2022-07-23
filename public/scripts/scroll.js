$(document).ready(function() {

  // to get the toggle button for getting to the top of the screen 
  const triggerScroll = '.scroll-to-top';
  $(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
      $('.new-tweet').hide();
      $(triggerScroll).fadeIn();
    } else {
      $(triggerScroll).fadeOut();
    }
  });
  // get to the top by clicking the toggle button
  $(triggerScroll).click(function() {
    $(window).scrollTop(0);
  });
});