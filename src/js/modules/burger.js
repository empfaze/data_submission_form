export function mobileNavigationHandler() {
    const isMobile = {
        Android: () => {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: () => {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        IOS: () => {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: () => {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: () => {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (
                this.Android() ||
                this.BlackBerry() ||
                this.IOS() ||
                this.Opera() ||
                this.Windows()
            )
        }
    }

    if (isMobile.any()) document.body.classList.add('mobile');
    else document.body.classList.add('desktop');

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