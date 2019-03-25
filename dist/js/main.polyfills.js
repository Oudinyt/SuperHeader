/*!
 * project-name v0.0.1
 * A description for your project.
 * (c) 2019 YOUR NAME
 * MIT License
 * http://link-to-your-git-repo.com
 */

// Breakpoint
var breakpoint = {};

breakpoint.refreshValue = function () {
    this.value = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');
};


// Resize
window.addEventListener("resize", (function(event) {

    breakpoint.refreshValue();

    //console.log('resize Breakpoint ' + breakpoint.value);

}));


// Dom loaded
document.addEventListener("DOMContentLoaded", (function(event) {

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

}));


/**
 * Element.matches() polyfill (simple version)
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
 */
if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}