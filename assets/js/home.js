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

  // feauture product slider js

  $(".product-slider").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $("#pills-home-tab").on("shown.bs.tab", function (e) {
    var $slider = $(".product-slider");

    // Check if the slider is initialized
    if ($slider.hasClass("slick-initialized")) {
      // If initialized, destroy it first
      $slider.slick("unslick");
    }

    $(".product-slider").slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 3,
      dots: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });

  $("#pills-profile-tab").on("shown.bs.tab", function (e) {
    var $slider = $(".product-slider-2");

    if ($slider.hasClass("slick-initialized")) {
      $slider.slick("unslick");
    }

    $(".product-slider-2").slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 3,
      dots: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });

  $("#pills-contact-tab").on("shown.bs.tab", function (e) {
    var $slider = $(".product-slider-3");

    if ($slider.hasClass("slick-initialized")) {
      $slider.slick("unslick");
    }
    $(".product-slider-3").slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 3,
      dots: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });

  // feauture product hover btns show

  $(".product-card").mouseover(function () {
    // let dataId = $(this).data("id");
    // $(".hover-content").each(function () {
    //   if ($(this).data("id") === dataId) {
    //     $(this).addClass("show-hover-btns");
    //   }
    // });

    $(this)
      .children()
      .closest(".product-card-body")
      .find(".hover-content")
      .addClass("show-hover-btns");
  });

  $(".product-card").mouseout(function () {
    // let dataId = $(this).data("id");
    // $(".hover-content").each(function () {
    //   if ($(this).data("id") === dataId) {
    //     $(this).removeClass("show-hover-btns");
    //   }
    // });

    $(this)
      .children()
      .closest(".product-card-body")
      .find(".hover-content")
      .removeClass("show-hover-btns");
  });

  // best seller slider

  $(".bestselller-product-slider").slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // children books slider
  $("#children-book-section .products").slick({
    infinite: true,
    slidesToShow: 3,
    // slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  });

  // artbook slider

  $(".art-product-slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // testimonial slider
  $(".testimonial-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  });

  // blog slider
  $(".blog-slider").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // {
      //   breakpoint: 768,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 1,
      //   },
      // },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
    ],
  });

  // blog slider
  $(".brand-slider").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
