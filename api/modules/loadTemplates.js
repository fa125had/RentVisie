import { loadSide } from "./loadSide.js";

const carTemplates = document.querySelector(".car-templates");
const carImages = carTemplates.getElementsByTagName("img");

export const loadTemplates = (templateURL) => {
  fetch(templateURL)
    .then((response) => {
      if (!response.ok) {
        alert(
          `Unable to download data from ${url}, Server's Response: ${response} `
        );
      }
      return response.json();
    })
    .then((data) => {
      const carSides = data.sideImages;

      for (let i = 0; i < carSides.length; i++) {
        const side = carSides[i].image.fileName;
        const imageType = carSides[i].image.mimeType;
        const imageSrc = `data:${imageType};base64,${carSides[i].image.image}`;
        const img = new Image();
        img.src = imageSrc;
        img.alt = side + " of car";
        img.title = side + " of car";
        img.id = side + "-template";
        carTemplates.appendChild(img);
      }

      for (let i = 0; i < carImages.length; i++) {
        carImages[i].addEventListener("click", (event) => {
          switch (event.target.id) {
            case "Front-template":
              loadSide(event.target.id, "Front");
              break;
            case "Back-template":
              loadSide(event.target.id, "Back");

              break;
            case "Top-template":
              loadSide(event.target.id, "Top");

              break;
            case "Left-template":
              loadSide(event.target.id, "Left");

              break;
            case "Right-template":
              loadSide(event.target.id, "Right");

              break;
          }
        });
      }
      loadSide();
    });
};
