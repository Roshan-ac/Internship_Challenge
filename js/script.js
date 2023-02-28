
// Main function 
$(document).ready(function () {

    // global variables
    let showbutton = true;
    let counter = 0;


    // Script for hamburgar open and close
    $('.menu_button_burgar').on('click', function () {
        if (!showbutton) {
            $('.menu_button_burgar_content').addClass('open');
            $('.nav').addClass('open')
            $('.nav_menu').addClass('open')

            $('.nav_menu_item').each(function () {
                $(this).addClass('open')
            })
            showbutton = true;

        } else {
            $('.menu_button_burgar_content').removeClass('open');
            $('.nav').removeClass('open')
            $('.nav_menu').removeClass('open')
            showbutton = false;
        }
    })





    // Script for hiding hamburgar on scrooling
    $('.main').scroll(function () {
        if ($(this).scrollTop() > 250) {
            $('.menu_button_burgar_content').hide(100);
        }
        else {
            $('.menu_button_burgar_content').show(100);
        }
    });






    // Testimonials section slide animation script

    $('.testimonial_section_container_item_slide').each(function (index) {
        $(this).css('left', `${index * 100}%`)
    })

    $('#goNext').on('click', function () {
        if (counter < $('.testimonial_section_container_item_slide').length - 1) {
            $('.crousel_nav_dots_item').removeClass('active')
            counter++;
            $('.crousel_nav_dots_item').each(function (index) {
                if (index == counter) {
                    $(this).addClass('active')
                }
            })

            SlidePage();
        }

    })

    $('#goPrev').on('click', function () {
        if (counter != 0) {
            $('.crousel_nav_dots_item').removeClass('active')
            counter--;
            $('.crousel_nav_dots_item').each(function (index) {
                if (index == counter) {
                    $(this).addClass('active')
                }
            })
            SlidePage();
        }
    })




    const SlidePage = () => {
        $('.testimonial_section_container_item_slide').each(function () {
            $(this).css('transform', `translateX(-${counter * 100}%)`)
        })
    }
});


