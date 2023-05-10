const swiper = new Swiper('.main-slider .swiper', {
  loop: true,

  // If we need pagination
  pagination: {
    el: '.main-slider .swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.main-slider .swiper-button-next',
    prevEl: '.main-slider .swiper-button-prev',
  },
});


const swiper2 = new Swiper('.new-prod-slider .swiper', {
  loop: true,
  slidesPerView :3,
  spaceBetween:48,
  // Navigation arrows
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },
});