document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los enlaces con la clase 'caja-enlace'
    var links = document.querySelectorAll('.caja-enlace');

    // Añadir un evento para cada enlace
    links.forEach(function(link) {
        link.addEventListener('mouseover', function() {
            // Cambiar el color y el tamaño al pasar el ratón
            link.style.backgroundColor = '#B0E0E6'; // Cambiar a azul
            link.style.transform = 'scale(1.03)'; // Aumentar el tamaño
        });

        link.addEventListener('mouseout', function() {
            // Restaurar el color y el tamaño original cuando el ratón se aleja
            link.style.backgroundColor = ''; // Restaurar el color original
            link.style.transform = 'scale(1)'; // Restaurar el tamaño original
        });
    });
});