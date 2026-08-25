var VelAtual = document.querySelector('input#m1');
var BtnVer = document.querySelector('input#v1');
v1.addEventListener = ('click', clicar());

function clicar() {
    var VelPerm = 50;
    if(m1 > 50) {
        var ValSentenca = document.querySelector('div#resultado');
        ValSentenca.innerHTML = `Você ultrapassou a velocidade permitida de ${VelPerm} Km/h. MULTADO`
    } else {
        ValSentenca.innerHTML = 'Parabéns! Você fez o mínimo!'
    }
}
