import $ from 'jquery'; window.jQuery = $; window.$ = $; // import module example (npm i -D jquery)
require('../styles/libs/bootstrap-4.5.2-dist/js/bootstrap.bundle');
require('../styles/libs/mmenu-light-master/dist/mmenu-light');
require('../styles/libs/OwlCarousel2-2.3.4/dist/owl.carousel');

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS
    // Мобильное меню
    const menu = new MmenuLight(
        document.querySelector("#my-menu")
    );
    const navigation = menu.navigation({
        title: "Меню",
        theme: "dark"
    });
    const drawer = menu.offcanvas();
    document.querySelector('a[href="#my-menu"]')
        .addEventListener('click', (evnt) =>{
            evnt.preventDefault();
            drawer.open();
        });
    // карусуль слайдов
    $('.owl-carousel').owlCarousel({
        loop:true,
        center:true,
        margin:5,
        dotsClass: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:true
            },
            1000:{
                items:5,
                nav:true
            }
        }
    });

})
