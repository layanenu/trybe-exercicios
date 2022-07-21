function wakeUp() {
  return 'Acordando!'
} 

function coffee() {
  return 'Bora tomar café!'
}

function sleep() {
  return 'Partiu dormir!!'
}

function doingThings(callback) {
  const resultado = callback();
  console.log(resultado);
}

doingThings(wakeUp);
doingThings(coffee);
doingThings(sleep);