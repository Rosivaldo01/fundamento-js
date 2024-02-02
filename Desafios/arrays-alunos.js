const nomesTurmaA = [
    'João Silva',
    'Maria Santos',
    'Pedro Almeida'
  ];
  
  const nomesTurmaB = [
    'Carlos Oliveira',
    'Ana Souza',
    'Lucas Fernandes'
  ];
//                               unindo os arrays das turmas A e B em um único array    
const todosAlunos = nomesTurmaA.concat(nomesTurmaB);
//                                  buscando um aluno específico na turma.
const alunoProcurado = todosAlunos.find(nome => nome ==="Rosivaldo");
if(alunoProcurado){
    console.log('Aluno encontrado',alunoProcurado);
}else{
    console.log('Alnuno não encontrado.')
}