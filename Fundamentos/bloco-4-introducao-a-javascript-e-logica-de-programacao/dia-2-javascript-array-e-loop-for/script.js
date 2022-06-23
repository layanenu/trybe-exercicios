//1-Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for(let index = 0; index < numbers.length; index +=1) {
//     console.log(numbers[index]);
// }

//2-Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let resultado = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     resultado += numbers[index];
// }
// console.log(resultado;)

//3-Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
//A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let resultado = 0;
// let media = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     resultado += numbers[index];
// }

const n = 9;
let resultado = 100;
for (let i =0; i <= n; i += 1) {
    resultado -= i;
}

console.log(resultado);