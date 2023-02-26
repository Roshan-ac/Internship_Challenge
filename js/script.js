
const menu_button = document.querySelector('.menu_button_burgar').addEventListener('click', toogleButton)
const hamburger = document.querySelector('.menu_button_burgar_content')
const nav = document.querySelector('.nav')
const navmenu = document.querySelector('.nav_menu');
const navItem = document.querySelectorAll('.nav_menu_item');

let showbutton = true;

function toogleButton() {

    if (!showbutton) {
        hamburger.classList.add('open');
        nav.classList.add('open')
        navmenu.classList.add('open')
        navItem.forEach(list => list.classList.add('open'))
        showbutton = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        navmenu.classList.remove('open');
        navItem.forEach(list => list.classList.remove('open'))
        showbutton = false;
    }
}





var swiper = new Swiper(".service_section_item_container_slide", {
    slidesPerView: 3,
    spaceBetween: 20,
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

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
        1240: {
            slidesPerView: 3
        }
    },
});

let counter = 0;

const dot_Item = document.querySelectorAll('.crousel_nav_dots_item');
const slide = document.querySelectorAll('.testimonial_section_container_item_slide')
slide.forEach(
    (item, index) => {
        item.style.left = `${index * 100}%`

    }
)

const SlidePage = () => {
    slide.forEach(
        (item) => {
            item.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}





const goNext = () => {
    if (counter < slide.length - 1) {
        counter++;
        dot_Item[counter - 1].classList.remove('active')
        dot_Item[counter].classList.add('active')
        SlidePage();
    }
};
const goPrev = () => {
    if (counter != 0) {
        counter--;
       dot_Item[counter + 1].classList.remove('active')
       dot_Item[counter].classList.add('active')
        SlidePage();
    }
};



