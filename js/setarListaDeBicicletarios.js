

const setarListaDeBicicletarios = (arrayDeBicicletariosOrdenadosPelaRua) => {
    const listaHtmlDeBicicletarios = document.querySelector('#list-local-bicicletarios')
    
    const limiteDeBicicletariosInformadosPelousuario = document.querySelector('#limite-de-bicicletarios').value

    listaHtmlDeBicicletarios.innerHTML = ""

    for(let i=0; i< limiteDeBicicletariosInformadosPelousuario; i++){
        
        const nomeDoBicicletario =  arrayDeBicicletariosOrdenadosPelaRua[i].coordenada.properties.Nome
        const li = document.createElement('li');
        li.textContent = nomeDoBicicletario
        listaHtmlDeBicicletarios.appendChild(li);
    }

}


export default setarListaDeBicicletarios