var inputDolarAmericano = document.getElementById("inpDolarAmericano");
var btnConfirma = document.getElementById("btnConfirma");
var ValorConvertido = document.getElementById("ValorConvertido");

btnConfirma.addEventListener('click', click);
btnConfirma.addEventListener('mouseenter', Mouseenter);
btnConfirma.addEventListener('mouseleave', Mouseleave);

async function RecebeValorMoedas () {
    const BuscaValorMoedas = await fetch('https://api.frankfurter.dev/v2/rate/USD/INR')

    if(!BuscaValorMoedas.ok) throw new Error(`Erro HTTP ${BuscaValorMoedas.status}`);

    const ValorMoedas = await BuscaValorMoedas.json();
    return ValorMoedas.rate;
}

async function click () {
    const MontanteDolar = Number(inputDolarAmericano.value);
    
    if (!MontanteDolar || MontanteDolar <= 0) {
            ValorConvertido.textContent = `Insira um valor maior que zero.`;
    } else {
            const ValorRupia = await RecebeValorMoedas();
            const ValorTotalRupia = ValorRupia * MontanteDolar;
            
            ValorConvertido.textContent = `O valor total de dólares em rúpia indiana é de: ${ValorTotalRupia.toLocaleString('pt-br', { style: 'currency', currency: 'INR'})}`;
        }
}

function Mouseenter () {
    btnConfirma.style.background = 'green';
}

function Mouseleave () {
    btnConfirma.style.background = 'white';
}