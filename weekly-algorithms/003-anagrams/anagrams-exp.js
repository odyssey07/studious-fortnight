// L O N G I T U D   O B J E T O
/*
Con esta función obtengo la cantidad de elementos en un objeto. 
*/
function objLength(object) {
    return Object.keys(object).length;
}

//🌲
/* const test1 = {
    name: "Goku",
    age: 37,
    race: "Saiyan",
    planet: "Earth"
}

console.log(objLength(test1));
console.log(test1); \
*/





// C O N T A R   O C U R R E N C I A S
/* 
Con esta función voy a crear un objeto cuyas propiedades sean las letras
y los valores sean los números de occurrencia de cada letra.
*/
function breakWord(word) {
    // Objeto vacío para ir rellenando
    const obj = {};

    // Array con todos los caracteres separados, en minuscula y sin espacios
    const wordArray = word
        .replace(/ /g, '')
        .toLowerCase()
        .split('');

    // console.log(wordArray); //🧨

    for (let char of wordArray) {
        // console.log(char); //🧨
        if (obj[char]) {
            obj[char]++;
            // console.log("Estaba", obj); //🧨
        }
        else {
            obj[char] = 1
            // console.log("No estaba", obj); //🧨
        }
    }
    return obj;
}

//🌲
/* const test2 = "Ejercicio";
console.log(breakWord(test2)) */



// C O M P A R A R   O B J E T O S

function compareObj(obj1, obj2) {
    if (objLength(obj1) !== objLength(obj2)) return false;
    
    // Estado inicial, por defecto
    let areEqual = true;

    for (let prop of Object.keys(obj1)) {
        // console.log(prop) //🧨
        // console.log(obj1[prop], obj2[prop]); // 🧨
        if (obj1[prop] !== obj2[prop]) areEqual = false;
    }

    return areEqual;
}

//🌲
/* const test3a = {a: 1, b: 0, c: 4, d: 6};
const test3b = {a: 1, b: 0, c: 5, d: 6}

compareObj(test3a, test3b) */




/* 
Lo más lógico sería incluso verificar si tienen distinta longitud, las palabras
*/


const word1 = 'Tom Marvolo Riddle';
const word2 = 'I am Lord Voldemort';

const brokenWord1 = breakWord(word1);
const brokenWord2 = breakWord(word2); 

console.log(
    compareObj(
        brokenWord1,
        brokenWord2
    )
)