$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(800, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    if ($(this).val().trim() != '') {
      $('ul').append('<li><span><i class="fa fa-trash-o" aria-hidden="true"></i></span>' + $(this).val() + '</li>');
    }
    $(this).val('');
  }
});

$('.fa-pencil').click(function() {
  $("input[type='text']").fadeToggle(200);
});
