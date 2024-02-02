const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9 ];

//                  [0]     [1]
const ListaGeral = [alunos, medias];

function exibiNomeENota (aluno){

    if(ListaGeral[0].includes(aluno)){
        //Desenstruturação
        const [alunos, medias] = ListaGeral
        const indice = alunos.indexOf(aluno);
        const mediaAluno = medias [indice];
        console.log (`${aluno} tem a média ${mediaAluno}`)
    }else{
        console.log('Estudante não encontrado na lista.')
    }
}

exibiNomeENota ("João");
console.log('___________________________________')
// Nao encontrado na base
exibiNomeENota ("Rosivaldo");