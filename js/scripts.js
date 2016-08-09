$(document).ready(function() {
//alert("jQuery loaded..."); //testing for jQuery setup
  $("button#godogs").click(function() {
    $("ul#cats").prepend("<li><img src='img/cat_scared.jpg' class='img-responsive img-small'><br><p>Meow, meow!</p></li>");

    $("ul#dogs").prepend("<li><img src='img/dog_fierce.jpg' class='img-responsive img-small'><br><p><strong>BARK!! BARK!!!</strong></p></li>");
  });


  $("button#gocats").click(function() {
    $("ul#dogs").prepend("<li><img src='img/dog_scared.jpg' class='img-responsive img-small'><br><p>Bark, bark!</p></li>");

    $("ul#cats").prepend("<li><img src='img/cat_fierce.jpg' class='img-responsive img-small'><br><p><strong>MEOW!! MEOW!!!</strong></p></li>");
  });


  $("button").click(function(){
    $("ul#cats").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#dogs").children("li").first().click(function() {
      $(this).remove();
    });
  });
});
