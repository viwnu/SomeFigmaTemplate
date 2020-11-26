$(function() {

  var header = $("#header"),
      introH = $("#intro").innerHeight(),
      scrollOffset = $(window).scrollTop;

  /*Fixed Header*/
  chekScroll(scrollOffset);

  $(window).on("scroll", function() {

    scrollOffset = $(this).scrollTop();
    chekScroll(scrollOffset);

  });

  function chekScroll(scrollOffset) {

    if (scrollOffset >= introH ) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }

  }

  /* Smoth Scroll*/

  $("[data-scroll]").on("click", function(event) {
      event.preventDefault();

      var $this = $(this),
          blockId = $this.data('scroll'),
          blockOffset = $(blockId).offset().top;

      $("#nav a").removeClass("active");
      $this.addClass("active");

      $("html, body").animate({
        scrollTop: blockOffset
      }, 500);
  });

  /* Menu nav toggle*/

  $("#nav_toggle").on("click", function(event) {
    event.preventDefault();

    $("#nav").toggleClass("active");
  });

});
