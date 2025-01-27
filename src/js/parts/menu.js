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
        menu.classList.toggle('_open');
        unLockPadding();
    })
}
