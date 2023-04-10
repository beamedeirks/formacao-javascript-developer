// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;

const n = gets();
let maiorNumeroPar = 0;
let menorNumeroImpar = 0;

for (let i = 0; i < n; i++) {
  const numero = parseInt(gets());

  if (numero % 2 == 0) {
    if (numero > maiorNumeroPar) {
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

// TODO: Imprima as saídas conforme o enunciado deste desafio.
print('Maior numero par: ' + maiorNumeroPar);
print('Menor numero impar: ' + menorNumeroImpar);