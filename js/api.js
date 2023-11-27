

const api = {
  
    GET_BIKERIO: async () => {

      const BASE_URL_BIKERIO = `http://127.0.0.1:5500/bicicletarios.json`
      const response =  await fetch(BASE_URL_BIKERIO)
      const json  =  await response.json()
      return json.features
    },

    GET_OPENSTREETMAP: async (nomeDaRua) => {

      const BASE_URL_OPENSTREETMAP =  `https://nominatim.openstreetmap.org/search?street=${nomeDaRua}&city=Rio%20de%20Janeiro&format=json&polygon=1&addressdetails=1`
      const response =  await fetch(BASE_URL_OPENSTREETMAP)
      const json  =  await response.json()
      return json
    }

}

export default api