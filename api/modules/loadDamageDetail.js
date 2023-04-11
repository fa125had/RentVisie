


export const loadDamageDetail = (url) => {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                alert(
                    `Unable to download data from ${url}, Server's Response: ${response} `
                );
            }
            return response.json();
        })
        .then((data) => {
            const date = new Date(data.date);
            document.getElementById("date").textContent = date;
            document.getElementById("description").textContent = data.description;
            // Clear the notes section
            document.getElementById("notes").innerHTML = "";
            const img = new Image();

            data.images.forEach((element) => {
                const imageSrc = element.image;
                const imageType = element.mimeType;

                img.src = `data:${imageType};base64,${imageSrc}`;
                img.alt = element.fileName;
                img.id = element.fileName + element.id;
                // console.log(element);
            });

            document.getElementById("notes").appendChild(img);
            document.querySelector('.damages').style.height = '60%';

        });
};