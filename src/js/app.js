// import { maskInputs } from "./static/inputmask.js";
import { replaceDomElements } from "./static/replace.js";
// import { stickyHeader } from "./parts/header.js";
// import { playVideoAction } from "./parts/video.js";
// import SmoothScroll from "smoothscroll-for-websites";

import "./static/accordeon.js";
// import "./parts/forms.js";
// import "./parts/qty.js";
import "./parts/sliders.js";
// import "./parts/popup.js";
import "./parts/menu.js";
// import "./parts/tabs.js";
// import "./parts/filters.js";
// import "./parts/audio.js";
// import "./parts/stones.js";
// import { animateAction, animateImagesAction, animateStaggerAction, animateHiddenTextAction, animateTextAction, lineAnimationAction } from "./parts/animations.js";
// import { runPrelaoder } from "./parts/loader.js";

// SmoothScroll();

replaceDomElements();
// stickyHeader();
// maskInputs('+7 (999) 999-99-99', '[name="phone"]')
// playVideoAction();
// animateStaggerAction();
// animateAction();
// animateImagesAction();
// animateTextAction();
// runPrelaoder();
// animateHiddenTextAction();
// lineAnimationAction();

accorden();

import { Fancybox } from "@fancyapps/ui";
import { accorden } from "./static/accordeon.js";
Fancybox.bind("[data-fancybox]", {
});





// document.addEventListener('click', function (e) {

//     let targetEl = e.target;
//     if (targetEl.classList.contains('pages-close')) {
//         document.querySelector('.pages').classList.toggle('_hide');
//     }
// })

const allRanges = document.querySelectorAll(".calc .section__flex-right");
let minRange = document.querySelector('.calc .min');
let maxRange = document.querySelector('.calc .max');
allRanges.forEach(wrap => {
    const range = wrap.querySelector(".range");
    const bubble = wrap.querySelector(".bubble");

    range.addEventListener("input", () => {
        setBubble(range, bubble);
    });
    setBubble(range, bubble);
});

function setBubble(range, bubble) {
    const val = range.value;
    const min = range.min ? range.min : 0;
    const max = range.max ? range.max : 500;
    const newVal = Number(((val - min) * 100) / (max - min));
    bubble.innerHTML = val;
    minRange.innerHTML = min;
    maxRange.innerHTML = max;

    // Sorta magic numbers based on size of the native UI thumb
    bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}