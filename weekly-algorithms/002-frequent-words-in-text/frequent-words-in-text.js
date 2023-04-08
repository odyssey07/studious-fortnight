const div = document.createElement('div');
div.classList.add('container');
div.innerHTML = `<p id="test-text">In physics, electromagnetism is an interaction that occurs between particles with electric charge via electromagnetic fields. The electromagnetic force is one of the four fundamental forces of nature. It is the dominant force in the interactions of atoms and molecules. Electromagnetism can be thought of as a combination of electrostatics and magnetism, two distinct but closely intertwined phenomena. Electromagnetic forces occur between any two charged particles, causing an attraction between particles with opposite charges and repulsion between particles with the same charge, while magnetism is an interaction that occurs exclusively between charged particles in relative motion. These two effects combine to create electromagnetic fields in the vicinity of charge particles, which can accelerate other charged particles via the Lorentz force. At high energy, the weak force and electromagnetic force are unified as a single electroweak force. </p>`
document.body.appendChild(div);

const counting = {};
const allWords = document.querySelector('#test-text')
    .textContent
    .replace(/[,.?!+-/()[\]\{\}]/g, ' ')
    .split(' ')
    .filter(string => string !== "")
    .map(word => word.toLowerCase())
    .forEach(word => {
        if (!counting[word]) counting[word] = 1;
        else counting[word]++
    })

const topThree = Object.entries(counting)
    .sort((a, b) => b[1]-a[1])
    .slice(0, 3)


console.log(topThree.map(element => element[0]))

