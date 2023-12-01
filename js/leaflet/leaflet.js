



const leaflet = {

    mapElemento: document.querySelector('#map'),

    mapa: '',

    latitudeDarua: 0,

    longitudeDaRua: 0,

    controleDaRota: null,


    setarMapaNaView: (latitudeDaRua, longitudeDaRua) => {

        leaflet.latitudeDarua = latitudeDaRua
        leaflet.longitudeDaRua = longitudeDaRua

        let map = L.map('map').setView([latitudeDaRua, longitudeDaRua], 15);
        return leaflet.mapa = map
    },

 

    limparMapa: () => {
        if (leaflet.mapElemento && leaflet.mapElemento._leaflet_id) {
            leaflet.mapElemento._leaflet_id = null; // Limpa a identificação do mapa
            leaflet.mapElemento.innerHTML = ''; // Limpa o conteúdo do elemento do mapa, se necessário
        }
        
        return leaflet.mapElemento
     
    },

    setarMarcadorNoMapa: (latitudeDaRua, longitudeDaRua, mapa) => {
        let marker = L.marker([latitudeDaRua, longitudeDaRua]).addTo(mapa)
        return marker
    },

    setarAtribuicao: (mapa) => {
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(mapa);
    },

    setarMarcadorDosBicicletarios: (latitudeDoBicletario, longitudeDoBicicletario, mapa) => {
        
        const meuIcone = L.icon({
            iconUrl: '../images/bike.svg',
            iconSize: [30, 30], // Tamanho do ícone [largura, altura]
            iconAnchor: [15, 30], // Posição do ícone relativa ao ponto do marcador [metade da largura, altura]
            popupAnchor: [0, -30] // Posição do pop-up relativo ao ícone [horizontal, vertical]
        });

        

        let marcador = L.marker(   [latitudeDoBicletario, longitudeDoBicicletario],  { icon: meuIcone }  ).addTo(mapa)
        return marcador 
    },

    limparControleDaRota: () => {

        if (leaflet.controleDaRota !== null) {
            leaflet.mapa.removeControl(leaflet.controleDaRota); // Remove o controle de rota do mapa
            leaflet.controleDaRota = null; // Define o controle de rota como nulo
        }
    },

    setarControleDaRota: (arrayDeCoordenadasDoBicicletario) => {
        let latitudeDaRua = leaflet.latitudeDarua
        let longitudeDaRua = leaflet.longitudeDaRua
        let mapa = leaflet.mapa

        const novoControleDeRota = L.Routing.control({
            waypoints: [
              L.latLng(latitudeDaRua, longitudeDaRua),
              L.latLng(arrayDeCoordenadasDoBicicletario[0], arrayDeCoordenadasDoBicicletario[1])
            ]
        }).addTo(mapa);

        leaflet.controleDaRota = novoControleDeRota

    },

    setarRotaAteBiciletario: (arrayDeCoordenadasDoBicicletario) => {
       
        leaflet.limparControleDaRota()
        leaflet.setarControleDaRota(arrayDeCoordenadasDoBicicletario)      
        
    }




}


export default leaflet