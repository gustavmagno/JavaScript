let Botaoconfirma = document.getElementById('ConfirmaHorario');
Botaoconfirma.addEventListener('click', click);

function HoraParaMinutos(horario) {
    const [horas, minutos] = horario.split(":").map(Number);

    return horas * 60 + minutos;
};

function CalculoValorEstacionamento(HorarioDaEntrada, HorarioDaSaida) {
    let MinutosTotais = HorarioDaSaida - HorarioDaEntrada;
    const ValorHora = 15;
    if (MinutosTotais < 0) {
        MinutosTotais += 1440;
    }
    return (MinutosTotais / 60) * ValorHora;
};    

function click () {
    let HorarioEntrada = document.getElementById('HorarioEntrada').value;
    let HorarioSaida = document.getElementById('HorarioSaida').value;
    let ValorTotal = document.getElementById('ValorTotal');

    if (HorarioEntrada === "" || HorarioSaida === "") {
        ValorTotal.innerHTML = "Preencha os dois horários."
        return;
    };


    let HoraTotal = CalculoValorEstacionamento(
        HoraParaMinutos(HorarioEntrada),
        HoraParaMinutos(HorarioSaida)
    );

    ValorTotal.innerHTML = `O valor total é de: ${HoraTotal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`;

};


