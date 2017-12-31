$("li").click(function() {
  $(this).toggleClass("completed");
})

$("li > span").click(function(event) {
  $(this).parent().fadeOut(800, function() {
    $(this).remove();
  });
  event.stopPropagation();
})
