class Pessoa {

  //atributo
  nome;
  idade;
  anoDeNascimento;

  //receber por parâmetro
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2022 - idade;
  }

  descrever() {
    console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`);
  }

}

/*const pessoa1 = new Pessoa('Geovana', 18);

pessoa1.descrever();
console.log(pessoa1);*/

function compararPessoas(p1, p2) {
  if (p1.idade > p2.idade) {
    console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
  } else if (p2.idade > p1.idade) {
    console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
  } else {
    console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
  }
}

const vitor = new Pessoa('Vitor', 25);
const renan = new Pessoa('Renan', 30);
compararPessoas(vitor,renan);


/*
const beatriz = {
  nome: 'Beatriz',
  idade : 21,
   descrever: function(){
    console.log(`Meu nome é ${this.name} e minha idade é ${this.name}`);
   }
}

beatriz.altura = 1.69;
delete beatriz.nome;

console.log(beatriz);
beatriz.descrever( 'beatriz', 21);
console.log (beatriz['nome']);*/