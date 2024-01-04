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
    $(".product-card").mouseover(function () {
      $(this)
        .children()
        .closest(".product-card-body")
        .find(".hover-content")
        .addClass("show-hover-btns");
    });

    $(".product-card").mouseout(function () {
      $(this)
        .children()
        .closest(".product-card-body")
        .find(".hover-content")
        .removeClass("show-hover-btns");
    });

    $(".open-modal").click(function (e) {
      e.preventDefault();
      $(".detail-modal").removeClass("d-none");
      $(".modal-overlay").removeClass("d-none");

      $("body").addClass("modal-is-open");

      // if ($(".product-image").hasClass("slick-initialized")) {
      //   $(".product-image").slick("unslick");
      // }

      // if ($(".slider-nav-thumbnails").hasClass("slick-initialized")) {
      //   $(".slider-nav-thumbnails").slick("unslick");
      // }

      // $(".product-image").empty();
      // $(".slider-nav-thumbnails").empty();

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
    });

    $(".close-modal").click(function (e) {
      e.preventDefault();
      $(".detail-modal").addClass("d-none");
      $(".modal-overlay").addClass("d-none");
      $("body").removeClass("modal-is-open");
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

    $(".product-card").mouseover(function () {
      $(this)
        .children()
        .closest(".product-card-body")
        .find(".hover-content")
        .addClass("show-hover-btns");
    });

    $(".product-card").mouseout(function () {
      $(this)
        .children()
        .closest(".product-card-body")
        .find(".hover-content")
        .removeClass("show-hover-btns");
    });

    $(".open-modal").click(function (e) {
      e.preventDefault();
      $(".detail-modal").removeClass("d-none");
      $(".modal-overlay").removeClass("d-none");

      $("body").addClass("modal-is-open");

      // if ($(".product-image").hasClass("slick-initialized")) {
      //   $(".product-image").slick("unslick");
      // }

      // if ($(".slider-nav-thumbnails").hasClass("slick-initialized")) {
      //   $(".slider-nav-thumbnails").slick("unslick");
      // }

      // $(".product-image").empty();
      // $(".slider-nav-thumbnails").empty();

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
    });

    $(".close-modal").click(function (e) {
      e.preventDefault();
      $(".detail-modal").addClass("d-none");
      $(".modal-overlay").addClass("d-none");
      $("body").removeClass("modal-is-open");
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

    $(".product-card").mouseover(function () {
      $(this)
        .children()
        .closest(".product-card-body")
        .find(".hover-content")
        .addClass("show-hover-btns");
    });

    $(".product-card").mouseout(function () {
      $(this)
        .children()
        .closest(".product-card-body")
        .find(".hover-content")
        .removeClass("show-hover-btns");
    });

    $(".open-modal").click(function (e) {
      e.preventDefault();
      $(".detail-modal").removeClass("d-none");
      $(".modal-overlay").removeClass("d-none");

      $("body").addClass("modal-is-open");

      // if ($(".product-image").hasClass("slick-initialized")) {
      //   $(".product-image").slick("unslick");
      // }

      // if ($(".slider-nav-thumbnails").hasClass("slick-initialized")) {
      //   $(".slider-nav-thumbnails").slick("unslick");
      // }

      // $(".product-image").empty();
      // $(".slider-nav-thumbnails").empty();

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
    });

    $(".close-modal").click(function (e) {
      e.preventDefault();
      $(".detail-modal").addClass("d-none");
      $(".modal-overlay").addClass("d-none");
      $("body").removeClass("modal-is-open");
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

  // product-detail modal js

  $(".open-modal").click(function (e) {
    e.preventDefault();
    $(".detail-modal").removeClass("d-none");
    $(".modal-overlay").removeClass("d-none");

    $("body").addClass("modal-is-open");

    // if ($(".product-image").hasClass("slick-initialized")) {
    //   $(".product-image").slick("unslick");
    // }

    // if ($(".slider-nav-thumbnails").hasClass("slick-initialized")) {
    //   $(".slider-nav-thumbnails").slick("unslick");
    // }

    // $(".product-image").empty();
    // $(".slider-nav-thumbnails").empty();

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
  });

  $(".close-modal").click(function (e) {
    e.preventDefault();
    $(".detail-modal").addClass("d-none");
    $(".modal-overlay").addClass("d-none");
    $("body").removeClass("modal-is-open");
  });
});
