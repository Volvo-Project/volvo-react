const form = document.querySelector('#formContacto');

// ============ FUNCIONES DE VALIDACIÓN (una por campo) ============
// Cada función revisa su campo, muestra u oculta el mensaje de error
// y devuelve true si está bien o false si está mal.

function validarNombre() {
    const nombre = document.querySelector('#nombre').value.trim();
    const errorNombre = document.querySelector('#errorNombre');

    if (nombre === "") {
        errorNombre.textContent = "El nombre es obligatorio";
        return false;
    } else if (nombre.length > 100) {
        errorNombre.textContent = "Maximo 100 caracteres";
        return false;
    }
    errorNombre.textContent = "";
    return true;
}

function validarCorreo() {
    const correo = document.querySelector('#correo').value.trim();
    const errorCorreo = document.querySelector('#errorCorreo');
    const dominios = ["@duoc.cl", "@profesor.duoc.cl", "@gmail.com"];
    const dominioOk = dominios.some((d) => correo.endsWith(d));

    if (correo === "") {
        errorCorreo.textContent = "El correo es obligatorio";
        return false;
    } else if (correo.length > 100) {
        errorCorreo.textContent = "Maximo 100 caracteres";
        return false;
    } else if (!dominioOk) {
        errorCorreo.textContent = "Debe terminar en @duoc.cl, @profesor.duoc.cl o @gmail.com";
        return false;
    }
    errorCorreo.textContent = "";
    return true;
}

function validarComentario() {
    const comentario = document.querySelector('#comentario').value.trim();
    const errorComentario = document.querySelector('#errorComentario');

    if (comentario === "") {
        errorComentario.textContent = "El comentario no puede estar vacio";
        return false;
    } else if (comentario.length > 500) {
        errorComentario.textContent = "Maximo 500 caracteres";
        return false;
    }
    errorComentario.textContent = "";
    return true;
}

// ============ TIEMPO REAL: validar al salir de cada campo ============

document.querySelector('#nombre').addEventListener('blur', validarNombre);
document.querySelector('#correo').addEventListener('blur', validarCorreo);
document.querySelector('#comentario').addEventListener('blur', validarComentario);

// ============ SUBMIT: valida todo junto ============

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const aviso = document.querySelector('#aviso');
    aviso.hidden = true;

    let valido = true;
    if (!validarNombre()) valido = false;
    if (!validarCorreo()) valido = false;
    if (!validarComentario()) valido = false;

    if (valido) {
        aviso.textContent = "Aviso: mensaje enviado correctamente";
        aviso.hidden = false;
        form.reset();
    }
});
