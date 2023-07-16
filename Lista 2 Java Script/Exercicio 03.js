//Faça um programa que calcule o IMC da pessoa
var total=0;
var peso=120;
var altura=1.55;
var imc=0;

total = peso/(altura*altura);
var imc = total.toFixed(2);

if (imc < 18.5) {
    console.log("Abaixo do Peso",imc);  
} else if (imc >= 18.5 & imc <= 24.9) {
    console.log("Peso Normal",imc);  
} else if (imc >=25.0 & imc <= 29.9) {
    console.log("Sobrepeso",imc);  
} else if (imc >= 30.0 & imc <=39.9) {
    console.log("Obesidade 1",imc);  
} else if (imc >= 40.0 ) {
    console.log("Obesidade Grave",imc);  
} 
