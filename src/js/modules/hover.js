export function hoverHandler() {
    const hoverLinks = document.querySelectorAll('.menu__list-item');
    hoverLinks.forEach(item => {
        const link = item.querySelector('.menu__link');
        const sublist = item.querySelector('.menu__sub-list');

        item.addEventListener('mouseenter', () => {
            item.classList.add('active-item');
            link.classList.add('active-link');
            sublist.classList.add('visible');
        });
        item.addEventListener('mouseleave', () => {
            item.classList.remove('active-item');
            link.classList.remove('active-link');
            sublist.classList.remove('visible');
        });
    })
}