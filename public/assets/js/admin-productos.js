function obtenerProductosAdmin() {
  const datos = localStorage.getItem("productosAdmin");
  if (datos === null) {
    const inicial = productos.map(p => ({ ...p, stock: 10, stockCritico: 2 }));
    guardarProductosAdmin(inicial);
    return inicial;
  }
  return JSON.parse(datos);
}
function guardarProductosAdmin(lista) {
  localStorage.setItem("productosAdmin", JSON.stringify(lista));
}
const cuerpoProductos = document.querySelector('#productos-cuerpo');
if (cuerpoProductos) {
    renderizarTabla();
  cuerpoProductos.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-eliminar')) {
      const id = e.target.dataset.id;
      const producto = obtenerProductosAdmin().find(p => p.id === id);
      const nombre = producto ? producto.nombre : "este producto";
      if (!window.confirm(`¿Eliminar "${nombre}" del catálogo? Esta acción no se puede deshacer.`)) {
        return;
      }
      const lista = obtenerProductosAdmin().filter(p => p.id !== id);
      guardarProductosAdmin(lista);
      renderizarTabla();
    }
  });
}
function renderizarTabla() {
  const cuerpo = document.querySelector('#productos-cuerpo');
  const lista = obtenerProductosAdmin();
  cuerpo.innerHTML = "";

  lista.forEach((p) => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${p.idJuego}</td>
      <td>${p.nombre}</td>
      <td>${p.categoria}</td>
      <td>$${p.precio.toLocaleString('es-CL')}</td>
      <td>${p.stock}</td>
      <td>
        <a href="producto-form.html?id=${p.id}">Editar</a>
        <button class="btn-eliminar" data-id="${p.id}">Eliminar</button>
      </td>
    `;
    cuerpo.appendChild(fila);
  });
}