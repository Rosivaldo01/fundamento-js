const numeros = [10, 20, 30, 40, 50, 60];
const numeroProcurado = 10;
let posicao = -1;

for (let i = 0; i < numeros.length; i++){
    if (numeros[i] === numeroProcurado){
        posicao = i;
        break;
    }
}

console.log(`A posição do núeor é o indice: ${posicao}`);