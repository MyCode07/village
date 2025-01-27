const allRanges = document.querySelectorAll(".calc .section__flex-right");

if (allRanges) {
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
}