let inforProva;
let alunoNome;
let alunoNota1;
let alunoNota2;
let listAluno = []
while(inforProva != 3){
    inforProva = Number(prompt(`Olá Alunos(A):
    Para  fazer um cadastro no site digite: 1
    Para saber se passou na prova digite :2 
    Digite 3 para cancelar o cadastro`))
    
    if (inforProva == 1 )
    {
    alunoNome = prompt("Informe seu nome")
    alunoNota1 = Number(prompt("Informe a nota da primeira prova"))
    alunoNota2 = Number(prompt("Informe a nota da segunda prova"))
       listAluno.push(`
       Perfil do Aluno(a):
       Nome: ${alunoNome}
       Nota primeira prova: ${alunoNota1}
       Nota segunda prova: ${alunoNota2}
       Média da prova : ${(alunoNota1+alunoNota2)/2} `)
       
    }
else if (inforProva ==2){
     if (listAluno.length==0)
    {
        alert("Não tem nenhum aluno cadastrado, seja o primeiro")
    }
    else if ((alunoNota1+alunoNota2)/2>=7)(
        alert(listAluno),
        alert("VOCÊ PASSOU NA PROVA PARABÉNS")
    )
    else {
        alert(listAluno),
        alert("Recuperação, informe-se com seu professor para saber que dia vai ser a recuperação")
    }
}



}


