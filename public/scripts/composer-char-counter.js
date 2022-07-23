const onInput = function(event) {
  let count = $(this).val().length;

  if (count <= 140) {
    $(this)
      .closest(".new-tweet")
      .find(".counter")
      .removeClass("negative-counter")
      .text(140 - count);
  } else {
    $(this)
      .closest(".new-tweet")
      .find(".counter")
      .addClass("negative-counter")
      .text(140 - count);
  }
}

$(document).ready(function() {

  // tweet character count
  $('#tweet-text').on('input', onInput);

});
