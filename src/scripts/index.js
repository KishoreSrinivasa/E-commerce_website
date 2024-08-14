// Common variables
const counter = document.getElementById("count-display-id");

// Common need functions
function setLogoandName(logourl, name) {
  if(document.getElementById("company-logo")) {
    document.getElementById("company-logo").src = logourl;
  }
  if(document.getElementById("company-name")) {
    document.getElementById("company-name").innerHTML = name;
  }
  if(document.getElementById('company-name-02')) {
    document.getElementById('company-name-02').innerHTML = name;
  }
  if(document.getElementById("company-name-03")) {
    document.getElementById("company-name-03").innerHTML = name;
  }
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
    if(counter) {
      counter.value = 1;
    }
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


