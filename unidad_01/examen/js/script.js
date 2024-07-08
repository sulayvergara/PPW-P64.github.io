function cargar_receta() {
    var content = document.getElementById("content")
    var texto = document.getElementById("texto")
    var texto1 = document.getElementById("descripcion")
    
    var div = document.createElement("div")
    div.className = "content"
    var texto = document.createTextNode( texto.value )
    div.appendChild(texto)
    var texto1 = document.createTextNode( texto1.value )
    div.appendChild(texto1)

    content.appendChild(div)
}