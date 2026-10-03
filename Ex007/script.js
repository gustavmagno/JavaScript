var inputNomedoAluno = document.getElementById("inpNomeAluno");
var BotaoConfirma = document.getElementById("btnConfirma");
var outputNomeAluno = document.getElementById("outNomeAluno");
var outputNumerosIguaisNome = document.getElementById("outNumerosIguaisAoNome");

const UnidadesNumero = ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"];
const NumerosEspeciais = ["dez", "onze", "doze", "treze", "catorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"];
const DezenasNumero = ["", "", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"];


BotaoConfirma.addEventListener('mouseenter', MouseEnter);
BotaoConfirma.addEventListener('mouseleave', MouseLeave);
BotaoConfirma.addEventListener('click', MouseClick);

function NumeroPorExtenso (n) {
    if (n < 10) {
        return UnidadesNumero[n];
    }
    if (n < 20) {
        return NumerosEspeciais[n - 10];
    }
    if (n === 100) {
        return "cem";
    }

    let Dezena = Math.floor(n / 10);
    let Unidade = n % 10;

    if (Unidade === 0) {
        return DezenasNumero[Dezena];
    }
    return DezenasNumero[Dezena] + " e " + UnidadesNumero[Unidade];
}

function MouseEnter () {
    BotaoConfirma.style.background = 'green';
};

function MouseLeave () {
    BotaoConfirma.style.background = 'white';
};

function MouseClick () {
    let intnInpNomeAluno = inputNomedoAluno.value;
    let intnInpNomeAlunoTamanho = intnInpNomeAluno.replace(/\s/g, "").length;
    let NumerosIguais = [];
    let TamanhoNome = (intnInpNomeAlunoTamanho === 1) ? "letra" : "letras";

    for (let i = 0; i <= 100; i++) {
        let NumeroExtenso = NumeroPorExtenso(i);
        let TamanhoNumero = NumeroExtenso.replace(/\s/g, "").length;

        if (TamanhoNumero === intnInpNomeAlunoTamanho) {
            NumerosIguais.push(i);
        }
    }
    
    outputNomeAluno.innerHTML = intnInpNomeAluno + "," + ` seu nome tem ${intnInpNomeAlunoTamanho} ${TamanhoNome}`;

    if (NumerosIguais.length > 0) {
        outputNumerosIguaisNome.innerHTML = `Números com o mesmo tamanho: ${NumerosIguais.join(", ")}.`
    } else {
        outputNumerosIguaisNome.innerHTML = "Nehum número de 0 a 100 tem esse tamanho."
    }
}