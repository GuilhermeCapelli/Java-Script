class Entidade{    
    constructor(nome,velocidade,vida){
        const FuncoesES = require('./EntradaSaida.js');
        this.fncES = new FuncoesES();
        const FuncoesDado = require('./dado.js');
        this.fncDado = new FuncoesDado();
        this.nome = nome;
        this.velocidade = velocidade;
        this.vida = vida;
    }

    correr(){
        return this.fncDado.rolarDados(this.sorte,this.velocidade);
    }

    andar(){
        return this.fncDado.rolarDados(this.sorte,parseInt(this.velocidade/2));
    }

    falar(mensagem){
        this.fncES.mensagemCompleta(this.nome+" falou: "+mensagem);
    }
}

module.exports = Entidade;
