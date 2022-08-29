
var verificar = 'desligada';

function mudaEstado() {
    verificar === 'desligada' ? verificar = 'ligada' : verificar = 'desligada';
    return verificar;
}

function ligaDesliga() {

    if (verificar === 'desligada')
        document.getElementById('lampada').src = './img/acesa.png';
    else
        document.getElementById('lampada').src = './img/apagada.png';
    if (verificar === 'desligada')
        document.getElementById('interruptor').src = './img/on.png';
    else
        document.getElementById('interruptor').src = './img/off.png';
    if (verificar === 'desligada')
        document.body.style.backgroundColor = 'white';
    else
        document.body.style.backgroundColor = 'black';
    mudaEstado();

}