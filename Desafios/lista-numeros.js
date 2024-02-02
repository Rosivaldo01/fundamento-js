const listasNumeros = [10, 20, 30, 40, 50,60];

// função que receba uma array de números inteiros e retorne a soma dos elementos
function soma (arr){
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i];
    }

    return total;
}

console.log(soma(listasNumeros));