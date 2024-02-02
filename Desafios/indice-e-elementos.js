const listas = ['Jornal', 'Revistas', 'Livros'];

function indeceEElementos (arr){
    for (i = 0; i < listas.length; i++){
        console.log(`Indice ${i} elemento ${arr[i]}`);
    }
}

indeceEElementos(listas);