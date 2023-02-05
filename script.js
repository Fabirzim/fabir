function criarAluno(nome,n1,n2){
    return{
        nome:nome,
        nota1:n1,
        nota2:n2,
        media:function(){
            return(this.nota1+this.nota2)/2
        }
    }
}

let turma=[
    criarAluno('nome',2,3),
    criarAluno('jose',3,1)
]

let aluno=turma[0]
for(let aluno of turma){
    console.log(aluno.nome+aluno.media())
}