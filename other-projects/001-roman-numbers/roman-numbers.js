/* 
ENUNCIADO
Crea una función que reciba un número entero y devuelva una cadena de texto que represente el número en notación 
romana.

~April 1, 2023
*/


// V E R S I O N   # 1

function toRomanNotation(number) {
    if (number < 0 || number > 3999) return

    const posMap = (l, pos) => ["",
        `${l[0]}`,
        `${l[0]}${l[0]}`,
        `${l[0]}${l[0]}${l[0]}`,
        `${l[0]}${l[1]}`,
        `${l[1]}`,
        `${l[1]}${l[0]}`,
        `${l[1]}${l[0]}${l[0]}`,
        `${l[1]}${l[0]}${l[0]}${l[0]}`,
        `${l[0]}${l[2]}`,
    ][pos];

    const levels = [
        ['I', 'V', 'X'],
        ['X', 'L', 'C'],
        ['C', 'D', 'M'],
        ['M', '', '']
    ]

    const numStr = number + '';
    let romanNumber = '';
    for (let i = 0; i < numStr.length; i++) {
        const value = numStr[numStr.length - 1 - i] * 1;
        romanNumber = posMap(levels[i], value) + romanNumber;
    }

    return romanNumber || 'Z';
}



// V E R S I O N   # 2

function toRomanNotation2(number) {
    
    if (number < 0 || number > 3999) return

    const posMap = (l, pos) => ["",
        `${l[0]}`,
        `${l[0]}${l[0]}`,
        `${l[0]}${l[0]}${l[0]}`,
        `${l[0]}${l[1]}`,
        `${l[1]}`,
        `${l[1]}${l[0]}`,
        `${l[1]}${l[0]}${l[0]}`,
        `${l[1]}${l[0]}${l[0]}${l[0]}`,
        `${l[0]}${l[2]}`,
    ][pos];

    const levels = [
        ['I', 'V', 'X'],
        ['X', 'L', 'C'],
        ['C', 'D', 'M'],
        ['M', '', '']
    ]

    return (number + '')
        .split('')
        .reverse()
        .map((element, i) => posMap(levels[i], element * 1))
        .reverse()
        .reduce((acc, cur) => acc + cur) 
        || 'Z'
}



// V E R S I O N   # 1 b

function toRomanNotationB(number) {
    
    if (number < 0 || number > 3999999) return

    const posMap = (l, pos) => ["",
        `${l[0]}`,
        `${l[0]}${l[0]}`,
        `${l[0]}${l[0]}${l[0]}`,
        `${l[0]}${l[1]}`,
        `${l[1]}`,
        `${l[1]}${l[0]}`,
        `${l[1]}${l[0]}${l[0]}`,
        `${l[1]}${l[0]}${l[0]}${l[0]}`,
        `${l[0]}${l[2]}`,
    ][pos];

    const levels = [
        ['I', 'V', 'X'],
        ['X', 'L', 'C'],
        ['C', 'D', 'M'],
        ['M', 'V̅', 'X̅'],
        ['X̅', 'L̅', 'C̅'],
        ['C̅', 'D̅', 'M̅'],
        ['M̅', '', '']
    ]

    const numStr = number + '';
    let romanNumber = '';
    for (let i = 0; i < numStr.length; i++) {
        const value = numStr[numStr.length - 1 - i] * 1;
        romanNumber = posMap(levels[i], value) + romanNumber;
    }

    return romanNumber || 'Z';
}



// V E R S I O N   # 2 b

function toRomanNotation2B(number) {
    
    if (number < 0 || number > 3999999) return

    const posMap = (l, pos) => ["",
        `${l[0]}`,
        `${l[0]}${l[0]}`,
        `${l[0]}${l[0]}${l[0]}`,
        `${l[0]}${l[1]}`,
        `${l[1]}`,
        `${l[1]}${l[0]}`,
        `${l[1]}${l[0]}${l[0]}`,
        `${l[1]}${l[0]}${l[0]}${l[0]}`,
        `${l[0]}${l[2]}`,
    ][pos];

    const levels = [
        ['I', 'V', 'X'],
        ['X', 'L', 'C'],
        ['C', 'D', 'M'],
        ['M', 'V̅', 'X̅'],
        ['X̅', 'L̅', 'C̅'],
        ['C̅', 'D̅', 'M̅'],
        ['M̅', '', '']
    ]

    return (number + '')
        .split('')
        .reverse()
        .map((element, i) => posMap(levels[i], element * 1))
        .reverse()
        .reduce((acc, cur) => acc + cur) || 'Z'
}



// 📊📉📈
// T E S T S 

console.log(toRomanNotation2(15));
console.log(toRomanNotation2(259));
console.log(toRomanNotation2(0));