import $ from 'jquery'; window.jQuery = $; window.$ = $; // import module example (npm i -D jquery)
require('../styles/libs/bootstrap-4.5.2-dist/js/bootstrap.bundle');
require('../styles/libs/mmenu-light-master/dist/mmenu-light');

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS
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

})
