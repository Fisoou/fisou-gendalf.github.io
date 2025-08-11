const valuesSwiper = new Swiper(".values-swiper", {
  direction: "horizontal",
  loop: false,
  freeMode: true,
  slidesPerView: "auto",
  spaceBetween: 20,
  navigation: {
    nextEl: ".values-swiper-button-next",
    prevEl: ".values-swiper-button-prev",
  },
  breakpoints: {
    770: {
      freeMode: true,
      slidesPerView: "auto",
      spaceBetween: 20,
    },
    1024: {
      freeMode: false,
      slidesPerView: 3.5,
      spaceBetween: 37,
    },
  },
});
const feedSwiper = new Swiper(".feed-swiper", {
  direction: "horizontal",
  loop: false,
  freeMode: true,
  slidesPerView: "auto",
  spaceBetween: 20,
  navigation: {
    nextEl: ".feed-swiper-button-next",
    prevEl: ".feed-swiper-button-prev",
  },
  breakpoints: {
    770: {
      freeMode: true,
      slidesPerView: "auto",
      spaceBetween: 20,
    },
    1024: {
      freeMode: false,
      slidesPerView: 3.5,
      spaceBetween: 37,
    },
  },
});
