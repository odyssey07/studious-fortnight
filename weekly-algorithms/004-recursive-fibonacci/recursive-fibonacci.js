/* function fibTerm(number) {
    const sequence = [0, 1]

    for (let i = 2; i < number; i++) {
        sequence.push(
            sequence[i-1] + sequence[i-2]
        );
    }

    return sequence[number];
}
*/

function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(5))
