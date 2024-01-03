$(document).ready(function () {
  $(".product-image").slick({
    infinite: true,
    // prevArrow: $(".prev"),
    // nextArrow: $(".next"),
    asNavFor: ".slider-nav-thumbnails",
  });

  $(".slider-nav-thumbnails").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".product-image",

    focusOnSelect: true,
  });

  $(".slider-nav-thumbnails .slick-slide").removeClass("slick-active");
  $(".slider-nav-thumbnails .slick-slide").eq(0).addClass("slick-active");

  $(".product-image").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      var mySlideNumber = nextSlide;
      $(".slider-nav-thumbnails .slick-slide").removeClass("slick-active");
      $(".slider-nav-thumbnails .slick-slide")
        .eq(mySlideNumber)
        .addClass("slick-active");
    }
  );

  $(".stars label")
    .on("mouseover", function () {
      $(this).addClass("hover");
      $(this).prevAll("label").addClass("hover");
    })
    .on("mouseout", function () {
      $(this).removeClass("hover");
      var selectedStar = $(".stars input:checked").next("label");
      if (selectedStar.length > 0) {
        selectedStar.addClass("hover");
        selectedStar.prevAll("label").addClass("hover");
      }
    });

  $(".stars input").on("click", function () {
    $(this).next("label").addClass("selected");
    $(this).prevAll("label").addClass("selected");
  });
});
