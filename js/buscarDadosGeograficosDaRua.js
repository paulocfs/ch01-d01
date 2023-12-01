
import api from "./api.js";

const buscarDadosGeograficosDaRua = async (nomeDaRua) => {

    //otem os dados da API OpenStreetMap
    const dadosDaApiOpenStreetMap = await api.GET_OPENSTREETMAP(nomeDaRua)

    //obtem a tag html <small> que vai exibir mensagem de erro caso ocorra
    const alertaDeErro = document.querySelector('#alerta-de-erro')

    //se a API retornar um array vazio, exibe mensagem de erro, caso contrario retorna os dados encontrados
    if(dadosDaApiOpenStreetMap.length == 0){

        const mensagemDeErro = "O endereço não foi encontrado"
        alertaDeErro.innerHTML= mensagemDeErro
        alertaDeErro.classList.add("active")

    }else {
        alertaDeErro.classList.remove("active")
        return dadosDaApiOpenStreetMap

    }

}

export default buscarDadosGeograficosDaRua