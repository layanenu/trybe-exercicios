//QUESTAO 1
//1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
//O fatorial é representado pelo sinal !
//! = 4 x 3 x 2 x 1 = 24
//Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.
// let fatorial = 1;
// for (let index = 10; index > 0; index -= 1) {
//   fatorial *= index;
// }
// console.log(fatorial);
//-------------------------------------------

//QUESTAO 2:
//2-Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para 
//"ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando 
//corretamente.
// let word = 'tryber';
// let palavraInvertida = '';
// for (let index = 0; index < word.length; index += 1) {
//     palavraInvertida += word[word.length - 1 - index];
// }
// console.log(palavraInvertida);

//-------------------------------------------
//QUESTAO 3:
//3- Considere o array de strings abaixo:
//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de 
//caracteres de cada palavra.

// let array = ['java', 'javascript', 'python', 'html', 'css'];

// let min;
// let max;

// for(index = 0; index < array.length; index += 1) {
//     if (index === 0) {  
//         min = array[index]
//         max = array[index]
//     } else {
//         if (max.length > array[index].length){
//             max = array[index]
//         }

//         if (min.length < array[index].length){
//             min = array[index]
//         }
//     }
// }

// console.log(max,min);

//-------------------------------------------
//QUESTAO 4:
//4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele 
//mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.
