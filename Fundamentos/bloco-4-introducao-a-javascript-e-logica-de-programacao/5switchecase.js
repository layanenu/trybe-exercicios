let nota = 'reprovada';

switch (nota) {
    case 'aprovada':
        console.log('Parabéns, você foi aprovada(o)!')
        break;

    case 'lista':
        console.log('Você ainda está na lista')
        break;

    case 'reprovada':
        console.log('Infelizmente você foi reprovada(o)')
        break;

    default:
        console.log('não se aplica')
}