
import api from "./api.js";

const buscarDadosGeograficosDaRua = async (nomeDaRua) => {

    const dadosDaApiOpenStreetMap = await api.GET_OPENSTREETMAP(nomeDaRua)
    return dadosDaApiOpenStreetMap

}

export default buscarDadosGeograficosDaRua