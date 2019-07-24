
//function change_background() {
//    $(this).toggleClass('cage');
//    console.log("button pushed");
//}
$(document).ready(function(){
    $("button").click(function(){
      $("body").toggleClass("cage");
    });
  });