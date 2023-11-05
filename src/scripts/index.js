const clearForm = (name, phone, email, message) => {
  name.value = "";
  phone.value = "";
  email.value = "";
  message.value = "";
};

// Start point
document.addEventListener("DOMContentLoaded", () => {
  // Use the correct syntax for selecting elements by class name
  const FORM = document.querySelector(".form__content_form");
  const NAME = document.querySelector(".form__content_form_name");
  const PHONE = document.querySelector(".form__content_form_phone");
  const EMAIL = document.querySelector(".form__content_form_email");
  const MESSAGE = document.querySelector(".form__content_form_message");

  // Console.log statements should be inside the event listener to access the values correctly
  // Add the 'submit' event listener to the form
  FORM.addEventListener("submit", (e) => {
    // Prevent the form from actually submitting
    e.preventDefault();

    let frame = {
      name: NAME.value,
      phone: PHONE.value,
      email: EMAIL.value,
      message: MESSAGE.value,
    };
    console.log(frame);

    // Call the clearForm function to reset the form fields
    clearForm(NAME, PHONE, EMAIL, MESSAGE);
  });

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
