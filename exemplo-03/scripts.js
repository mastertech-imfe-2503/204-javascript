const menuMobile = document.querySelector('.menu-mobile');
const headerNav = document.querySelector('header nav');

menuMobile.onclick = function () {
    menuMobile.classList.toggle('active');
    headerNav.classList.toggle('active');
}