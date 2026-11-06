const swiper1 = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-art-1 .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".swiper .swiper-button-prev",
    nextEl: ".swiper .swiper-button-next",
  },
});
