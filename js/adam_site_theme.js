(function ($) {

$(document).ready(function() { 
  // init: collapse all groups except for the active path
  var a = false;
  $(".adam-archive-block ul").each(function(i) {
    if ($(this).find("a.active").size() > 0) {
      $(this).siblings("h3").children(".collapse-icon").text("▼");
      a = true;
    }
    // Uncomment this to open the first element
    // else if (i==0) {
    //   $(this).siblings("strong").children(".collapse-icon").text("▼");
    // }
    else {
      $(this).hide();
    }
  });
  if (!a) {
    $(".adam-archive-block").find("h3").first().children(".collapse-icon").text("▼");
    $(".adam-archive-block").find("ul").first().show();
  }
  
 // click event: toggle visibility of group clicked (and update icon)
 $(".adam-archive-block h3").click(function()
 {
  var icon = $(this).children(".collapse-icon");
  $(this).siblings("ul").slideToggle(function()
  {
   (icon.text()=="▼") ? icon.text("►") : icon.text("▼");
  });
 });
});

})(jQuery);
