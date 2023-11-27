

import buscarDadosGeograficosDaRua from "./buscarDadosGeograficosDaRua.js";
import setarDadosGeograficosDaRuaNoMapa from "./setarDadosGeograficosDaRuaNoMapa.js";
import buscarDadosGeograficosDosBicicletarios from "./buscarDadosGeograficosDosBicicletarios.js";
import calcularDistanciaDaRuaETodosBicicletarios from "./calcularDistanciaDaRuaETodosBicicletarios.js"
import ordenarBicicletariosPorProximidadeDaRua from "./ordenarBicicletariosPorProximidadeDaRua.js";
import setarListaDeBicicletarios from "./setarListaDeBicicletarios.js";

const handleClickIniciarBuscaDosEnderecos = async () => {
    

    //obtem o nome da rua informada pelo usuario
    const nomeDaRua = document.querySelector('#input-procurar-rua').value

    //obtem os dados geograficos da rua informada pelo usuario na API OPENSTREETMAP
    const dadosGeograficosDaRua = await buscarDadosGeograficosDaRua(nomeDaRua)

    //seta o mapa na view de acordo com a rua informada pelo usuario
    setarDadosGeograficosDaRuaNoMapa(dadosGeograficosDaRua)
   
    //obtem todos os dados geograficos dos bicicletarios na API BIKERIO
    const dadosGeograficosDosBicicletarios = await buscarDadosGeograficosDosBicicletarios()

    //calcula a distancia da rua informada e todos os bicicletarios existentes na API
    const distanciaDaRuaETodosBicicletarios = calcularDistanciaDaRuaETodosBicicletarios(dadosGeograficosDaRua, dadosGeograficosDosBicicletarios)

    //ordena a distancia de bicicletarios mais proximos da rua informada pelo usuario
    const arrayDeBicicletariosOrdenadosPelaRua = ordenarBicicletariosPorProximidadeDaRua(distanciaDaRuaETodosBicicletarios )

    //cria a lista de bicicletarios na view
    setarListaDeBicicletarios(arrayDeBicicletariosOrdenadosPelaRua)

  
}


export default handleClickIniciarBuscaDosEnderecos