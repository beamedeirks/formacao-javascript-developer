/* Faca um programa para calcular o valor de uma viagem.

Você terá 3 variaveis. Sendo elas:
1 - Preço do combustivel;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem; */

const precoCombustivel = 5.39;
const gastoMedioMoto = 40;
const distanciaViagem = 350;


const valorViagem = (distanciaViagem / gastoMedioMoto) * precoCombustivel;

console.log(valorViagem.toFixed(2))