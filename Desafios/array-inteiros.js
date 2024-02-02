const numeros = [6, 9, 12, 15, 18, 21];

console.log('Elementos do array multiplicados por 3:');

numeros.forEach( numero =>{
    const resultado = numero * 3;
    console.log(resultado);
});

const indiceNumero18 = numeros.findIndex( numero => numero === 15);

if(indiceNumero18!== -1){
    console.log(`O númeor 15 está no índice ${indiceNumero18}`)
} else{
    console.log('O númeo 18, não esta presente no array.')
}