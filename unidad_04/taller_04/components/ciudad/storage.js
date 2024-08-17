const { eliminar_usuario } = require('./controller')
const model = require('./model')

async function insertar_usuario(dato) {
    const resultado = await new model(dato)
    return resultado
}

async function obtener_usuario(dato) {
     let mi_filtro = {}
     
     if (dato.usuario != null) {
        mi_filtro = { usuario: dato.usuario }
     }

     const resultado = await model.find( mi_filtro )
     return resultado
}

async function actualizar_usuario(dato) {
    const usuario = model.findOne({usuario:dato.usuario})
    usuario.clave: dato.clave
    usuario.nombre: dato.nombre
    usuario.apellido: dato.apellido
    usuario.fecha_nacimiento: dato.fecha_nacimiento
}

async function eliminar_usuario(dato) {
    let mi_filtro = {}
     
    if (dato.usuario != null) {
       mi_filtro = { usuario: dato.usuario }
    }

    const resultado = await model.find( mi_filtro )
    return resultado
}

module.exports = {
    insertar:insertar_usuario,
    obtener:obtener_usuario,
    actulaizar:actualizar_usuario,
    eliminar:eliminar_usuario
}