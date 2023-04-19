var element= document.getElementById('pesquisa');
const quantidadePessoa = 45;
var pessoas = [];
var contador = 0;

do{
    var idade = Number(prompt("Infome a idade: "));
    var sexo = Number(prompt("Qual o sexo: \n1- Feminino \n2- Masculino"));
    var opiniao = Number(prompt("Qual sua avaliação do filme: \n1- Ótimo \n2- Bom \n3- Regular \n4- Péssimo"));

    pessoas.push({idade, sexo, opiniao});

    contador++;

} while(contador < quantidadePessoa);


var idades = pessoas.map((pessoa) => pessoa.idade);

function idadesMedia(idades) {
    var soma = 0;
    for(var x in idades)
        soma += idades[x];

    return soma / idades.length;
}

function menorIdade(idades) {
    return Math.min.apply(null, idades);
}

function maiorIdade(idade) {
    return Math.max.apply(null, idades);
}

var opinioes = pessoas.map((pessoa) => pessoa.opiniao);
function opiniaoPessimo(opinioes) {
    x = 0;
    opinioes.forEach(opiniao => {
        if(opiniao === 4){
            x++;
        }
    }); 
    return x;
}

function porcentagemBomOtimo(opinioes) {
    x = 0;
    opinioes.forEach(opiniao => {
        if(opiniao === 1 || opiniao === 2){
            x++;
        }
    }); 
    return (x/opinioes.length)*100;
}

var sexos = pessoas.map((pessoa) => pessoa.sexo);

function contadorMulher(sexos) {
    x = 0;
    sexos.forEach(sexo => {
        if(sexo === 1){
            x++;
        }
    }); 
    return x;
}

function contadorHomem(sexos) {
    x = 0;
    sexos.forEach(sexo => {
        if(sexo === 2){
            x++;
        }
    }); 
    return x;
}

var idadeMedia = idadesMedia(idades);
var idadeMinimo = menorIdade(idades);
var idadeMaximo = maiorIdade(idades);
var quantidadePessimo = opiniaoPessimo(opinioes);
var OtimoBom = porcentagemBomOtimo(opinioes);
var quantidadeMulher = contadorMulher(sexos);
var quantidadeHomem = contadorHomem(sexos);


element.innerHTML = 'Resultado:<br>Média idades: ' + idadeMedia + 
                    '<br>Menor idade: ' + idadeMinimo +
                    '<br>Maior idade: ' + idadeMaximo +
                    '<br>Quantidade Péssimo: ' + quantidadePessimo +
                    '<br>Porcentagem de Ótimo e Bom: ' + OtimoBom + 
                    '<br>Quantidade Mulher: ' + quantidadeMulher +
                    '<br>Quantidade Homem: ' + quantidadeHomem;
