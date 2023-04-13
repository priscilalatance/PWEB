alert("Preparado para esse desafio?");

var numJogador = parseFloat(prompt("Digite a sua escolha: \n1- Pedra\n2- Papel\n3- Tesoura"));

while(numJogador < 1 || numJogador > 3) {
    var numJogador = parseFloat(prompt("Digite a sua escolha: \n1- Pedra\n2- Papel\n3- Tesoura"));
}

var comp = Math.floor((3 * Math.random()) + 1);

jog = Escolha(numJogador);
escComp = Escolha(comp);

if(numJogador === comp) {
    alert("Empatou!");
}
else if(numJogador == 1) {
    if(comp == 2) {
        alert("Jogador: " + jog + "\nComputador: " + escComp + "\nComputador venceu!");
    }
    else {
        alert("Jogador: " + jog + "\nComputador: " + escComp + "\nJogador venceu!");
    }
}
else if(numJogador == 2) {
    if(comp == 1) {
        alert("Jogador: " + jog + "\nComputador: " + escComp + "\nJogador venceu!");
    }
    else {
        alert("Jogador: " + jog + "\nComputador: " + escComp + "\nComputador venceu!");
    }
}
else {
    if(numJogador == 1) {
        alert("Jogador: " + jog + "\nComputador: " + escComp + "\nComputador venceu!");
    }
    else {
        alert("Jogador: " + jog + "\nComputador: " + escComp + "\nJogador venceu!");
    }
}

function Escolha(escolha) {
    resultado = escolha == 1 ? "Pedra" : escolha == 2 ? "Papel" : "Tesoura";
    return resultado;
}