function maiorNumeroVetor(vetVetor){
    maior = 0;
    for (vari = 0; i < vetVetor.length; i++){
        if (maior < vetVetor[i]){
            maior = vetVetor[i];
        }
    }
    return maior;
} 
varnumeros = [1,4,6,2,5,10,20,148,171];
maior = maiorNumeroVetor(numeros);
console.log(maior)