const notas = [10, 6.5, 8 ,7.5];

let somaDaNotas = 0;

for (let nota of notas){
    somaDaNotas += nota;
}

const media = somaDaNotas / notas.length;

console.log (`A media das notas é: ${media}`);

