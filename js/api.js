

const api = {
  
    GET_BIKERIO: async () => {

      const path = window.location.href
      const BASE_URL_BIKERIO = `${path}/bicicletarios.json`
      const response =  await fetch(BASE_URL_BIKERIO)
      const json  =  await response.json()
      return json.features
    },

    GET_OPENSTREETMAP: async (nomeDaRua) => {

      const BASE_URL_OPENSTREETMAP =  `https://nominatim.openstreetmap.org/search?street=${nomeDaRua}&city=Rio%20de%20Janeiro&format=json&polygon=1&addressdetails=1`

      try{
        const response =  await fetch(BASE_URL_OPENSTREETMAP)
        const json  =  await response.json()
        return json
      }
      catch (error){
        
        return { error: error.message };
      }
    }

}

export default api