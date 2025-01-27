import { lockPadding, unLockPadding } from '../utils/lockPadding.js';

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu__close');

if (burger) {
    burger.addEventListener('click', (e) => {
        menu.classList.toggle('_open');
        lockPadding();

    })

    menuClose.addEventListener('click', (e) => {
        menu.classList.remove('_open');
        unLockPadding();
    })

    const links = menu.querySelectorAll('nav a');
    if (links.length) {
        links.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('_open');
                unLockPadding();
            })
        })
    }
}
