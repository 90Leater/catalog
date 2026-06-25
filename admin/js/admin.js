import {
    listenProducts
} from "./products.js";

import {
    setupImportButton
} from "./import.js";

import "./modal.js";
import "./create-product.js";

document.addEventListener(
    "DOMContentLoaded",
    init
);

function init(){

    console.log(
        "GO.Leather Admin Ready"
    );

    setupImportButton();

    listenProducts();

}
