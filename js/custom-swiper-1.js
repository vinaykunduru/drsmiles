const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  spaceBetween: 30,
  effect: "fade",

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
