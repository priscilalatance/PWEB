function Conta() {
    var nomeCorrentista;
    var banco;
    var nrConta;
    var saldo;

    this.setnomeCorrentista = function (value) {
        this.nomeCorrentista = value;
    }
    this.getnomeCorrentista = function () {
        return this.nomeCorrentista;
    }

    this.setbanco = function (value) {
        this.banco = value;
    }
    this.getbanco = function () {
        return this.banco;
    }

    this.setnrConta = function (value) {
        this.nrConta = value;
    }
    this.getnrConta = function () {
        return this.nrConta;
    }

    this.setsaldo = function (value) {
        this.saldo = value;
    }
    this.getsaldo = function () {
        return this.saldo;
    }
}


function Corrente() {
    var saldoEspecial;
    this.setsaldoEspecial = function (value) {
        this.saldoEspecial = value;
    }
    this.getsaldoEspecial = function (value) {
        return this.saldoEspecial;
    }
}

function Poupanca() {
    var juros;
    var dtVecto;
    this.setjuros = function (value) {
        this.juros = value;
    }
    this.getjuros = function (value) {
        return this.juros;
    }

    this.setdtVecto = function (value) {
        this.dtVecto = value;
    }
    this.getdtVecto = function (value) {
        return this.dtVecto;
    }
}

Corrente.prototype = new Conta();
Poupanca.prototype = new Conta();

var ctcorrente = new Corrente();
ctcorrente.setnomeCorrentista("Kelly");
ctcorrente.setbanco("Banco do Brasil");
ctcorrente.setnrConta("6073196");
ctcorrente.setsaldo(5000);
ctcorrente.setsaldoEspecial(1000);

var ctpoupanca = new Poupanca();
ctpoupanca.setnomeCorrentista("José Roberto");
ctpoupanca.setbanco("Banco Santander");
ctpoupanca.setnrConta("208255");
ctpoupanca.setsaldo(30000);
ctpoupanca.setjuros(200);
ctpoupanca.setdtVecto(09);

alert("Conta corrente" + " " + ctcorrente.getnomeCorrentista() + " " + ctcorrente.getbanco() + " "
    + ctcorrente.getnrConta() + " " + ctcorrente.getsaldo() + " " + ctcorrente.getsaldoEspecial());
alert("Conta poupança" + " " + ctpoupanca.getnomeCorrentista() + " " + ctpoupanca.getbanco() + " "
    + ctpoupanca.getnrConta() + " " + ctpoupanca.getsaldo() + " " + ctpoupanca.getjuros() + " " + ctpoupanca.getdtVecto());