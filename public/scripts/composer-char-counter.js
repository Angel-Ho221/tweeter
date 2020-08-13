//responsible for character counter

$(document).ready(function() {
  $("#tweet-text").on("input", function() {
    let text = $("#tweet-text").val();
    let maxChar = 140;
    const element = $("#char-counter");
    let charLeft = maxChar - text.length;
    element.text(charLeft);
    if (charLeft >= 0) {
      element.removeClass("negative")
    } else {
      element.addClass("negative")
    }
  })
});