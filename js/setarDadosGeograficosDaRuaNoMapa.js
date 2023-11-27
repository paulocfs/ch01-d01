


const setarDadosGeograficosDaRuaNoMapa = (dadosGeograficosDaRua) => {

    const latitudeDaRua = dadosGeograficosDaRua[0].lat
    const longitudeDaRua = dadosGeograficosDaRua[0].lon

    const mapElement = document.querySelector('#map');
   

    if (mapElement && mapElement._leaflet_id) {
       //Se existir, destrói o mapa
        mapElement._leaflet_id = null; // Limpa a identificação do mapa
        mapElement.innerHTML = ''; // Limpa o conteúdo do elemento do mapa, se necessário
    }


    let map = L.map('map').setView([latitudeDaRua, longitudeDaRua], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
}

export default setarDadosGeograficosDaRuaNoMapa