document.addEventListener('DOMContentLoaded', function() {
    // Obtener el ID de la primera sección (en este caso, 'soluciones')
    var primeraSeccionId = 'soluciones';

    // Mostrar la primera sección por defecto al cargar la página
    toggleSection(primeraSeccionId);
});

function toggleSection(sectionId) {
    // Obtener todas las secciones
    var sections = document.querySelectorAll('.seccion');

    // Ocultar todas las secciones
    sections.forEach(function(section) {
        section.classList.remove('mostrar');
    });

    // Mostrar la sección específica
    var sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.classList.add('mostrar');
    }
}
