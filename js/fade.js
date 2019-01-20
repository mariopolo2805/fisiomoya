$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      var objectBottom = $(this).offset().top + $(this).outerHeight();

      if (objectBottom < (windowBottom + 200)) {
        if ($(this).css("opacity") == 0) {
          $(this).fadeTo(500,1);
          if ($(this).hasClass("reverse")) {
            $(this).css("animation", "animateleft 0.5s");
            $(this).css("-webkit-animation", "animateleft 0.5s");
          } else {
            $(this).css("animation", "animateright 0.5s");
            $(this).css("-webkit-animation", "animateright 0.5s");
          }
        }
      } /* else {
        if ($(this).css("opacity")==1 && !$(this).hasClass("first")) {
          $(this).fadeTo(500,0);
          if ($(this).hasClass("reverse")) {
            $(this).css("transform", "translateX(-50px)");
          } else {
            $(this).css("transform", "translateX(50px)");
          }
        } else {
          if ($(this).hasClass("first")) {
            $(this).fadeTo(500,1);
            $(this).css("transform", "translateX(50px)");
          }
        }
      } */
    });
  }).scroll();
});
