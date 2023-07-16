function rodarDado(){
    min = Math.ceil(1); 
    max = Math.floor(21);
    numero =  Math.floor(Math.random() * (max - min) + min);
    returnnumero
}
mensagem = "O numero obtido foi "+rodarDado();
console.log(mensagem)