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


//QUESTAO 2
// const primeiroNum = 20;
// const segundoNum = 10;

// let resultado;

// if (primeiroNum > segundoNum) {
//     resultado = 'O primeiro número é maior do que o segundo número'
// } else if (segundoNum > primeiroNum){
//     resultado ='O segundo número é maior do que o primeiro número'
// }
// console.log(resultado);

//QUESTAO 3
// const primeiroNum = 1;
// const segundoNum = 10;
// const terceiroNum = 2;
// let resultado;
// if (primeiroNum > segundoNum && primeiroNum > terceiroNum) {
//     resultado = 'O primeiro número é o maior número'
// } else if (segundoNum > primeiroNum && segundoNum > terceiroNum){
//     resultado ='O segundo número é o maior número'
// } else if (terceiroNum > primeiroNum && terceiroNum > segundoNum) {
//     resultado ='O terceiro número é o maior número'
// }
// console.log(resultado);

//QUESTAO 4
// const numero = '0 ';
// if (numero > 0){
//     console.log('Esse número é positivo')
// } else if(numero < 0){
//     console.log('Esse número é negativo')
// } else if (numero == 0){
//     console.log('Esse número é zero')
// } else{
//     console.log('Esse não é um numero');
// }

//QUESTAO 5

//resolucao em video

// let degreeAngleA = 65;
// let degreeAngleB = 100;
// let degreeAngleC = 15;
//Aqui declara as variáveis para os angulos

// let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC; //Aqui verifica a soma dos angulos, essa soma deve ser 180.

// let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0; //Aqui define que os angulos devem ser maior que 0.

// if(allAnglesArePositives){ //Aqui se os angulos forem positivos, 
//   if (sumOfAngles === 180) { //entra no proximo If que verifica se a soma dos angulos é 180
//     console.log(true); //se os angulos forem positivos e a soma for 180, imprime true
//   } else {
//     console.log(false); //se não, imprime false
//   };
// } else { //se os angulos forem numeros negativos ou se a soma nao der 180 imprime erro
//   console.log('Erro: ângulo inválido'); 
// }

//QUESTAO 6

//resolucao em video

// const chessPiece = 'bispo';

// switch (chessPiece.toLowerCase()) {
//   case 'rei':
//     console.log('Rei-> Uma casa apenas para qualquer direção.');
//     break;
//   case 'bispo':
//     console.log('Bispo-> Diagonal.');
//     break;
//   case 'rainha':
//     console.log('Rainha-> Diagonal, horizontal e vertical.');
//     break;
//   case 'cavalo':
//     console.log('Cavalo -> "L" pode pular sobre as peças.');
//     break;
//   case 'torre':
//     console.log('Torre -> Horizontal e vertical.');
//     break;
//   case 'peão':
//     console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
//     break;
//   default:
//     console.log('Erro, peça inválida!');
//     break;
// };

//QUESTAO 7

// const grade = 76;

// if (grade < 0 || grade > 100) {
//   console.log("Erro, nota incorreta!");
// } else if (grade >= 90) {
//   console.log("A");
// } else if (grade >= 80) {
//   console.log("B");
// } else if (grade >= 70) {
//   console.log("C");
// } else if (grade >= 60) {
//   console.log("D");
// } else if (grade >= 50) {
//   console.log("E");
// } else {
//   console.log("F");
// }


//QUESTAO 8

//resolucao em video

// const a = 1;
// const b = 3;
// const c = 5;

// let isEven = false;

// if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
//   isEven = true;
// };
// console.log(isEven);

//QUESTAO 9

// const a = 1;
// const b = 3;
// const c = 5;

// let isOdd = false;

// if ((a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0)) {
//   isOdd = true;
// };
// console.log(isOdd);

//QUESTAO 10

// const costOfProduct = 1;
// const saleValue = 3;

// if (costOfProduct >= 0 && saleValue >= 0) {
//   const totalCostOfProduct = costOfProduct * 1.2;
//   const totalProfit = (saleValue - totalCostOfProduct) * 1000;
//   console.log(totalProfit);
// } else {
//   console.log("Error, os valores não podem ser negativos");
// };

//QUESTAO 11

//resolucao em video

// let aliquotINSS;
// let aliquotIR;

// const grossSalary = 2000.00;

// if (grossSalary <= 1556.94) {
//   aliquotINSS = grossSalary * 0.08;
// } else if (grossSalary <= 2594.92) {
//   aliquotINSS = grossSalary * 0.09;
// } else if (grossSalary <= 5189.82) {
//   aliquotINSS = grossSalary * 0.11;
// } else {
//   aliquotINSS = 570.88;
// }

// const baseSalary = grossSalary - aliquotINSS;

// if (baseSalary <= 1903.98) {
//   aliquotIR = 0;
// } else if (baseSalary <= 2826.65) {
//   aliquotIR = (baseSalary * 0.075) - 142.80;
// } else if (baseSalary <= 3751.05) {
//   aliquotIR = (baseSalary * 0.15) - 354.80;
// } else if (baseSalary <= 4664.68) {
//   aliquotIR = (baseSalary * 0.225) - 636.13;
// } else {
//   aliquotIR = (baseSalary * 0.275) - 869.36;
// };

// console.log("Salário: " + (baseSalary - aliquotIR));

