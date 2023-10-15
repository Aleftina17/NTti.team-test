import Swiper from "swiper/bundle";
import "swiper/css/bundle";

function swiperFunc() {
  const swiper = new Swiper('.hero__slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  });
}

export default swiperFunc()