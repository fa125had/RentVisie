import { loadTemplates } from "./modules/loadTemplates.js";

export const reference = 1;
let isFullView = false;

export const baseURL = "https://rv-proxy-2.herokuapp.com";
export const templateURL =
  baseURL + `/api/assessment/damage-templates/${reference}`;

export const damagesURL =
  baseURL + `/api/assessment/damage-templates/${reference}/damages`;

const closeBtn = document.getElementById("close-btn");
const changeViewBtn = document.getElementById("change-view-icon");

window.onload = loadTemplates(templateURL);

setTimeout(function() {
  // Show the main content and hide the loading page
  document.querySelector('.loading-box').style.display = 'none';
  document.querySelector('.main').style.filter = 'none';

}, 10000);

closeBtn.addEventListener("click", () => {
  document.querySelector(".damages").style.height = "0%";
});

changeViewBtn.addEventListener("click", () => {
  if (!isFullView) {
    document.querySelector(".car-templates").style.flexWrap = "wrap";
    document.querySelector(".car-templates").style.justifyContent =
      "space-evenly";
    document.getElementById('change-view-icon').classList.add('fa-rotate-180');
    isFullView = true;
  } else if (isFullView) {
    document.getElementById('change-view-icon').classList.remove('fa-rotate-180');
    document.querySelector(".car-templates").style.flexWrap = "nowrap";
    document.querySelector(".car-templates").style.justifyContent =
      "flex-start";
    isFullView = false;
  }
});
