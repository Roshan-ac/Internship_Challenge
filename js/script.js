
const menu_button = document.querySelector('.menu-button').addEventListener('click', toogleButton)
const hamburger = document.querySelector('.menu-button_burgar')
const nav = document.querySelector('.nav')
const navmenu = document.querySelector('.nav_menu');
const navItem = document.querySelectorAll('.nav_menu_item');

let showbutton = true;

function toogleButton() {

    if (!showbutton) {
        hamburger.classList.add('open');
        nav.classList.add('open')
        navmenu.classList.add('open')
        navItem.forEach(list=>list.classList.add('open'))
        showbutton = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        navmenu.classList.remove('open');
        navItem.forEach(list=>list.classList.remove('open'))
        showbutton = false;
    }
}





 
var swiper = new Swiper(".service_section_item_container_slide", {
    slidesPerView: 3,
    spaceBetween: 50,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

  
