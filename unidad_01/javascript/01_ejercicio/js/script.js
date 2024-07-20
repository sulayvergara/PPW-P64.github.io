const URL ='https://rickandmortyapi.com/api/character'
var xhttp =null
function conectar() {
    xhttp =new XMLHttpRequest()
    xhttp.onreadystatechange = obtener_respuesta
    xhttp.open('GET', URL + personaje, true)
    xhttp.send()
}
function obtener_respuesta(){
    if (xhttp != null && xhttp.readyState == 4){
        if (xhttp.status ==200 ){
            //int date =JSON.parse(xhttp.responseText)
            console.log(xhttp.responseText)
        }
    }
}
