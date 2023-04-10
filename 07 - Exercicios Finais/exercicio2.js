/*
2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
Imprima o maior número par e o menor número impar.

     Exemplo:
         Entrada:
            5
            3
            4
             1
            10
             8

         Saída:
             Maior número par: 10
             Menor número impar: 1
             */
const { gets, print } = require('./funcoes-auxiliares-ex2');

const n = gets();
let maiorNumeroPar = 0;
let menorNumeroImpar = 0;

for (let i = 0; i < n; i++) {
  const numero = gets();
  if (numero % 2 === 0) { //se for numero par
    if (numero > maiorNumeroPar) { // se for maior que o ultimo numero maior
      maiorNumeroPar = numero;
    }
  } else {
    if (menorNumeroImpar === 0) {
      menorNumeroImpar = numero;
    } else if (numero < menorNumeroImpar) {
      menorNumeroImpar = numero;
    }
  }

}

print('Maior numero par: ' + maiorNumeroPar);
print('Menor numero impar: ' + menorNumeroImpar);
