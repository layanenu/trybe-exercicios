//QUESTAO 1 
// const a = 20;
// const b = 10;

// const adicao = a + b;
// console.log('A adição entre os elementos a e b é ' + adicao);

// const subtracao = a - b;
// console.log('A subtração entre os elementos a e b é ' + subtracao);

// const multiplicacao = a * b;
// console.log('A multiplicacao entre os elementos a e b é ' + multiplicacao);

// const divisao = a / b;
// console.log('A multiplicacao entre os elementos a e b é ' + multiplicacao);

// const modulo = a % b;
// console.log('O modulo entre os elementos a e b é ' + modulo);


//2
// const primeiroNum = 20;
// const segundoNum = 10;

// let resultado;

// if (primeiroNum > segundoNum) {
//     resultado = 'O primeiro número é maior do que o segundo número'
// } else if (segundoNum > primeiroNum){
//     resultado ='O segundo número é maior do que o primeiro número'
// }
// console.log(resultado);

//3
const primeiroNum = 1;
const segundoNum = 10;
const terceiroNum = 2;

let resultado;

if (primeiroNum > segundoNum && primeiroNum > terceiroNum) {
    resultado = 'O primeiro número é o maior número'
} else if (segundoNum > primeiroNum && segundoNum > terceiroNum){
    resultado ='O segundo número é o maior número'
} else if (terceiroNum > primeiroNum && terceiroNum > segundoNum) {
    resultado ='O terceiro número é o maior número'
}
console.log(resultado);

// //8
// const primeiroNum = 3;
// const segundoNum = 7;
// const terceiroNum = 9;

// let soma = primeiroNum + segundoNum + terceiroNum

// if (soma % 2 === 0) {
//     console.log('true')
// } else {
//     console.log('false')
// }