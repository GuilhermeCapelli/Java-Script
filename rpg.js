function rodarAtribustos (){

}

function mensagemCompleta(mensagem){
        console.log ("..........................");
        console.log (mensagem);
        console.log ("...........................")
}

function ataca(atacante, vitima){
    if (atacante.Forca !=undefined && vitima.vida !=undefined)
    {
        mensagemCompleta (atacante.nome+"Atacou o "+vitima.nome);
        dano = atacante.atacar
        vitima.vida = vitima.vida - dano;
        mensagemCompleta (atacante.nome+"Causou"+dano+"de dabi ao"+vitima.nome+"que ficou com"+vitima.vida);
        
    }
}
const Player1 = {
    nome:"Rodolfo",
    vida: 100,
    velocidade:5,
    Forca:5,
    inteligencia:5,
    sorte:4,

        correr(){
               return rodarAtribustos(this.sorte,this.velocidade); 
        },
        andar(){
                return rodarAtribustos (this.sorte,parseInt(this.velocidade/2));
        },
        falar(mensagem){
                mensagemCompleta("O"=this.nome+"falou"+mensagem);
        },
        atacar(){
                return rodarAtribustos(this.sorte,this.Forca);
        },
        persuadir(){
                return rodarAtribustos(this.sorte,this.inteligencia);

        },
}

const Player2 = {
    nome:"20Matar",
    vida: 15,
    velocidade:9,
    Forca:10,
    inteligencia:3,
    sorte:2,

        correr(){
               return rodarAtribustos(this.sorte,this.velocidade); 
        },
        andar(){
                return rodarAtribustos (this.sorte,parseInt(this.velocidade/2));
        },
        falar(mensagem){
                console.log("O"=this.nome+"falou"+mensagem);
        },
        atacar(){
                return rodarAtribustos(this.sorte,this.Forca);
        },
        persuadir(){
                return rodarAtribustos(this.sorte,this.inteligencia);

        },
}