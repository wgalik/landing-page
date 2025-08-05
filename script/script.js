$(document).ready(function () {
  $("#hamburger").on("click", function () {
    $(".nav-menu").toggleClass("active");
    if ($(".nav-menu").hasClass("active")) {
      $("#home").css("marginTop", 210);
    } else {
      $("#home").css("marginTop", 60);
    }
  });

  $("#logo").on("click", function () {
    if ($(".nav-menu").hasClass("active")) {
      $(".nav-menu").removeClass("active");
      $("#home").css("marginTop", 60);
    }
  });
  $(".nav-menu li").on("click", function () {
    if ($(".nav-menu").hasClass("active")) {
      $(".nav-menu").removeClass("active");
      $("#home").css("marginTop", 60);
    }
  });

  $("#portfolio button").on("click", function (event) {
    $("#portfolio button").css("textDecoration", "none");
    const gridContainer = $(".grid-container");
    gridContainer.hide();
    gridContainer.removeClass().addClass(`grid-container ${event.target.id}`);
    gridContainer.fadeIn(1000);
    $(`#${event.target.id}`).css("textDecoration", "underline");
  });
});
