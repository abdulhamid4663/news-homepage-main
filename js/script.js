const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const nav = document.querySelector('nav');
const body = document.querySelector('body');


btnHamburger.addEventListener('click', function() {
    console.log('click hamburger');

    if(header.classList.contains('open')) {
        header.classList.remove('open');
        overlay.classList.add('fade-out');
        overlay.classList.remove('fade-in');
        nav.classList.add('disappear');
        nav.classList.remove('appear');
        body.classList.remove('no-scroll');
    }
    else {
        header.classList.add('open');
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
        nav.classList.remove('disappear');
        nav.classList.add('appear');
        body.classList.add('no-scroll');
    }
});