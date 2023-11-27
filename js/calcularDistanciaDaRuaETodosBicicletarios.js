

import calcularPorHaversine from "./calcularPorHaversine.js"

const calcularDistanciaDaRuaETodosBicicletarios = (dadosGeograficosDaRua, dadosGeograficosDosBicicletarios) => {

     //latitude da rua buscada na api openStreetMap
     const latitudeDaRua = dadosGeograficosDaRua[0].lat

     //longitude da rua buscada na api openStreetMap
     const longitudeDaRua = dadosGeograficosDaRua[0].lon

     const buscarTodasAsDistanciasCalculadas = () => {

        const arrayComTodasAsDistanciasCalculadas = dadosGeograficosDosBicicletarios.map((coordenada) => {

            let longitudeNaApiBikeRio = +coordenada.geometry.coordinates[0]
            let latitudeNaApiBikeRio = +coordenada.geometry.coordinates[1]
            const distancia =  calcularPorHaversine(latitudeDaRua,longitudeDaRua,latitudeNaApiBikeRio,longitudeNaApiBikeRio)     

            return {coordenada, distancia}

        })

       
        return arrayComTodasAsDistanciasCalculadas

    }

 
    return buscarTodasAsDistanciasCalculadas()
    
}

export default calcularDistanciaDaRuaETodosBicicletarios