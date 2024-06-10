var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.6,
    centeredSlides: true,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
  });

  var menu = document.querySelector(".ri-menu-line");
  var clo = document.querySelector(".ri-close-line");
  var nav = document.querySelector(".respo-nav");

  menu.addEventListener("click",function(){
    nav.style.top = "0%";
})

clo.addEventListener("click",function(){
nav.style.top = "-120%";
})
