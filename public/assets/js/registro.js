const formRegistro = document.querySelector('#formRegistro');

function obtenerUsuarios() {
    return JSON.parse(localStorage.getItem('usuarios') || '[]');
}

// ============ FUNCIONES DE VALIDACIÓN (una por campo) ============

function validarNombre() {
    const nombre = document.querySelector('#nombre').value.trim();
    const errorNombre = document.querySelector('#errorNombre');

    if (nombre === "") {
        errorNombre.textContent = "El nombre es obligatorio";
        return false;
    }
    errorNombre.textContent = "";
    return true;
}

function validarCorreo() {
    const correo = document.querySelector('#correoRegistro').value.trim().toLowerCase();
    const errorCorreo = document.querySelector('#errorCorreoRegistro');
    const dominios = ['@duoc.cl', '@profesor.duoc.cl', '@gmail.com'];
    const dominioOk = dominios.some((dominio) => correo.endsWith(dominio));

    if (correo === "") {
        errorCorreo.textContent = "El correo es obligatorio";
        return false;
    } else if (!dominioOk || correo.startsWith('@')) {
        errorCorreo.textContent = "Debe usar un correo @duoc.cl, @profesor.duoc.cl o @gmail.com";
        return false;
    } else if (obtenerUsuarios().some((usuario) => usuario.correo === correo)) {
        errorCorreo.textContent = "Este correo ya está registrado";
        return false;
    }
    errorCorreo.textContent = "";
    return true;
}

function validarContrasena() {
    const contrasena = document.querySelector('#contrasenaRegistro').value.trim();
    const errorContrasena = document.querySelector('#errorContrasenaRegistro');

    if (contrasena.length < 4 || contrasena.length > 10) {
        errorContrasena.textContent = "Debe tener entre 4 y 10 caracteres";
        return false;
    }
    errorContrasena.textContent = "";
    return true;
}

function validarConfirmarContrasena() {
    const contrasena = document.querySelector('#contrasenaRegistro').value.trim();
    const confirmarContrasena = document.querySelector('#confirmarContrasena').value.trim();
    const errorConfirmar = document.querySelector('#errorConfirmarContrasena');

    if (confirmarContrasena !== contrasena) {
        errorConfirmar.textContent = "Las contraseñas no coinciden";
        return false;
    }
    errorConfirmar.textContent = "";
    return true;
}

// ============ TIEMPO REAL: validar al salir de cada campo ============

document.querySelector('#nombre').addEventListener('blur', validarNombre);
document.querySelector('#correoRegistro').addEventListener('blur', validarCorreo);
document.querySelector('#contrasenaRegistro').addEventListener('blur', validarContrasena);
document.querySelector('#confirmarContrasena').addEventListener('blur', validarConfirmarContrasena);

// ============ SUBMIT: valida todo y crea la cuenta ============

formRegistro.addEventListener('submit', (e) => {
    e.preventDefault();

    const aviso = document.querySelector('#avisoRegistro');
    aviso.hidden = true;

    let valido = true;
    if (!validarNombre()) valido = false;
    if (!validarCorreo()) valido = false;
    if (!validarContrasena()) valido = false;
    if (!validarConfirmarContrasena()) valido = false;

    if (!valido) {
        return;
    }

    const nombre = document.querySelector('#nombre').value.trim();
    const correo = document.querySelector('#correoRegistro').value.trim().toLowerCase();
    const contrasena = document.querySelector('#contrasenaRegistro').value.trim();

    const usuarios = obtenerUsuarios();
    usuarios.push({ nombre, correo, contrasena, rol: "Cliente" });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    aviso.textContent = 'Cuenta creada correctamente. Ahora puedes iniciar sesión.';
    aviso.className = 'aviso mt-3 text-center alert alert-success';
    aviso.hidden = false;
    formRegistro.reset();
});
