function firstNonRepeatingLetter(string) {
    string = string
        .toLowerCase()
        .replace(/[,.?!+-/()[\]\{\}]/g, ' ');

    let index = 0;

    while (index < string.length) {

        let howMany = string
            .split('')
            .filter(element => element === string[index])
            .length
        
        console.log(index, howMany);
        
        if (howMany === 1) return string[index];
        
        index++;
    }
    return '';
}

const result = firstNonRepeatingLetter('Cualquier palabra puede ir aqui. Claro.');

console.log(result);
