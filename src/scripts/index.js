// start point
document.addEventListener("DOMContentLoaded", () => {
  $(".hero__slider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  });
  $(".gallery__slider").slick({
    infinite: true,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  jQuery(document).ready(function () {
    jQuery(".burger__menu_btn").click(function () {
      jQuery(".burger__menu").toggleClass("opened");
    });
  });
});
