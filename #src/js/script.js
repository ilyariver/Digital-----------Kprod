'use strict'

const openMenu = document.querySelector('.js-burger')
const closeMenu = document.querySelector('.js-close-btn')
const menu = document.querySelector('.js-navigation')

openMenu.addEventListener('click', function() {
    menu.style.display = 'flex'
    function f() {
        return menu.classList.add('open')
    }
    setTimeout(f, 100)
})

closeMenu.addEventListener('click', function() {
    menu.classList.remove('open')
    function f() {
        return menu.style.display = 'none'
    }
    setTimeout(f, 200)
    setTimeout(f, 200)
})

window.addEventListener( "resize", function(event) {
    if (window.innerWidth >= 991) {
        menu.style.display = 'flex'
    } else {
        menu.style.display = 'none'
    }
});