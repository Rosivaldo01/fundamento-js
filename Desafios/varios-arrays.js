function cacatArray (...arrays){
    return [].concat(...arrays); // operador spread para concatenar os arrays
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7];

const arrayConcatendados = cacatArray(arr1, arr2, arr3);

console.log(arrayConcatendados);