//boolean - true/false

const numero = 0;

if (numero == 0) {
  console.log("Numero é inválido!")
} else if (numero % 2 == 0) {
  console.log("Numero é par!")
} else {
  console.log("Numéro é impar!")
}


/* Faca um programa para calcular o valor de uma viagem.

Você terá 5 variaveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - Tipo de combustível que esta na sua moto;
2 - Gasto médio de combustível da moto por KM;
3 - Distância em KM da viagem; */


const PrecoEtanol = 2.19;
const PrecoGasolina = 5.19;
const TipoCombustivel = 'etanol';
const GastoMedioMoto = 40;
const DistanciaViagem = 350;

if (TipoCombustivel == 'gasolina') {
  const ValorViagemGasolina = (DistanciaViagem / GastoMedioMoto) * PrecoGasolina;
  console.log('Com', TipoCombustivel,'a viagem terá um gasto de R$', ValorViagemGasolina.toFixed(2))
} else if (TipoCombustivel == 'etanol') {
  const ValorViagemEtanol = (DistanciaViagem / GastoMedioMoto) * PrecoEtanol;
  console.log('Com', TipoCombustivel, 'a viagem terá um gasto de R$', ValorViagemEtanol.toFixed(2))
} else {
  console.log('Tipo de combustivel inválido!')
}


