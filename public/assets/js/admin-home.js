// Panel de administración: muestra un resumen rápido del catálogo y los usuarios.
const totalProductos = document.querySelector('#total-productos');

if (totalProductos) {
    const listaProductos = obtenerProductosAdmin();
    const listaUsuarios = obtenerUsuariosAdmin();

    totalProductos.textContent = listaProductos.length;
    document.querySelector('#total-usuarios').textContent = listaUsuarios.length;

    // Productos cuyo stock ya llegó (o bajó) del stock crítico definido
    const stockBajo = listaProductos.filter((p) => {
        const critico = p.stockCritico == null ? 0 : p.stockCritico;
        return p.stock <= critico;
    }).length;
    document.querySelector('#stock-bajo').textContent = stockBajo;
}
