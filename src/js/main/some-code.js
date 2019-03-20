// Breakpoint
var breakpoint = {};

breakpoint.refreshValue = function () {
    this.value = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');
};


// Resize
window.addEventListener("resize", function(event) {

    breakpoint.refreshValue();

    //console.log('resize Breakpoint ' + breakpoint.value);

});


// Dom loaded
document.addEventListener("DOMContentLoaded", function(event) {

    breakpoint.refreshValue();

    //console.log('Load Breakpoint ' + breakpoint.value);

    // JS
    var submenu = document.getElementsByClassName("AxaXl-Header__MainNav-link");

    for (var i = 0; i < submenu.length; i++) {
        submenu[i].addEventListener('click', menus, false);
    }

    function menus() {
        this.parentElement.classList.toggle("AxaXl-Header__MainNav-list--active");
    };

});

