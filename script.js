AOS.init({
    duration: 1000,
});

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    spaceBetween: 30,
    slidesPerView: 1,
    keyboard: {
        enabled: true,
      },
      breakpoints: {
        768: {
            slidesPerView: 2,
          },
        1024: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 4,
        }
    },
    loop: true,
  });

