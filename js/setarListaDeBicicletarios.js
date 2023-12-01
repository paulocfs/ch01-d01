import leaflet from "./leaflet/leaflet.js"

const setarListaDeBicicletarios = (arrayDeBicicletariosOrdenadosPelaRua) => {

    const listaHtmlDeBicicletarios = document.querySelector('#list-local-bicicletarios')
    
    const limiteDeBicicletariosInformadosPelousuario = document.querySelector('#limite-de-bicicletarios').value

    
    listaHtmlDeBicicletarios.innerHTML = ""

    console.log(arrayDeBicicletariosOrdenadosPelaRua)

    for(let i=0; i< limiteDeBicicletariosInformadosPelousuario; i++){
        
        const distanciaDoBicicletario = arrayDeBicicletariosOrdenadosPelaRua[i].distancia + "km"
        const nomeDoBicicletario =  arrayDeBicicletariosOrdenadosPelaRua[i].coordenada.properties.Nome

        const latitudeDoBicicletario = arrayDeBicicletariosOrdenadosPelaRua[i].coordenada.geometry.coordinates[1]
        const longitudeDoBicicletario = arrayDeBicicletariosOrdenadosPelaRua[i].coordenada.geometry.coordinates[0]

        

        leaflet.setarMarcadorDosBicicletarios(latitudeDoBicicletario, longitudeDoBicicletario, leaflet.mapa)
       

        const li = document.createElement('li');
        const btn = document.createElement('input');
        btn.type="submit"
        btn.classList.add("btn-ver-rota")
        btn.value="[ Ver Rota ]"
        btn.id=[latitudeDoBicicletario, longitudeDoBicicletario]
        li.textContent = nomeDoBicicletario+ ' | '+distanciaDoBicicletario
        listaHtmlDeBicicletarios.appendChild(li);
        li.appendChild(btn);
    }

}


export default setarListaDeBicicletarios