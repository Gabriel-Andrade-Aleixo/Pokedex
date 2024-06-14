window.addEventListener("scroll", function () {
    let header = document.querySelector('#header')
    header.classList.toggle('scrollh', window.scrollY > 1)
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});