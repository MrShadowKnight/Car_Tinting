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
  });
  jQuery(document).ready(function () {
    jQuery(".burger__menu_btn").click(function () {
      jQuery(".burger__menu").toggleClass("opened");
    });
  });
});
