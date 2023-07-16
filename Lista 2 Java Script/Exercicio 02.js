var n1 = 7;
var n2 = 10;
var n3 = 5;


if (n1 < n2 & n1 < n3 & n2 < n3) {
    console.log("o Menor Numero é",n1);
    console.log("o Segundo Numero é",n2);
    console.log("o Terceiro Numero é",n3);
} 

if (n2 < n1 & n2 < n3 & n3 > n1) {
    console.log("o Menor Numero é",n2);
    console.log("o Segundo Numero é",n1);
    console.log("o Terceiro Numero é",n3);
}

if (n3<n1 & n3<n2 & n2>n1) {
    console.log("o Menor Numero é",n3);
    console.log("o Segundo Numero é",n1);
    console.log("o Terceiro Numero é",n2);
}