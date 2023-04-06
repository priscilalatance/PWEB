function operacoes()
{


    var numero1 = prompt("Digite o primeiro numero: ");
    var numero2 = prompt("Digite o segundo numero: ");

    return "Soma dos dois: " + (parseFloat(numero1) + parseFloat(numero2)) + "\n" +
    "Subtração do primeiro pelo segundo: " + (parseFloat(numero1) - parseFloat(numero2)) + "\n" +
    "Produto dos dois: " + (parseFloat(numero1) * parseFloat(numero2)) + "\n" +
    "Divisao do primeiro pelo segundo: " + (parseFloat(numero1) / parseFloat(numero2)) + "\n" +
    "Resto da divisao do primeiro pelo segundo: " + (parseFloat(numero1) % parseFloat(numero2));

}

alert(operacoes());