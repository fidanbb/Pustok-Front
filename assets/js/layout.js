$(document).ready(function () {
  //  category menu trigger
  $(".category-trigger").click(function (e) {
    e.preventDefault();
    $(".category-menu").toggleClass("show-category-menu");

    e.stopPropagation();
  });

  $(".category-menu").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
  });

  // cart hover

  $(".cart-item").mouseover(function () {
    $(".cart-dropdown").addClass("show-cart-dropdown");
  });

  $(".cart-item").mouseout(function () {
    $(".cart-dropdown").removeClass("show-cart-dropdown");
  });

  // sidebar currency-lang trigger

  $(".currency-trigger").click(function (e) {
    e.preventDefault();

    $(this).next().toggleClass("d-none");

    if (!$(".lang-trigger").next().hasClass("d-none")) {
      $(".lang-trigger").next().addClass("d-none");
      console.log("yes");
    }
    e.stopPropagation();
  });

  $(".lang-trigger").click(function (e) {
    e.preventDefault();

    $(this).next().toggleClass("d-none");

    if (!$(".lacurrencyng-trigger").next().hasClass("d-none")) {
      $(".currency-trigger").next().addClass("d-none");
      console.log("yes");
    }

    e.stopPropagation();
  });

  $(".menu-item-trigger").click(function (e) {
    if (!$(this).next().hasClass("d-none")) {
      $(this).css("color", "#62ab00");
    } else {
      $(this).css("color", "#000");
    }
  });

  // open-close sideBar
  $(".open-sidebar").click(function (e) {
    e.preventDefault();
    $("#sidebar").addClass("transform-sidebar");
  });

  $(".close-sidebar").click(function (e) {
    e.preventDefault();
    $("#sidebar").removeClass("transform-sidebar");
  });

  // body js
  $($("body")).click(function () {
    if ($(".category-menu").hasClass("show-category-menu")) {
      $(".category-menu").removeClass("show-category-menu");
    }
  });
});
