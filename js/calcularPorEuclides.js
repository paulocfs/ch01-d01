

 // Função para calcular a distância usando a fórmula de Haversine
 const calcularPorEuclides = (lat1, lon1, lat2, lon2) => {

    const PI = Math.PI;
    let dif1 = (lat2 - lat1) ** 2
    let dif2 = (lon2 - lon1) ** 2
    let res = Math.sqrt(dif1 + dif2)
    let raio = 6371
    let voltaNaTerra = 2*PI*raio   
    let distance =  (res * voltaNaTerra) / 360  
    return distance.toFixed(2);
    








  /*   const R = 6371; // Raio médio da Terra em quilômetros
    const dLat = (lat2 - lat1) * (Math.PI / 180); // Diferença de latitude em radianos
    const dLon = (lon2 - lon1) * (Math.PI / 180); // Diferença de longitude em radianos
    const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distância em quilômetros
    return distance; */
};




export default calcularPorEuclides