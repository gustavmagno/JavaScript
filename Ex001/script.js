var BtnVerResultado = document.querySelector('input#verifique');
BtnVerResultado.addEventListener('click', clicar);

function clicar() {
    var ResPrimeiroInput = document.querySelector('input#v1');
    var ResValPrimeiroInput = Number(ResPrimeiroInput.value);

    var ResSegundoInput = document.querySelector('input#v2');
    var ResValSegundoInput = ResSegundoInput.value;
    var QtnCarSegundoInput = ResValSegundoInput.length;

    var SomaValoresInput = ResValPrimeiroInput + QtnCarSegundoInput;

    var PrintResposta = document.querySelector('div#resposta');
    PrintResposta.innerHTML = SomaValoresInput;
}



