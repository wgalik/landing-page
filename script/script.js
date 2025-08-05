$(document).ready(function () {
  const navMenu = $(".nav-menu");
  const hamburger = $("#hamburger");
  const home = $("#home");

  hamburger.on("click", function () {
    navMenu.toggleClass("active");
    hamburger.toggleClass("open");
    if (navMenu.hasClass("active")) {
      home.css("marginTop", 210);
    } else {
      home.css("marginTop", 60);
    }
  });

  $("#logo").on("click", function () {
    if (navMenu.hasClass("active")) {
      closeMenu();
    }
  });
  $(".nav-menu li").on("click", function () {
    if (navMenu.hasClass("active")) {
      closeMenu();
    }
  });

  function closeMenu() {
    navMenu.removeClass("active");
    home.css("marginTop", 60);
  }

  $("#portfolio button").on("click", function () {
    $("#portfolio button").css("textDecoration", "none");
    const gridContainer = $(".grid-container");
    const newClass = $(this).attr("id");
    gridContainer.hide();
    gridContainer.removeClass().addClass(`grid-container ${newClass}`);
    gridContainer.fadeIn(1000);
    $(`#${newClass}`).css("textDecoration", "underline");
  });
});
