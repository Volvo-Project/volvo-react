function obtenerUsuariosAdmin() {
  const datos = localStorage.getItem("usuariosAdmin");
  if (datos === null) {


    return [];
  }
  return JSON.parse(datos);
}
function guardarUsuariosAdmin(lista) {
  localStorage.setItem("usuariosAdmin", JSON.stringify(lista));
}
const cuerpoUsuarios = document.querySelector('#usuarios-cuerpo');
if (cuerpoUsuarios) {
    renderizarTablaUsuarios()
  cuerpoUsuarios.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-eliminar')) {
      const id = e.target.dataset.id;
      const usuario = obtenerUsuariosAdmin().find(p => p.run === id);
      const nombre = usuario ? `${usuario.nombre} ${usuario.apellidos}` : "este usuario";
      if (!window.confirm(`¿Eliminar a "${nombre}" del listado? Esta acción no se puede deshacer.`)) {
        return;
      }
      const lista = obtenerUsuariosAdmin().filter(p => p.run !== id);
      guardarUsuariosAdmin(lista);
      renderizarTablaUsuarios();
    }
  });
}
function renderizarTablaUsuarios() {
  const cuerpo = document.querySelector('#usuarios-cuerpo');
  const lista = obtenerUsuariosAdmin();
  cuerpo.innerHTML = "";

  lista.forEach((p) => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${p.run}</td>
      <td>${p.nombre}</td>
      <td>${p.apellidos}</td>
      <td>${p.correo}</td>
      <td>${p.tipo}</td>
      <td>
        <a href="usuario-form.html?id=${p.run}">Editar</a>
        <button class="btn-eliminar" data-id="${p.run}">Eliminar</button>
      </td>
    `;
    cuerpo.appendChild(fila);
  });
}