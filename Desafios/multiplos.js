const listasNumeros = [3, 6, 9, 4, 12, 2, 7];

function filtrarNumeros (arr){
    return arr.filter(num => num % 3 ===0 && num > 5); // Filtra números múltiplos de 3 e maiores que 5
}

const numeroFiltrados = filtrarNumeros(listasNumeros);

console.log(numeroFiltrados);
