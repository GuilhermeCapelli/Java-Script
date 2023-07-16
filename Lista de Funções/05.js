function maiorNumero(N1,N2,Aux){
    if (N1 > N2) {
        Aux = N1;
    } else {
        Aux = N2;        
    }
    return Aux;
}
console.log(maiorNumero(50, 20)); 
