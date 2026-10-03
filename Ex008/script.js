let LeituraDaFrase = document.getElementById('FraseParaSeLer');
let BotaoConfirma = document.getElementById('btnConfirma');
let OutputFrase = document.getElementById('QuantidadeLetras');

BotaoConfirma.addEventListener('click', OnClick);

function OnClick () {
    var intnValorDaFrase = LeituraDaFrase.textContent;
    var intnTamanhoDaFrase = intnValorDaFrase.replace(/\s/g, "").length;

    OutputFrase.innerHTML = `A frase ${intnValorDaFrase}, tem ${intnTamanhoDaFrase} letras`;
}