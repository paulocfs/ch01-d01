
import leaflet from "./leaflet/leaflet.js"

const setarDadosGeograficosDaRuaNoMapa = (dadosGeograficosDaRua) => {
   
    //console.log(dadosGeograficosDaRua)
   
    

    const latitudeDaRua = +dadosGeograficosDaRua[0].lat
    const longitudeDaRua = +dadosGeograficosDaRua[0].lon

    const mapElemento = leaflet.mapElemento
   
    leaflet.limparMapa()

    let mapa = leaflet.setarMapaNaView(latitudeDaRua, longitudeDaRua)

    leaflet.setarMarcadorNoMapa(latitudeDaRua, longitudeDaRua, mapa)

    leaflet.setarAtribuicao(mapa)

  

    return mapa

}

export default setarDadosGeograficosDaRuaNoMapa