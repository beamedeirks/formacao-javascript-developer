/*1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro 
rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê 
o valor gasto em reais para realizar este percurso.
*/


class Carros {
  //atributos
  marca;
  cor;
  gastoMedioKm;

  //uso de parametros
  constructor(marca, cor, gastoMedioKm){
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioKm = gastoMedioKm;
  }

  //método
  calcularGastoPercurso(distancia, precoCombustivel){
    return distancia * this.gastoMedioKm  * precoCombustivel;
  }

}
//instanciando a classe
const start = new Carros('honda', 'preta', 1/12);

console.log(`Gasto de R$`, start.calcularGastoPercurso(70, 5).toFixed(2));


