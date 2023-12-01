import leaflet from "./leaflet/leaflet.js";

const iniciarExibicaoDeRotaAteBicicletario = (botoesVerRota) => {

    const setarRotaNoMapa = (item)=> {
        const arrayDeCoordenadasDoBicicletario = item.getAttribute("id").split(',')

        leaflet.setarRotaAteBiciletario(arrayDeCoordenadasDoBicicletario)
    }

    botoesVerRota.forEach((item)=> {
        item.addEventListener('click', () => {return setarRotaNoMapa(item)})
    })

}

export default iniciarExibicaoDeRotaAteBicicletario