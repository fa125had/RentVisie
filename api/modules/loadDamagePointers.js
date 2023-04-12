import { loadDamageDetail } from "./loadDamageDetail.js";
import { damagesURL } from "../renVisie.js";

export const loadDamagePointers = (activeSide) => {
  //get damage templates
  fetch(damagesURL)
    .then((response) => {
      if (!response.ok) {
        alert(
          `Unable to download data from ${url}, Server's Response: ${response} `
        );
      }
      return response.json();
    })
    .then((data) => {
      const carDamages = data.vehicleDefects;

      //iterate through damage template array
      for (let i = 0; i < carDamages.length; i++) {
        if (carDamages[i].templateSide === activeSide) {
          //get damage id
          const damageId = carDamages[i].vehicleDefectId;
          //define damage api url
          const damageURL = `${damagesURL}/${damageId}`;
          //get damage coordinates
          const { x, y } = carDamages[i].templateCoordinates;

          // Create a new DOM element for the damage pointer
          const damagePointer = document.createElement("i");
          damagePointer.classList.add(
            "fa-solid",
            "fa-beat",
            "fa-xmark",
            "damage-pointer"
          );
          damagePointer.style.color = "#001869";
          damagePointer.style.top = `${y}px`;
          damagePointer.style.left = `${x}px`;

          //Keep just Front side of car active for checking damage details
          if (carDamages[i].templateSide === "Front") {
            damagePointer.addEventListener("click", () =>
              loadDamageDetail(damageURL)
            );
          }
          //add pointers to car photo
          document.querySelector(".side-container").appendChild(damagePointer);
        }
      }
    });
};
