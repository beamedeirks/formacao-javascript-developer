const entradas = [10, 5, 50, 10, 98, 23];
//contador de chamadas
let i = 0;

function gets() {
  const valor = entradas[i];
  i++;
  return valor;
}


function print(texto) {
  console.log(texto);
}

//exportando as funcoes
module.exports = { gets, print }