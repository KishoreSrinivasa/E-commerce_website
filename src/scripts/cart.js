const counter = document.getElementById("count-display-id");
counter.value = 1;

function setLogoandName(logourl, name) {
    document.getElementById("company-logo").src = logourl;
  
    document.getElementById("company-name-03").innerHTML = name;
    document.getElementById("company-name").innerHTML = name;
  } 

function countMinus() {
    let count = counter.value;
    if(count != 1) {
      counter.value = Number(count)-1;
    }
}

function countPlus() {
  let count = counter.value;
  counter.value = Number(count)+1;
}
  document.addEventListener('DOMContentLoaded', () => {
      "use strict"
  
      //creating some constant variable 
      const logo_url = "assets/components/logo.png";
      const company_name = "Kaikuttai";
  
      setLogoandName(logo_url, company_name);


      //for swiper funtion
    const swiper = new Swiper(".sliderFeaturedPosts", {
        spaceBetween: 0,
        speed: 500,
        centeredSlides: true,
        loop: true,
        slideToClickedSlide: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".custom-swiper-button-next",
            prevEl: ".custom-swiper-button-prev",
        },
    });
  });