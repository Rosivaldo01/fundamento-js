let matriz = [];
let valorIncial = 1;

for (let i = 0; i < 3; i++){
    let linha = [];
    for (let j = 0; j <3; j++){
        linha.push(valorIncial++);
    }
    matriz.push(linha);
}

console.log('Matriz de duas dimensões:');
console.log(matriz);
matriz.forEach(row => console.log(row)); // visualização em linhas e colunas
console.log('Elemento na segunda linha e terceira coluna:', matriz[1][2]);
matriz[2][1] = 15;
console.log('Matriz após adição de elemento:', matriz);