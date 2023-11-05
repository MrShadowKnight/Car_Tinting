const clearForm = (name, phone, email, message) => {
  name.value = "";
  phone.value = "";
  email.value = "";
  message.value = "";
};

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

  // // Get element from do cument
  // const FORM = document.getElementById(".form__content_form");
  // const NAME = document.getElementById(".form__content_form_name");
  // const PHONE = document.getElementById(".form__content_form_phone");
  // const EMAIL = document.getElementById(".form__content_form_email");
  // const MESSAGE = document.getElementById(".form__content_form_message");

  // // console
  // console.log(NAME.value);
  // console.log(PHONE.value);
  // console.log(EMAIL.value);
  // console.log(MESSAGE.value);

  // // add listemers
  // FORM.addEventListener("submit", (e) => {
  //   let frame = {
  //     name: NAME.value,
  //     phone: PHONE.value,
  //     email: EMAIL.value,
  //     message: MESSAGE.value,
  //   };
  //   console.log(frame);
  //   clearForm(NAME, PHONE, EMAIL, MESSAGE);
  // });
  function submitForm() {
    var name = document.getElementById(".form__content_form_name").value;
    var phone = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var occupation = document.getElementById("occupation").value;

    var result = "Ім'я: " + name + "<br>";
    result += "Вік: " + phone + "<br>";
    result += "Email: " + email + "<br>";
    result += "Заняття: " + occupation + "<br>";

    document.getElementById("result").innerHTML = result;
}

});
