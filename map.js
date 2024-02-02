const notas = [10, 9.5, 8, 7, 6];

// const notasAtualzadas = notas.map(function(nota){
//     return nota +1;
// })

//                                                    operdor ternário
const notasAtualzadas = notas.map((nota) => nota +1 >= 10 ? 10 : nota +1);

console.log(notasAtualzadas);