/* 
Un número narcisista (o número de Armstrong) es un número positivo que es igual a la suma de sus propios dígitos, cada uno elevado a la potencia del número de dígitos en una base dada. En este Kata, nos limitaremos a la base decimal (base 10).

Por ejemplo, tomemos el número 153 (3 dígitos), que es narcisista:

1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

y el número 1652 (4 dígitos), que no lo es:

1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

El Desafío:

Su código debe devolver verdadero o falso (no 'verdadero' y 'falso') dependiendo de si el número dado es un número narcisista en la base 10.

No se requiere la comprobación de errores para cadenas de texto u otras entradas inválidas, solo se pasarán enteros positivos no nulos válidos a la función.
*/


function narcissistic(value) {
    const digits = (value+'').split('');
    const len = digits.length;
    let sum = 0;
    for (let digit of digits) {
        sum += Math.pow(digit, len);
    }
    return sum === (value * 1);
}

console.log(narcissistic(153))
console.log(narcissistic(370))
console.log(narcissistic(9474))

console.log(narcissistic(1652))
console.log(narcissistic(3710))
console.log(narcissistic(125))
