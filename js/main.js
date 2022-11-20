const swiper = new Swiper('.swiper', {
  // Optional parameters
  //direction: 'vertical',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});




const swiper2 = new Swiper('.swiper2', {
  slidesPerView: 3,
  spaceBetween: 1,
  slidesPerGroup: 3,
  direction: 'horizontal',
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
   nextEl: '.swiper2-button-next',
   prevEl: '.swiper2-button-prev',
  },
});
