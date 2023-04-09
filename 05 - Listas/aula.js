
const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

let somaAcc = 0;

for (let i=0; i < notas.length; i++){
  const nota = notas[i];
  somaAcc = somaAcc + nota;
}

const media = somaAcc / notas.length;
console.log(media);
