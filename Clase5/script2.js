document.addEventListener('DOMContentLoaded', function () {
    const botonOriginal = document.getElementById('boton-original');
    const botonAltoContraste = document.getElementById('boton-alto-contraste');
    const formulario = document.getElementById('formulario');

    botonOriginal.addEventListener('click', function () {
        // Cambia el estilo al original
        formulario.classList.remove('bg-dark', 'text-white');
        formulario.classList.add('bg-light', 'text-dark');
    });

    botonAltoContraste.addEventListener('click', function () {
        // Cambia el estilo al alto contraste
        formulario.classList.remove('bg-light', 'text-dark');
        formulario.classList.add('bg-dark', 'text-white');
    });
});