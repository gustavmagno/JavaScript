const inputEstado = document.getElementById("inpEstado");
const inputCidade = document.getElementById("inpCidade");
const listaEstados = document.getElementById("lista-estados");
const listaCidades = document.getElementById("lista-cidades");
const BotaoConfirma = document.getElementById("btnConfirma");
const ResNomeCidadeEstado = document.getElementById("res1");
const ResDistancia = document.getElementById("res2");
const NomeAluno = document.getElementById("inpNomeAluno");

const MossoroLatitude = -5.1878;
const MossoroLongitude = -37.3441;

const RaioTerraEmKm = 6371;

let EstadosMapeamento = {};

async function carregarEstados() {
    const FetchEstados = await fetch(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome"
    );
    const RespostaEstados = await FetchEstados.json();

        RespostaEstados.forEach(estado => {
            EstadosMapeamento[estado.nome] = estado.sigla;

            const Opcao = document.createElement("option");
            Opcao.value = estado.nome;
            listaEstados.appendChild(Opcao);
    });
}

async function carregarCidades(sigla) {
    const FetchCidade = await fetch(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${sigla}/municipios?orderBy=nome`
    );
    const RespostaCidade = await FetchCidade.json();
    
    listaCidades.innerHTML = "";

    RespostaCidade.forEach((cidade) => {
        const Opcao = document.createElement("option");
        Opcao.value = cidade.nome;
        listaCidades.appendChild(Opcao);
    });
}

async function buscarCoordenadas(cidade, estado) {
    const BuscaCidadeEstado = `${cidade}, ${estado}, Brasil`;
    const UrlNominatimParaCalculoDistancia = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(BuscaCidadeEstado)}&format=json&limit=1&countrycodes=br`;
    const RespostaDistancia = await fetch(UrlNominatimParaCalculoDistancia);
    //const ConverteRespostaDistancia = RespostaDistancia.json;

    if (!RespostaDistancia.ok) {
        throw new Error(`O servidor recusou a requisição (status ${RespostaDistancia.status})`);
    }
    const ConversaoDados = await RespostaDistancia.json();
    console.log("Resposta do Nominatim:", ConversaoDados);

    if(!Array.isArray(ConversaoDados) || ConversaoDados.length === 0) {
        throw new Error("Cidade não encontrada");
    }

    return {
        lat: parseFloat(ConversaoDados[0].lat),
        lon: parseFloat(ConversaoDados[0].lon)
    };
}

function GrauParaRadianos(grau) {
    return grau * Math.PI / 180;
}

function calcularDistancia(lat1, lon1, lat2, lon2) {
    const dLat = GrauParaRadianos(lat2 - lat1);
    const dLon = GrauParaRadianos(lon2 - lon1);

    const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(GrauParaRadianos(lat1)) * 
    Math.cos(GrauParaRadianos(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return RaioTerraEmKm * c;
}




inputEstado.addEventListener("input", () => {
    const SiglaEstado = EstadosMapeamento[inputEstado.value];

    inputCidade.value = "";

    if (SiglaEstado) {
        inputCidade.disabled = false;
        inputCidade.placeholder = "Clique e escolha a cidade";
        carregarCidades(SiglaEstado);
    } else {
        inputCidade.disabled = true;
        inputCidade.placeholder = "Escolha um estado primeiro";
        listaCidades.innerHTML = "";
    }
});

BotaoConfirma.addEventListener("click", async () => {
    const NomeAtual = NomeAluno.value.trim();
    const EstadoAtual = inputEstado.value;
    const CidadeAtual = inputCidade.value;

    if (!NomeAtual || !EstadosMapeamento[EstadoAtual] || !CidadeAtual) {
        ResNomeCidadeEstado.textContent = "Escolha um estado e uma cidade válidos.";
        ResDistancia.textContent = "";
        return;
    }
    ResNomeCidadeEstado.textContent = `${NomeAtual}, você é de ${CidadeAtual} - ${EstadosMapeamento[EstadoAtual]}`;
    ResDistancia.textContent = "Calculando distância...";

    try {
        const CordenadasNominatim = await buscarCoordenadas(CidadeAtual, EstadoAtual);

        console.log("Cidade do aluno:", CordenadasNominatim.lat, CordenadasNominatim.lon);
        console.log("Mossoró:", MossoroLatitude, MossoroLongitude);

        const DistanciaDeMossoro = calcularDistancia(
            CordenadasNominatim.lat, CordenadasNominatim.lon,
            MossoroLatitude, MossoroLongitude
        );
        const DistanciaFormatada = DistanciaDeMossoro.toFixed(1).replace(".",",");

        ResDistancia.textContent = `${NomeAtual}, a distância em linha reta até Mossoró/RN é de ${DistanciaFormatada} km.`;
    } catch (erro) {
        ResDistancia.textContent = "Não foi possível calcular a distância. Tente novamente.";
        console.error(erro);
    }
});

carregarEstados();