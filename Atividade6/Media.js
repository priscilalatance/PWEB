function mediaAluno()
{
    var aluno, n1, n2, n3, media;

    aluno = prompt("Digite o nome do aluno: ");
    n1 = prompt("Digite a primeira nota do aluno: ");
    n2 = prompt("Digite a segunda nota do aluno: ");
    n3 = prompt("Digite a terceira nota do aluno: ");

    media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) / 3;
    
    return "Media do aluno: "  + media.toFixed(2);
}
alert(mediaAluno());
