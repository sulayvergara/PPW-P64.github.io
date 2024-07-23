document.getElementById('cargar').addEventListener('click', function() {
    document.getElementById('imagen').style.display = 'block';
    document.getElementById('texto-imagen').style.display = 'none';
});

document.getElementById('eliminar').addEventListener('click', function() {
    document.getElementById('imagen').style.display = 'none';
    document.getElementById('texto-imagen').style.display = 'block';
});
