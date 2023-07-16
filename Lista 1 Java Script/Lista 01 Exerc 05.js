var salht = 0;
var salhe = 0;
var salbruto = 0;
var salliq = 0;
var hextra = 10;
var htrab = 10;
var porc = 0;

salht = (htrab * 10);
salhe = (hextra * 15);
salbruto = salht+salhe;
porc = (salbruto * 0.1);
salliq = salbruto - porc;

console.log("O Salario Bruto é",salbruto);
console.log("O Valor da Hora Extra é",salhe);
console.log("O Valor da Hora Trabalhada é",salht);
console.log("O Salario Liquido é",salliq);
console.log("O Valor dos Impostos é",porc);