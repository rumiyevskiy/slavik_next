const swiper = new Swiper('.slider-main-block', {
    // Optional parameters
    loop: true,
  
    // // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider-main-block__arrow.swiper-button-next',
      prevEl: '.slider-main-block__arrow.swiper-button-prev',
    },
  
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

    autoplay: {
      delay: 6000,
    },
  });

  swiper.on('click', function (event) {
    console.log('swiper click', event);
  });

  const swiper2 = new Swiper('.slider-main-block2', {
    // Optional parameters
    loop: true,
  
    // // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider-main-block__arrow.swiper-button-next',
      prevEl: '.slider-main-block__arrow.swiper-button-prev',
    },
  
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

    autoplay: {
      delay: 6000,
      reverseDirection: true,
    },
  });

  swiper2.on('click', function (event) {
    console.log('swiper2 click', event);
  });