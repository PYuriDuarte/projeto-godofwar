var swiper = new Swiper(".slide-characteres", {
  slidesPerView: 3.3,
  spaceBetween: 10,
  freeMode: true,
  breakpoints: {
    320:{
      slidesPerView: 1.2,      
    },
    768:{
      slidesPerView: 2.02,      
    },
    991:{
      slidesPerView: 2.7,      
    },
    1200:{
      slidesPerView: 3.3,      
    },
  }
});

AOS.init({
  duration: 1000,
  once: true,
});

// var logo = document.querySelector(".logo");
// logo.setAttribute("data-aos", "zoom-in");

