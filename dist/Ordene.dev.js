"use strict";

var prompt = require('prompt-sync')(); // função para exibir o vetor
// é passado o vetor como parâmetro e exido o vetor, 
// nesse caso não há necessidade de retornar, pois só quero exibir.


function ExibeVetor(vetor) {
  for (var i = 0; i < vetor.length; i++) {
    console.log(vetor[i]);
  }
} // Função de ordenação, passar o vetor como parâmetro e o
// tipo de ordenação que será 
//1 para ordenação crescente 
//2 para ordenação decrescente


function OrdenaVetor(vetor, tipoDeOrdenacao) {
  /*Faço primeiro a validação do tipo de ordenação, se caso não for a odernação selecionada
  o sistema irá desconsiderar tudo que está dentro desse primeiro if e irá para o else lá em baixo.*/
  if (tipoDeOrdenacao == 1) {
    /*O primeiro for é para garantir que o vetor irá comparar todos os valores */
    for (var i = 0; i < vetor.length; i++) {
      /*O segundo for é para correr o vetor e utilizar a comparação com a posição exe: */
      for (var j = 1; j < vetor.length; j++) {
        /*
        vetor[0] > vetor[1]
        vetor[1] > vetor[2]
        ...*/
        if (vetor[j - 1] > vetor[j]) {
          //Supondo que o vetor[0] = 6 e o vetor[1] = 2   
          var aux = vetor[j - 1]; // aux = vetor[0] = 6

          vetor[j - 1] = vetor[j]; // vetor[0] = vetor[1] = 2

          vetor[j] = aux; // vetor[1] = aux = 6

          /* Resumindo, os valores ficaram:
          vetor[0] = 2 
          vetor[1] = 6
          --------------------------------
          no próximo loop ele ira comparar
          vetor[1] > vetor[2] 
          ....                  
          
          */
        }
      }
    }
    /*O sistema cairá no else caso o primeiro if tenha sido ignorado
    dentro do else a uma segunda validação para verificar se tbm é a opção correta, o 
    usuário pode ter digitado números diferentes de 1 e 2, então é preciso tratar isso,
    informando que o número é inválido.*/

  } else if (tipoDeOrdenacao == 2) {
    for (var _i = 0; _i < vetor.length; _i++) {
      for (var _j = 1; _j < vetor.length; _j++) {
        /*todo o sistema segue quase a mesma lógica do for realizado lá em cima, muda apenas a lógica de comparação do if
        inverto a posição dos vetores.
        em vez de ser vetor[0] > vetor[1]
        a lógica agora é vetor[1] > vetor[0]*/
        if (vetor[_j] > vetor[_j - 1]) {
          var _aux = vetor[_j - 1];
          vetor[_j - 1] = vetor[_j];
          vetor[_j] = _aux;
        }
      }
    } // esse else é caso o número que ele digitou seja inválido.

  } else console.log("Opção de ordenação não é válida. Foi retornado o vetor padrão.");

  return vetor;
}

var vetor = new Array(3); // criei um vetor com 3 posições

var ordenaVetor; // criei a variável que irá receber o tipo de ordenação sendo 1 para crescente e 2 para decrescente.

/** Criei um loop para que o usuário não consiga sair enquanto não digitar o número 1 ou 2
 * para diminuir a chance de criar um erro de execução.
 */

do {
  console.log("Informe o tipo de odernação que deseja:");
  console.log("1-para crescente");
  console.log("2-para decrescente:");
  ordenaVetor = prompt();
} while (ordenaVetor > 2 || ordenaVetor < 1); // enquanto usuário digitar algo diferente de 1 ou 2 o sistema repete esse código dentro do
//do {}while();

/** Criei um laço de repetição para preencher o vetor */


for (var i = 0; i < vetor.length; i++) {
  vetor[i] = prompt("Informe o " + (i + 1) + " número do vetor: ");
}
/**estou usando a variável vetor já existente para receber o retorno da função com o vetor ordenado.
 * o que fiz na prática seria, passei um borracha no vetor antigo e escrevi de novo nele, mas com o vetor organizado
 * na função foi passado o vetor e o tipo de ordenação, ficaria mais ou menos assim se fosse olhar no teste de mesa:
 * vetor = [1,9,5]
 * ordenaVetor = 1;
 * OrdenaVetor(vetor, ordenaVetor) é a mesma coisa que imagina como se estivesse assim: 
 * OrdenaVetor([1,9,5], 1); 
 */


vetor = OrdenaVetor(vetor, ordenaVetor); //chamo a minha função que exibe os valores do vetor com o novo vetor ordenado.

ExibeVetor(vetor);
Recolher;