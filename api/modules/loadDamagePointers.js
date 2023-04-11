import { loadDamageDetail } from "./loadDamageDetail.js";
import { damagesURL } from "../renVisie.js";
// import { reference } from "../renVisie.js";

export const loadDamagePointers = (activeSide) => {
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
            // console.log(carDamages);

            for (let i = 0; i < carDamages.length; i++) {
                if (carDamages[i].templateSide === activeSide) {
                    // console.log(carDamages[i].templateSide, activeSide);

                    const damageId = carDamages[i].vehicleDefectId;
                    const damageURL = `${damagesURL}/${damageId}`
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

                    damagePointer.addEventListener('click', () => loadDamageDetail(damageURL));
                    document.querySelector(".side-container").appendChild(damagePointer);
                }
            }
        });
};
