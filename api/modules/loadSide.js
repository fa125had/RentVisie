import { loadDamagePointers } from './loadDamagePointers.js';


const templateContainer = document.querySelector(".side-container");
const carSideTitle = document.getElementById("car-side-title");
let activeSide = "";


export const loadSide = (sideImgId = "Front-template", templateSide = "Front") => {
    const currentSide = document.querySelector(".side-container img");
    const activeDamagePointers = document.querySelector('.side-container i');

    //remove active damage pointers if exist
    if (activeDamagePointers !== null) {
        templateContainer.removeChild(activeDamagePointers);
    }
    const timeout1id = setTimeout(() => 1 * 1, 50000);
    clearTimeout(timeout1id);

    //clean previous damage pointers
    const sideContainer = document.querySelector(".side-container");
    const prevPointers = sideContainer.getElementsByTagName('i');
    while (prevPointers.length > 0) {
        sideContainer.removeChild(prevPointers[0]);
    }

    //set active template
    activeSide = templateSide;

    //set active template header
    carSideTitle.innerHTML = activeSide;

    //remove active template if exist
    if (currentSide !== null) {
        templateContainer.removeChild(currentSide);
    };

    //copy selected template for full size view
    const newSide = document.getElementById(sideImgId).cloneNode();

    //load selected template to the dom
    templateContainer.appendChild(newSide);

    //load damage's places on template
    loadDamagePointers(activeSide);

};