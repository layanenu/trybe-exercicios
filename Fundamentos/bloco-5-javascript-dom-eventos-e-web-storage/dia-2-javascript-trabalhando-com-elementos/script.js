// 1. Acesse o elemento elementoOndeVoceEsta.

const elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');

// 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'blue';

//3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

const primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho').innerText = 'Primeiro Filho Do Filho';