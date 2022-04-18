export function mobileNavigationHandler() {
    const menuWrapper = document.querySelector('.navigation__menu-wrapper');
    const menuIcon = document.querySelector('.navigation__menu-icon');
    const menuNav = document.querySelector('.navigation__nav');

    menuWrapper.addEventListener('click', menuHandler);
    menuNav.addEventListener('click', menuHandler);

    function menuHandler() {
        document.body.classList.toggle('lock');
        menuIcon.classList.toggle('active');
        menuNav.classList.toggle('active');
    }  
}