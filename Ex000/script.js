var BtnVer = document.querySelector('input#v1');
BtnVer.addEventListener('click', clicar);
const VelPerm = 50;

function clicar() {
    var VelAtual = Number(document.querySelector('input#m1').value);
    var ValSentenca = document.querySelector('div#resultado');
    if(VelAtual > VelPerm) {
        ValSentenca.innerHTML = `Você ultrapassou a velocidade permitida de ${VelPerm} Km/h. MULTADO`
    } else {
        ValSentenca.innerHTML = 'Parabéns! Você fez o mínimo!'
    }
}
