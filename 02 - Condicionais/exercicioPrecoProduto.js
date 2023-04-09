/*3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço 
normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o 
cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;*/


const preco = 50;
const condicaoPgto = 4;
let valorFinal = 0;

if (condicaoPgto == 1) {
  valorFinal = preco - (preco * 0.1);
  console.log('Com o pagamento no débito, o valor final será de R$', valorFinal);
} else if (condicaoPgto == 2) {
  valorFinal = preco - (preco * 0.15);
  console.log('Com o pagamento á vista/pix, o valor final será de R$', valorFinal);
} else if (condicaoPgto == 3) {
  console.log('Com o pagamento parcelado em 2x, o valor final será de R$', preco);
} else if (condicaoPgto == 4) {
  valorFinal = preco + (preco * 0.1)
  console.log('Com o pagamento parcelado acima de 2x, o valor final será de R$', valorFinal)
}