var BtnVerificar = document.querySelector('input#Verificar')
BtnVerificar.addEventListener('click', clicar)
BtnVerificar.addEventListener('mouseenter', MouseEntrar)
BtnVerificar.addEventListener('mouseleave', MouseSair)

function Primo(n) {
      if(n < 2) return false;
        for(var i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
}

function clicar() {
    var MostraNumPrimos = document.querySelector('p#v1');
    var MostraResultado = document.querySelector('p#v2');

    var primos = [];
    var soma = 0;

    for (var num = 2; num <= 50; num++) {
    if (Primo(num)) {
        primos.push(num);
        soma += num;
    }
}
    MostraNumPrimos.innerHTML = `Números primos de 0 a 50: ${primos.join(', ')}`;
    MostraResultado.innerHTML = `Soma dos primos: ${soma}`;
}



function MouseEntrar() {
    BtnVerificar.style.background = 'green';
}

function MouseSair() {
    BtnVerificar.style.background = 'rgb(63, 110, 63)';
}