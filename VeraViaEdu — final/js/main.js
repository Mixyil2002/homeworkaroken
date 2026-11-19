const swiper1 = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  // centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    prevEl: ".swiper .swiper-button-prev",
    nextEl: ".swiper .swiper-button-next",
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    990: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});
