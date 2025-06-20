const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },

  spaceBetween: 30,
  effect: "fade",

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
