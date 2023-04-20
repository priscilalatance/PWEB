const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const numero3 = document.getElementById("numero3");

var numeroMaior;
var ordemCrescente;

function maiorNumero() {
    if(parseInt(numero1.value) > parseInt(numero2.value) && parseInt(numero1.value) > parseInt(numero3.value)){
        numeroMaior = parseInt(numero1.value);
    }
    else if (parseInt(numero2.value) > parseInt(numero3.value) && parseInt(numero2.value) > parseInt(numero3.value)){
        numeroMaior = parseInt(numero2.value);
    }
    else {
        numeroMaior = parseInt(numero3.value);
    }

    alert("Número Maior: " + numeroMaior);

}

function ordenacaoCrescente(){
    ordemCrescente = [numero1.value, numero2.value, numero3.value];

    ordemCrescente.sort((a, b) => {
        return a-b;
    });

    alert("Números na ordem Crescente: " + ordemCrescente);

}