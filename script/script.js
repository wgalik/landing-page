$(function () {
  const navMenu = $(".nav-menu");
  const hamburger = $("#hamburger");
  const home = $("#home");
  const btnPortfolio = $("#portfolio button");

  hamburger.on("click", function () {
    navMenu.toggleClass("active");
    hamburger.toggleClass("open");
  });

  $("#logo").on("click", closeMenu);
  $(".nav-menu li").on("click", closeMenu);

  function closeMenu() {
    if (!navMenu.hasClass("active")) return;
    navMenu.removeClass("active");
    hamburger.removeClass("open");
    home.css("marginTop", 60);
  }

  btnPortfolio.on("click", function () {
    const newClass = $(this).attr("id");
    btnPortfolio.css("textDecoration", "none");
    $(".grid-container")
      .hide()
      .removeClass()
      .addClass(`grid-container ${newClass}`)
      .fadeIn(1000);
    $(`#${newClass}`).css("textDecoration", "underline");
  });
});
