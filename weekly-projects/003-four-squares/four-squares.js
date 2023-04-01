const imagesContainer = document.querySelector('.work-wrapper');

let rawDirections = [];


// R E C O P I L A C I Ó N   D E   D A T O S

fetch('./images')
    .then(response => response.text())
    .then(data => {
        const startPosition = data.search(`<ul id="files"`);
        const endPosition = startPosition + data.slice(startPosition).search(`</ul>`);

        rawDirections = data
            .slice(startPosition, endPosition)
            .split('\n')
            .slice(1)
            .map((element) => {
                const images = element.search('images') + 'images'.length + 1;
                const classX = element.search('class') - 2;

                return element.slice(images, classX)
            })
    })
    .catch(error => console.error(error));



// F U N C I Ó N   F U N D A M E N T A L

const getRandom = (minimum, maximum) =>
    Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;



// F U N C I Ó N   E L E C C I Ó N

const choose = (array, quantity, noRepeat) => {
    let choices = [];
    let copyAr = [...array];
    if (noRepeat) {
        if (quantity < array.length) {
            for (let i = 0; i < quantity; i++) {
                let position = getRandom(0, copyAr.length - 1);
                choices.push(copyAr[position]);
                copyAr.splice(position, 1);
            }
        } else if (quantity === array.length) return array;
        else {
            console.log("Quantity > Number of elements in the array")
            return [];
        }
    }
    // Me falta la parte del 'else' que sería para cuando la selección permite repetitición.
    return choices;
}



// C O N E X I Ó N   A L   H T M L   ( D O M )

const allImagesH = document.querySelectorAll('.img-container img');



// E J E C U C I Ó N   D E   L O S   E F E C T O S

setTimeout(() => {
    // Backup por si hay un problema con la solicitud (en fetch => Para que funcione en Github Pages)
    if (rawDirections.length === 0)
        rawDirections = ["architecture-1.jpg", "architecture-3.jpg", "architecture-4.jpg", "architecture-7.jpg", "architecture-10.jpg", "architecture-8.jpg"];

    const selectedImages = choose(rawDirections, 4, true);

    allImagesH.forEach((image, index) => {
        image.src = `./images/${selectedImages[index]}`;
        image.style.width = getRandom(300, 500) + "px";
        image.style.height = getRandom(270, 400) + "px";

        image.addEventListener('mouseenter', () => {
            image.classList.remove('grey-blur')
        })
    })
}, 100)
