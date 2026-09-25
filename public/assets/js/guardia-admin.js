// Protege las páginas del panel: solo entra un usuario con sesión de Administrador.
// Se ejecuta en el <head>, antes de dibujar la página, para redirigir sin parpadeo.
(function () {
    let sesion = null;
    try {
        sesion = JSON.parse(localStorage.getItem('usuarioSesion') || 'null');
    } catch (error) {
        sesion = null;
    }

    if (!sesion || sesion.rol !== 'Administrador') {
        window.location.href = '../login.html?motivo=admin-requerido';
    }
})();

// Cerrar sesión desde el panel: borra la sesión y vuelve al login.
// Aprovechamos el mismo evento para escribir el nombre en la barra superior.
document.addEventListener('DOMContentLoaded', () => {
    const etiqueta = document.querySelector('#admin-sesion');
    if (etiqueta) {
        const sesion = JSON.parse(localStorage.getItem('usuarioSesion') || 'null');
        if (sesion) {
            etiqueta.textContent = 'Sesión: ' + sesion.nombre;
        }
    }

    const boton = document.querySelector('#cerrar-sesion');
    if (boton) {
        boton.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('usuarioSesion');
            window.location.href = '../login.html';
        });
    }
});
