$(document).ready(function () {
  // scroll

  var headerTop = $("#header-top");
  var headerPhone = $(".header-phone");
  var headerTopOffset = headerTop.offset().top;
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".scrolltop").fadeIn();
    } else {
      $(".scrolltop").fadeOut();
    }

    if ($(window).scrollTop() > headerTopOffset) {
      headerTop.addClass("fixed");
      headerPhone.removeClass("d-flex");
      headerPhone.addClass("d-none");
    } else {
      headerTop.removeClass("fixed");
      headerPhone.addClass("d-flex");
      headerPhone.removeClass("d-none");
    }
  });

  $(".scrolltop").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });

  // add wishlist remove wishlist

  // check this while writing backend !!!!

  const wishlistBtns = document.querySelectorAll(".added-removed-wishlist");
  const addedItemWishlist = document.querySelector(".added-item-wishlist");
  const removeItemWishlist = document.querySelector(".remove-item-wishlist");

  let isAddedToWishlist = false;

  wishlistBtns.forEach(function (wishlistBtn) {
    wishlistBtn.addEventListener("click", function (e) {
      e.preventDefault();
      if (!isAddedToWishlist) {
        // Show "Product added to wishlist" message
        addedItemWishlist.style.display = "block";
        wishlistBtn.style.color = "#63ab00"; // Change heart icon color
        setTimeout(function () {
          addedItemWishlist.style.display = "none";
        }, 2000);
      } else {
        // Show "Product removed from wishlist" message
        removeItemWishlist.style.display = "block";
        wishlistBtn.style.color = ""; // Reset heart icon color
        setTimeout(function () {
          removeItemWishlist.style.display = "none";
        }, 2000);
      }

      // Toggle the state
      isAddedToWishlist = !isAddedToWishlist;
    });
  });

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
