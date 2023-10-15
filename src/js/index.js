import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import IMask from "imask";

const swiper = new Swiper(".hero__slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const navBtn = document.querySelector(".mobile-nav-btn");
const nav = document.querySelector(".mobile-nav");
const menuIcon = document.querySelector(".nav-icon");

navBtn.onclick = function () {
  nav.classList.toggle("mobile-nav--open");
  menuIcon.classList.toggle("nav-icon--active");
  document.body.classList.toggle("no-scroll");
};

const form = document.getElementById("form");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function (event) {
  const inputName = document.getElementById("inputName");
  const inputTel = document.getElementById("inputTel");

  if (inputName.value.trim() === "") {
    alert("Введите ваше имя");
    event.preventDefault();
    return;
  }

  if (inputTel.value.trim() === "") {
    alert("Введите ваш номер телефона");
    event.preventDefault();
    return;
  }

  const namePattern = /\d/;
  if (namePattern.test(inputName.value)) {
    event.preventDefault();
  } else {
    const telPattern = /^(\+\d{1,4}\(\d{1,4}\)\d{1,4}-\d{1,4}-\d{1,4})$/;
    if (!telPattern.test(inputTel.value)) {
      alert("Неверный формат номера телефона");
      event.preventDefault();
    } else {
      form.submit();
    }
  }
});

const inputName = document.getElementById("inputName");

inputName.addEventListener("input", function () {
  let value = inputName.value;
  value = value.replace(/[^a-zA-ZА-Яа-я\s]/g, "");
  value = value.charAt(0).toUpperCase() + value.slice(1);
  inputName.value = value;
});

const inputTel = document.getElementById("inputTel");
IMask(inputTel, { mask: "+{7}(000)000-00-00" });
