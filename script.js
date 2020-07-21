let swiper = new Swiper('.swiper1', {
    slidesPerView: 1,
    slidesPerColumn: 2,
    spaceBetween: 10,
    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 20
      },
      1170: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 30
      },
    }
  });

let swiper2 = new Swiper('.swiper2', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1170: {
        slidesPerView: 3,
        spaceBetween: 30
      },
    }
  });
