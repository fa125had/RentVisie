import { loadTemplates } from "./modules/loadTemplates.js";
import { loading } from "./modules/loading.js";

//given reference by document
export const reference = 1;
//templates navbar view
let isFullView = false;

export const baseURL = "https://rv-proxy-2.herokuapp.com";
export const templateURL =
  baseURL + `/api/assessment/damage-templates/${reference}`;
export const damagesURL =
  baseURL + `/api/assessment/damage-templates/${reference}/damages`;

window.onload = () => {
  loadTemplates(templateURL);
  loading(7000);
};

//modal close button
const closeBtn = document.getElementById("close-btn");
closeBtn.addEventListener("click", () => {
  document.querySelector(".damages").style.height = "0%";
});

//templates navbar view icon
const changeViewBtn = document.getElementById("change-view-icon");
changeViewBtn.addEventListener("click", () => {
  if (!isFullView) {
    document.querySelector(".car-templates").style.flexWrap = "wrap";
    document.querySelector(".car-templates").style.justifyContent =
      "space-evenly";
    document.getElementById("change-view-icon").classList.add("fa-rotate-180");
    isFullView = true;
  } else if (isFullView) {
    document
      .getElementById("change-view-icon")
      .classList.remove("fa-rotate-180");
    document.querySelector(".car-templates").style.flexWrap = "nowrap";
    document.querySelector(".car-templates").style.justifyContent =
      "flex-start";
    isFullView = false;
  }
});
