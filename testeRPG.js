function rodarDado(min,max){
    min = Math.ceil(min); 
    max = Math.floor(max);
    numero = Math.floor(Math.random() * (max - min) + min);
    return numero
}

function rodarAtributos(sorte, atributo){
    var maior = 0;
    for (var i=0; i < sorte; i++){
        var n1 = rodarDado(1, atributo+1);
        if(maior < n1){
            maior = n1;
        }
    }
    return maior;
}

function mensagemCompleta(mensagem){
    console.log("**********************************************");
    console.log(mensagem);
    console.log("**********************************************");
}

const Player1 = {
    nome:"Rodolfo",
    velocidade:5,
    vida: 100,
    forca: 6,
    inteligencia: 5,
    sorte: 4,
    correr(){
        return rodarAtributos(this.sorte,this.velocidade);
    },
    andar(){
        return rodarAtributos(this.sorte,parseInt(this.velocidade/2)); 
    },
    falar(mensagem){
        mensagemCompleta("O "+this.nome+" falou : "+mensagem);
    },
    atacar(){
        return rodarAtributos(this.sorte,this.forca);
    },
    persuadir(){
        return rodarAtributos(this.sorte,this.inteligencia);
    }
}

const Player2 = {
    nome:"20matar70correr",
    velocidade:9,
    vida: 150,
    forca: 10,
    inteligencia: 3,
    sorte: 2,
    correr(){
        return rodarAtributos(this.sorte,this.velocidade);
    },
    andar(){
        return rodarAtributos(this.sorte,parseInt(this.velocidade/2)); 
    },
    falar(mensagem){
        mensagemCompleta("O "+this.nome+" falou : "+mensagem);
    },
    atacar(){
        return rodarAtributos(this.sorte,this.forca);
    },
    persuadir(){
        return rodarAtributos(this.sorte,this.inteligencia);
    }
}

const pocao_cura1 = {
    nome: "Poção de Vida",
    peso: 2,
    capacidade: 5,
    tipo: "Vida",
    guardar(){
        
    },
    jogarFora(){

    },
    usar(entidade){
        if (entidade.nome != undefined){
            mensagemCompleta(entidade.nome + " usou "+this.nome+" e ganhou "+this.capacidade+" pontos de "+this.tipo);
            if (this.tipo == "Força"){
                entidade.forca = entidade.forca + this.capacidade;
            }else if (this.tipo == "Vida"){
                entidade.vida = entidade.vida + this.capacidade;
            }else if (this.tipo == "Inteligencia"){
                entidade.inteligencia = entidade.inteligencia + this.capacidade;
            }else if (this.tipo == "Sorte"){
                entidade.sorte = entidade.sorte + this.capacidade;
            }else if (this.tipo == "Velocidade"){
                entidade.velocidade = entidade.velocidade + this.capacidade;
            }
        }

    }
}

const item1 = {
    nome: "Graveto",
    peso: 1,
    guardar(){
        
    },
    jogarFora(){
        
    },
    usar(entidade){
        if (entidade.nome != undefined){
            mensagemCompleta(entidade.nome + " usou "+this.nome);
        }
    }
}

const pocao_forca = {
    nome: "Poção de Força",
    peso: 2,
    capacidade: 100,
    tipo: "Força",
    guardar(){
        
    },
    jogarFora(){

    },
    usar(entidade){
        if (entidade.nome != undefined){
            mensagemCompleta(entidade.nome + " usou "+this.nome+" e ganhou "+this.capacidade+" pontos de "+this.tipo);
            if (this.tipo == "Força"){
                entidade.forca = entidade.forca + this.capacidade;
            }else if (this.tipo == "Vida"){
                entidade.vida = entidade.vida + this.capacidade;
            }else if (this.tipo == "Inteligencia"){
                entidade.inteligencia = entidade.inteligencia + this.capacidade;
            }else if (this.tipo == "Sorte"){
                entidade.sorte = entidade.sorte + this.capacidade;
            }else if (this.tipo == "Velocidade"){
                entidade.velocidade = entidade.velocidade + this.capacidade;
            }
        }
    }
}




function atacar(atacante, vitima){
    if (atacante.forca != undefined && vitima.vida != undefined){
        
        mensagemCompleta(atacante.nome + " atacou o "+ vitima.nome);
        dano = atacante.atacar();
        vitima.vida = vitima.vida - dano;
        mensagemCompleta(atacante.nome + " causou "+dano+" de dano ao "+vitima.nome+" que ficou com "+vitima.vida+ " pontos de vida");
    }
}



//console.log(Player1.nome)
atacar(Player1,Player2);
pocao_cura1.usar(Player2);
pocao_forca.usar(Player2);
atacar(Player2,Player1);


