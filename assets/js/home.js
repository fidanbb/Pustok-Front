$(document).ready(function () {
  // slider js

  $("#slider-section").slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  });

  // feature product active tab arrow js

  $(".nav-link").click(function () {
    $(".arrow-icon").removeClass("show-arrow");
    $(this).next().addClass("show-arrow");
  });
});
