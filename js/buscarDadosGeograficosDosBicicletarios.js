import api from "./api.js";

const buscarDadosGeograficosDosBicicletarios = async () => {

    const dadosDaApiBikeRio = await api.GET_BIKERIO()
    return dadosDaApiBikeRio
}

export default buscarDadosGeograficosDosBicicletarios;