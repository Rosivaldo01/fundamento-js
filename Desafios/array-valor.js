const valores = [100, 200, 300, 400];

const somaValores = valores.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

console.log(`A soma dos valores é ${somaValores}`);