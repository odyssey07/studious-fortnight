/* 
ACLARACIONES
Las soluciones al enunciado son #1 y #4. Pero #3 es la más útil.
Los returns están hechos para mostrar el resultado "agradablemente", no para aplicarlo. Excepto en la version #3.

ENUNCIADO
Crea una función que reciba una matriz de números y devuelva la suma de cada fila y columna.


~March 30, 2023~
*/



// # 1
// T O D A S  L A S   F I L A S   Y   C O L U M N A S 

const linearSum = (matrix) => {
    const rowSum = []; 
    for (let i=0; i<matrix.length; i++) {
        rowSum.push(0);
        for (let j=0; j<matrix[0].length; j++) {
            rowSum[i] += matrix[i][j];
        }
    }

    const columnSum = [];
    for (let j=0; j<matrix[0].length; j++) {
        columnSum.push(0);
        for (let i=0; i<matrix.length; i++) {
            columnSum[j] += matrix[i][j];
        }
    }

    return ['Rows', ...rowSum, 'Columns', ...columnSum]
    // return [rowSum, columnSum]
}



// # 2
// E L I G E :   F I L A S   O   C O L U M N A S

const linearSumV2 = (matrix, getRows=true) => {
    let vectorSum = [];
    for (let i=0; i<(getRows ? matrix : matrix[0]).length; i++) {
        vectorSum.push(0);
        for (let j=0; j<(getRows ? matrix[0] : matrix).length; j++) {
            const newElement = matrix[getRows ? i : j][getRows ? j : i];
            vectorSum[i] += newElement;
        }
    }
    return [getRows ? "Rows" : "Columns", ...vectorSum];
    // return vectorSum;
}



// #3
// E L I G E :   N U M E R O   D E   F I L A / C O L U M N A
// La fila 1 es la fila 0...
const linearSumV3 = (matrix, number, doRows=true) => {
    if (doRows) 
        return matrix[number - 1]
            .reduce((acc, cur) => acc + cur)
    else 
        return matrix
            .map(element => element[number - 1])
            .reduce((acc, cur) => acc + cur)    
}



// # 4
// T O D A S  L A S   F I L A S   Y   C O L U M N A S 

const linearSumV4 = (matrix) => {
    const allSums = {};
    
    for (let i=0; i<matrix.length; i++) {
        allSums[`row${i}`] = matrix[i].reduce((acc, cur) => acc + cur);
    }
    for (let j=0; j<matrix[0].length; j++) {
        allSums[`col${j}`] = matrix
            .map(element => element[j])
            .reduce((acc, cur) => acc + cur) 
    }
    return allSums;
}



// 📊📉📈
// T E S T S 

// Definciión de matrices de prueba con resultados incluidos
const matrix = [
    [3, 4, 5], // 12
    [2, 2, 3], // 7
    [6, 9, 0], // 15
    [0, 0 ,0]  // 0
  //11 15  8
];


const matrix2 = [
    [3, 4, 5, 5, 6], // 23
    [2, 2, 3, 9, 9], // 25
    [6, 9, 0, 1, 1], // 17
    [0, 0 ,0, 3, 3]  // 6
  //11 15  8 18  19
];

// Ejecuciones

//#1
console.log("V E R S I O N - 1")
console.log(linearSum(matrix));
console.log(linearSum(matrix2));
console.log('\n\n')

//#2
console.log("V E R S I O N - 2")
console.log("First matrix")
console.log(linearSumV2(matrix));
console.log(linearSumV2(matrix, false));
console.log("Second matrix")
console.log(linearSumV2(matrix2));
console.log(linearSumV2(matrix2, false));
console.log('\n\n')

//#3
console.log("V E R S I O N - 3")
console.log("First matrix")
console.log("Row 1 | ", linearSumV3(matrix, 1))
console.log("Row 3 | ", linearSumV3(matrix, 3))
console.log("Col 2 | ", linearSumV3(matrix, 2, false))
console.log("First matrix")
console.log("Row 1 | ", linearSumV3(matrix2, 1))
console.log("Row 3 | ", linearSumV3(matrix2, 3))
console.log("Col 2 | ", linearSumV3(matrix2, 2, false))
console.log('\n\n')

//#4
console.log("V E R S I O N - 4")
console.log(linearSumV4(matrix))
console.log(linearSumV4(matrix2))



