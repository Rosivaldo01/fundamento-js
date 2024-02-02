function executaOperacaoEmArray (array, funcaocallback){
    return array.map (funcaocallback) // Executa a função de callback em cada elemento do array
}

function dobroDoNumero (num) {
    return num * 2 // Função de exemplo para dobrar o número
}


const listaNumero = [10, 20, 30];
const listaNumeroDobrado = executaOperacaoEmArray(listaNumero, dobroDoNumero);

console.log('Lita normal');
console.log(listaNumero);
console.log ('O dobro da lista ');
console.log (listaNumeroDobrado);