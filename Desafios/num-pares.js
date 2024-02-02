function filtraNumerosPares (arr) {
    return arr.filter(num => num % 2 === 0); // Filtrando apenas números pares.
}
const numArray = [1, 2, 3, 4, 5, 6];
const listaNumerosPares = filtraNumerosPares(numArray);
console.log(listaNumerosPares);