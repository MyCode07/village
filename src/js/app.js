// import { maskInputs } from "./static/inputmask.js";
import { replaceDomElements } from "./static/replace.js";

import "./static/accordeon.js";
import "./parts/forms.js";
import "./parts/sliders.js";
import "./parts/menu.js";
import "./parts/ranges.js";


accorden();
replaceDomElements();
// maskInputs('+7 (999) 999-99-99', '[name="phone"]')


import { Fancybox } from "@fancyapps/ui";
import { accorden } from "./static/accordeon.js";
Fancybox.bind("[data-fancybox]", {
});