
const ordenarBicicletariosPorProximidadeDaRua = (distanciaDaRuaETodosBicicletarios) => {

    let bicicletariosOrdenadosPelaRua = distanciaDaRuaETodosBicicletarios.sort((a, b) => a.distancia - b.distancia);
    return bicicletariosOrdenadosPelaRua
}

export default ordenarBicicletariosPorProximidadeDaRua