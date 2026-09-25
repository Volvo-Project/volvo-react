const params = new URLSearchParams(window.location.search);
const idEditar = params.get("id");

if (idEditar) {
    const productoExistente = obtenerProductosAdmin().find(p => p.id === idEditar);
    if (productoExistente) {
        document.querySelector('#prod-codigo').value = productoExistente.idJuego;
        document.querySelector('#prod-nombre').value = productoExistente.nombre;
        document.querySelector('#prod-descripcion').value = productoExistente.descripcion;
        document.querySelector('#prod-precio').value = productoExistente.precio;
        document.querySelector('#prod-stock').value = productoExistente.stock;
        document.querySelector('#prod-stock-critico').value = productoExistente.stockCritico;
        document.querySelector('#prod-categoria').value = productoExistente.categoria;
        document.querySelector('#prod-imagen').value = productoExistente.imagen;
    }
}
const formProducto = document.querySelector('#form-producto');

if (formProducto) {
    formProducto.addEventListener('submit', (e) => {
        e.preventDefault();
        let esValido = true;

        const codigo = document.querySelector('#prod-codigo').value.trim();
        const errorCodigo = document.querySelector('#prod-codigo').nextElementSibling;
        if (codigo.length < 3) {
            errorCodigo.textContent = "El código debe tener al menos 3 caracteres";
            esValido = false;
        } else {
            errorCodigo.textContent = "";
        }

        const nombre = document.querySelector('#prod-nombre').value.trim();
        const errorNombre = document.querySelector('#prod-nombre').nextElementSibling;
        if (nombre === "" || nombre.length > 100) {
            errorNombre.textContent = "El nombre no puede estar vacio ni superar los 100 caracteres";
            esValido = false;
        } else {
            errorNombre.textContent = "";
        }

        const descripcion = document.querySelector('#prod-descripcion').value.trim();
        const errorDescripcion = document.querySelector('#prod-descripcion').nextElementSibling;
        if (descripcion === "" || descripcion.length > 500) {
            errorDescripcion.textContent = "La descripción es obligatoria y no puede superar los 500 caracteres";
            esValido = false;
        } else {
            errorDescripcion.textContent = "";
        }

        const precioTexto = document.querySelector('#prod-precio').value.trim();
        const precio = Number(precioTexto);
        const errorPrecio = document.querySelector('#prod-precio').nextElementSibling;
        if (precioTexto === "" || isNaN(precio) || precio < 0) {
            errorPrecio.textContent = "El precio debe ser un número mayor o igual a 0";
            esValido = false;
        } else {
            errorPrecio.textContent = "";
        }

        const stockTexto = document.querySelector('#prod-stock').value.trim();
        const stock = Number(stockTexto);
        const errorStock = document.querySelector('#prod-stock').nextElementSibling;
        if (stockTexto === "" || isNaN(stock) || stock < 0 || !Number.isInteger(stock)) {
            errorStock.textContent = "El stock debe ser un número entero mayor o igual a 0";
            esValido = false;
        } else {
            errorStock.textContent = "";
        }

        const stockCriticoTexto = document.querySelector('#prod-stock-critico').value.trim();
        const stockCriticoNum = Number(stockCriticoTexto);
        const errorStockCritico = document.querySelector('#prod-stock-critico').nextElementSibling;
        if (stockCriticoTexto !== "" && (isNaN(stockCriticoNum) || stockCriticoNum < 0 || !Number.isInteger(stockCriticoNum))) {
            errorStockCritico.textContent = "El stock crítico debe ser un número entero mayor o igual a 0";
            esValido = false;
        } else {
            errorStockCritico.textContent = "";
        }

        const categoria = document.querySelector('#prod-categoria').value;
        const errorCategoria = document.querySelector('#prod-categoria').nextElementSibling;
        if (categoria === "") {
            errorCategoria.textContent = "Selecciona una categoría";
            esValido = false;
        } else {
            errorCategoria.textContent = "";
        }


        if (!esValido) return;
        const imagen = document.querySelector('#prod-imagen').value.trim();

        const lista = obtenerProductosAdmin();

        if (idEditar) {
            const producto = lista.find(p => p.id === idEditar);
            producto.idJuego = codigo;
            producto.nombre = nombre;
            producto.descripcion = descripcion;
            producto.precio = precio;
            producto.stock = stock;
            producto.stockCritico = stockCriticoTexto === "" ? null : stockCriticoNum;
            producto.categoria = categoria;
            producto.imagen = imagen;
        } else {
            lista.push({
                id: nombre.toLowerCase().replace(/\s+/g, "-"),
                idJuego: codigo,
                nombre: nombre,
                descripcion: descripcion,
                precio: precio,
                stock: stock,
                stockCritico: stockCriticoTexto === "" ? null : stockCriticoNum,
                categoria: categoria,
                imagen: imagen,
                esGratis: precio === 0
            });
        }

        guardarProductosAdmin(lista);
        document.querySelector('#aviso').textContent = "Producto guardado";
        document.querySelector('#aviso').hidden = false;


    });
}
