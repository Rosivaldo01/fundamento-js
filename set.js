const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];
// Utilizamos essa regra ao nosso favor para eliminar as duplicatas de um array
// const nomesAtualizados = new Set(nomes);
const nomesAtualizados = [...new Set(nomes),"Rosivaldo"];

// const listaNomesAtualizados = [...nomesAtualizados, "Rosivaldo"];

console.log(nomesAtualizados);
// console.log(listaNomesAtualizados);