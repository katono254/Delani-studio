$(document).ready(function(){
    $(".clickable1").click(function(){
        $(".design-hidden").toggle();
        $(".design-showing").toggle();
    });
});
$(document).ready(function() {
    $(".clickable2").click(function() {
      $(".development-hidden").toggle();
      $(".development-showing").toggle();
    });
  });
  $(document).ready(function() {
    $(".clickable3").click(function() {
      $(".product-hidden").toggle();
      $(".product-showing").toggle();
    });
  });
  if (message.length > 2) {
    document.getElementById('status').innerText = "Thank you for your message!"
  } else {
    document.getElementById('status').innerText = "Null"
  }
  