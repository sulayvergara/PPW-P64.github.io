const URL = 'https://rickandmortyapi.com/api/character/'
var xhttp = null

function cargar_personaje() {
    var idpersonaje = document.getElementById('text').value;
    conectar(idpersonaje)
}

function conectar(personaje) {
    xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = obtener_respuesta
    xhttp.open('GET', URL + personaje, true)
    xhttp.send()
}

function obtener_respuesta() {
    if (xhttp != null && xhttp.readyState == 4) {
        if (xhttp.status == 200) {
            let dato =  JSON.parse(xhttp.responseText)
            console.log(dato)

            let imagen = document.getElementById('imagen')
            let personaje = `<div class="container-item"><h1>${dato.name}</h1>
                             <img src="${dato.image}" /></div>`
            imagen.innerHTML = personaje
        }
    }
}