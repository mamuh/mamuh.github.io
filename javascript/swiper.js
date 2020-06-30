var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 180,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  }
});
