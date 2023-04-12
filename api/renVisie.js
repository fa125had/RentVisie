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

closeBtn.addEventListener("click", () => {
  document.querySelector(".damages").style.height = "0%";
});

changeViewBtn.addEventListener("click", () => {
  if (!isFullView) {
    document.querySelector(".car-templates").style.flexWrap = "wrap";
    document.querySelector(".car-templates").style.justifyContent =
      "space-evenly";
    isFullView = true;
  } else if (isFullView) {
    document.querySelector(".car-templates").style.flexWrap = "nowrap";
    document.querySelector(".car-templates").style.justifyContent =
      "flex-start";
    isFullView = false;
  }
});
