var n1 = 10; 
var n2 = 5; 
var opcao = 1; 

switch(opcao){ 
    case 1: 
    console.log("Resultado: "+(n1*n2)); 
    break; 

    case 2: 
    console.log("Resultado: "+(n1/n2)); 
    break; 
    
    case 3: 
    console.log("Resultado: "+(n1+n2)); 
    break; 
    
    case 4: 
    console.log("Resultado: "+(n1-n2)); 
    break; 
    
    default: console.log("Valor inválido, digite um valor válido."); break; 
}