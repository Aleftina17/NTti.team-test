import mobileNav from "./modules/mobile-nav.js";
import swiperFunc from "./modules/slider.js";
mobileNav();
swiperFunc();

const form = document.getElementById("form");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function () {
  form.submit();
});

form.addEventListener("submit", function (event) {
  const inputName = document.getElementById("inputName");
  const inputTel = document.getElementById("inputTel");

  const namePattern = /\d/;
  if (namePattern.test(inputName.value)) {
    alert("Имя не должно содержать цифры.");
    event.preventDefault();
    return;
  }
  const telPattern = /^(\+?\d{1,4}[\s-]?)?\d{10}$/;
  if (!telPattern.test(inputTel.value)) {
    alert("Неверный номер телефона.");
    event.preventDefault();
    return;
  }
});
