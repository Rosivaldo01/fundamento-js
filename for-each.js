const notas = [10, 6.5, 8, 7.5];

let somaSomaDasNotas = 0;

notas.forEach(function(nota){
    somaSomaDasNotas += nota;
})

const media = somaSomaDasNotas/ notas.length;

console.log (`A media das nota é ${media}`)