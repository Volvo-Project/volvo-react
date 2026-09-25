function obtenerSesion() {
    try {
        return JSON.parse(localStorage.getItem('usuarioSesion') || 'null');
    } catch (error) {
        return null;
    }
}

function cerrarSesion() {
    localStorage.removeItem('usuarioSesion');
    window.location.href = 'index.html';
}

function actualizarNavegacionSesion() {
    const sesion = obtenerSesion();
    const enlacesSesion = document.querySelectorAll('a[href="login.html"]');

    if (!sesion) {
        return;
    }

    // Con sesión iniciada, "Registrarse" ya no tiene sentido: se oculta
    document.querySelectorAll('a[href="registro.html"]').forEach((enlace) => {
        const item = enlace.closest('li');
        if (item) {
            item.hidden = true;
        }
    });

    enlacesSesion.forEach((enlace) => {
        const contenedor = enlace.closest('li');

        // Si la sesión es de administrador, agrega el enlace al panel antes de la cuenta
        if (sesion.rol === 'Administrador') {
            const itemAdmin = document.createElement('li');
            itemAdmin.innerHTML = '<a href="admin/home.html">Panel</a>';
            contenedor.parentNode.insertBefore(itemAdmin, contenedor);
        }

        const nombre = sesion.nombre || sesion.correo;
        enlace.textContent = nombre;
        enlace.href = '#';
        enlace.id = 'cuentaSesion';
        enlace.setAttribute('aria-haspopup', 'true');
        enlace.setAttribute('aria-expanded', 'false');

        const menu = document.createElement('ul');
        menu.className = 'menu-cuenta';
        menu.hidden = true;
        menu.innerHTML = '<li><button type="button" id="cerrarSesion">Cerrar cuenta</button></li>';
        contenedor.appendChild(menu);

        enlace.addEventListener('click', (event) => {
            event.preventDefault();
            const abierto = !menu.hidden;
            menu.hidden = abierto;
            enlace.setAttribute('aria-expanded', String(!abierto));
        });

        menu.querySelector('#cerrarSesion').addEventListener('click', cerrarSesion);
    });
}

document.addEventListener('DOMContentLoaded', actualizarNavegacionSesion);
