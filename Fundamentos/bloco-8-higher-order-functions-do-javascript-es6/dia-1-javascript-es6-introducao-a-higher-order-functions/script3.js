// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 
//recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. 
//O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const numeroApostadoIgualSorteado = (numeroApostado, numeroSorteado) => {
 if (numeroApostado === numeroSorteado) {
  return 'Parabéns você ganhou!'
 } else (numeroApostado !== numeroSorteado) 
  return 'Tente novamente!'
}

const sorteio = (numeroApostado, callback) => {
  const numeroSorteado = Math.floor((Math.random() * 5) + 1); 
  //A função Math.random() retorna um número pseudo-aleatório de ponto flutuante no intervalo [0, 1) 
  //ou seja, de 0 (inclusive) até, mas não incluindo, 1 (exclusivo). Por causa disso, quando multiplicamos 
  //nosso número gerado aleatoriamente por outro número, ele varia de 0 a no máximo 1 menor que o número que 
  //está sendo multiplicado (como Math.floor()simplesmente remove as casas decimais em vez de arredondar o número 
  //(ou seja, 0,999 torna-se 0 quando processado com Math.floor(), não 1)).
  return callback(numeroApostado, numeroSorteado);
};

console.log(sorteio(1, numeroApostadoIgualSorteado));