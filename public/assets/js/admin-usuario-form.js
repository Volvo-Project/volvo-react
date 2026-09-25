const params = new URLSearchParams(window.location.search);
const idEditar = params.get("id"); // el RUN del usuario a editar, o null si es nuevo

// ---------- 1. Llenar el select de Región ----------
function llenarRegiones() {
  const selectRegion = document.querySelector('#usr-region');
  regiones.forEach((r) => {
    const opcion = document.createElement('option');
    opcion.value = r.region;
    opcion.textContent = r.region;
    selectRegion.appendChild(opcion);
  });
}

// ---------- 2. Llenar el select de Comuna según la región elegida ----------
function actualizarComunas(nombreRegion) {
  const selectComuna = document.querySelector('#usr-comuna');
  selectComuna.innerHTML = '<option value="">Selecciona comuna</option>';

  const region = regiones.find(r => r.region === nombreRegion);
  if (region) {
    region.comunas.forEach((c) => {
      const opcion = document.createElement('option');
      opcion.value = c;
      opcion.textContent = c;
      selectComuna.appendChild(opcion);
    });
  }
}

llenarRegiones();

document.querySelector('#usr-region').addEventListener('change', (e) => {
  actualizarComunas(e.target.value);
});

// ---------- 3. Prellenar el formulario en modo edición ----------
if (idEditar) {
  const usuarioExistente = obtenerUsuariosAdmin().find(u => u.run === idEditar);
  if (usuarioExistente) {
    document.querySelector('#usr-run').value = usuarioExistente.run;
    document.querySelector('#usr-nombre').value = usuarioExistente.nombre;
    document.querySelector('#usr-apellidos').value = usuarioExistente.apellidos;
    document.querySelector('#usr-correo').value = usuarioExistente.correo;
    document.querySelector('#usr-fecha-nacimiento').value = usuarioExistente.fechaNacimiento || "";
    document.querySelector('#usr-tipo').value = usuarioExistente.tipo;
    document.querySelector('#usr-region').value = usuarioExistente.region;
    actualizarComunas(usuarioExistente.region);
    document.querySelector('#usr-comuna').value = usuarioExistente.comuna;
    document.querySelector('#usr-direccion').value = usuarioExistente.direccion;
  }
}

// ---------- 4. Validar y guardar ----------
const formUsuario = document.querySelector('#form-usuario');

if (formUsuario) {
  formUsuario.addEventListener('submit', (e) => {
    e.preventDefault();
    let esValido = true;

    const run = document.querySelector('#usr-run').value.trim();
    const errorRun = document.querySelector('#usr-run').nextElementSibling;
    if (run.length < 7 || run.length > 9 || !/^[0-9]+[0-9kK]$/.test(run)) {
      errorRun.textContent = "El RUN debe tener entre 7 y 9 caracteres, sin puntos ni guión (ej: 19011022K)";
      esValido = false;
    } else {
      errorRun.textContent = "";
    }

    const nombre = document.querySelector('#usr-nombre').value.trim();
    const errorNombre = document.querySelector('#usr-nombre').nextElementSibling;
    if (nombre === "" || nombre.length > 50) {
      errorNombre.textContent = "El nombre es requerido y no puede superar los 50 caracteres";
      esValido = false;
    } else {
      errorNombre.textContent = "";
    }

    const apellidos = document.querySelector('#usr-apellidos').value.trim();
    const errorApellidos = document.querySelector('#usr-apellidos').nextElementSibling;
    if (apellidos === "" || apellidos.length > 100) {
      errorApellidos.textContent = "Los apellidos son requeridos y no pueden superar los 100 caracteres";
      esValido = false;
    } else {
      errorApellidos.textContent = "";
    }

    const correo = document.querySelector('#usr-correo').value.trim();
    const errorCorreo = document.querySelector('#usr-correo').nextElementSibling;
    const dominioValido = /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/.test(correo);
    if (correo === "" || correo.length > 100 || !dominioValido) {
      errorCorreo.textContent = "Correo requerido, max 100 caracteres, solo @duoc.cl, @profesor.duoc.cl o @gmail.com";
      esValido = false;
    } else {
      errorCorreo.textContent = "";
    }

    const fechaNacimiento = document.querySelector('#usr-fecha-nacimiento').value;

    const tipo = document.querySelector('#usr-tipo').value;
    const errorTipo = document.querySelector('#usr-tipo').nextElementSibling;
    if (tipo === "") {
      errorTipo.textContent = "Selecciona un tipo de usuario";
      esValido = false;
    } else {
      errorTipo.textContent = "";
    }

    const region = document.querySelector('#usr-region').value;
    const errorRegion = document.querySelector('#usr-region').nextElementSibling;
    if (region === "") {
      errorRegion.textContent = "Seleccione region";
      esValido = false;
    } else {
      errorRegion.textContent = "";
    }

    const comuna = document.querySelector('#usr-comuna').value;
    const errorComuna = document.querySelector('#usr-comuna').nextElementSibling;
    if (comuna === "") {
      errorComuna.textContent = "Seleccione comuna";
      esValido = false;
    } else {
      errorComuna.textContent = "";
    }

    const direccion = document.querySelector('#usr-direccion').value.trim();
    const errorDireccion = document.querySelector('#usr-direccion').nextElementSibling;
    if (direccion === "" || direccion.length > 300) {
      errorDireccion.textContent = "La dirección es requerida y no puede superar los 300 caracteres";
      esValido = false;
    } else {
      errorDireccion.textContent = "";
    }

    if (!esValido) return;

    const lista = obtenerUsuariosAdmin();

    if (idEditar) {
      const usuario = lista.find(u => u.run === idEditar);
      usuario.run = run;
      usuario.nombre = nombre;
      usuario.apellidos = apellidos;
      usuario.correo = correo;
      usuario.fechaNacimiento = fechaNacimiento;
      usuario.tipo = tipo;
      usuario.region = region;
      usuario.comuna = comuna;
      usuario.direccion = direccion;
    } else {
      lista.push({
        run: run,
        nombre: nombre,
        apellidos: apellidos,
        correo: correo,
        fechaNacimiento: fechaNacimiento,
        tipo: tipo,
        region: region,
        comuna: comuna,
        direccion: direccion
      });
    }

    guardarUsuariosAdmin(lista);
    document.querySelector('#aviso').textContent = "Usuario guardado";
    document.querySelector('#aviso').hidden = false;
  });
}
