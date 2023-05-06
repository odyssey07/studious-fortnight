/* 
Oh no, nuestro objeto Math fue "accidentalmente" restablecido. ¿Puedes volver a implementar algunas de esas funciones? Podemos asegurar que solo se pasan números no negativos como argumentos. Por lo tanto, no es necesario considerar cosas como indefinido, nulo, NaN, números negativos, cadenas, y así sucesivamente.

Aquí hay una lista de funciones que necesitamos:

    ● Math.round()
    ● Math.ceil()
    ● Math.floor()

*/

function mathRound(number) {
    let partesNumero = (number + "").split('.');
    return partesNumero[0]*1 + (partesNumero[1][0]*1 >= 5 ? 1 : 0)
}

function mathCeil(number) {
    return (number + "").split('.')[0]*1+1
}

function mathFloor(number) {
    return (number + "").split('.')[0]*1
}

console.log("Original", 23.5666)
console.log("Round", mathRound(23.5666))
console.log("Floor", mathFloor(23.5666))
console.log("Ceil", mathCeil(23.5666))