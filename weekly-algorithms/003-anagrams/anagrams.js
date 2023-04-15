function objLength(object) {
    return Object.keys(object).length;
}

function breakWord(word) {
    const obj = {};
    word
        .replace(/ /g, '')
        .toLowerCase()
        .split('')
        .forEach(char => {
            if (obj[char]) obj[char]++;
            else obj[char] = 1;
        })
    return obj;
}

function compareObj(obj1, obj2) {
    if (objLength(obj1) !== objLength(obj2)) return false;
    let areEqual = true;

    Object.keys(obj1).forEach(prop => {
        if (obj1[prop] !== obj2[prop]) areEqual = false;
    })
    return areEqual;
}

const word1 = 'Lapicero';
const word2 = 'Copiarle';

console.log(
    compareObj(
        breakWord(word1), 
        breakWord(word2)
    )
)