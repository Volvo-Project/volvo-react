# Documento de cobertura de testing

**Proyecto:** Volvo React · DSY1104 Desarrollo Fullstack II, Evaluación Parcial 2  
**Integrantes:** Nicolás Olivares, Matías Rodríguez, Emiliano Cerda  
**Ejecución documentada:** 19 de octubre de 2026, commit `828e8ce`

**Resultado:** 131 de 131 pruebas aprobadas en 26 archivos, con **99,39 %** de cobertura de líneas y **100 %** de funciones. Todos los archivos superan el mínimo de 60 % acordado por el equipo.

## 1. Alcance

Se prueban componentes y páginas React, validadores, Context de carrito y sesión, el hook `useFormulario`, navegación, formularios, renderizado condicional, interacciones de usuario y persistencia en `localStorage`.

Quedan fuera: el comportamiento visual en navegadores reales (incluido el diseño responsivo, que se muestra en la presentación) y el despliegue. El proyecto es solo frontend, así que no hay backend ni llamadas HTTP que probar. No se usaron pruebas E2E en navegador real (Playwright o Cypress).

## 2. Herramientas y configuración

> La pauta menciona Jasmine y Karma. El equipo usó **Vitest** con autorización del docente, porque se integra directamente con Vite, el empaquetador del proyecto.

| Herramienta | Uso |
|---|---|
| Vitest + `@vitest/coverage-v8` | Ejecuta las pruebas y mide la cobertura |
| jsdom | Simula el navegador |
| React Testing Library | Busca elementos como los ve el usuario: por rol, texto o etiqueta |
| `user-event` | Simula clics y escritura |
| `@testing-library/jest-dom` | Aserciones del DOM: `toBeInTheDocument`, `toHaveClass`, `toHaveValue`, etc. |
| `src/tests/setupTests.js` | Después de cada prueba limpia el DOM y `localStorage`, para que ninguna dependa de otra |

En `vite.config.js`, la cobertura instrumenta `components`, `pages`, `data`, `context`, `hooks` y `utils`, y genera reportes en consola y en `coverage/index.html`.

```bash
npm run test:run   # ejecuta toda la suite
npm run coverage   # ejecuta la suite y genera el reporte de cobertura
```

## 3. Cobertura obtenida

| Métrica | Cubierto | Cobertura |
|---|---:|---:|
| Statements | 363 / 368 | 98,64 % |
| Branches | 188 / 198 | 94,94 % |
| Functions | 115 / 115 | 100 % |
| Lines | 328 / 330 | 99,39 % |

De los 30 archivos instrumentados, 23 están al 100 %. Los 7 restantes:

| Archivo | Stmts | Branches | Lines | Qué queda sin ejecutar |
|---|---:|---:|---:|---|
| `context/CarritoContext.jsx` | 100 % | 83,33 % | 100 % | `localStorage` con un valor que no es arreglo (línea 11) y una rama al sumar cantidad a un producto existente (línea 32) |
| `pages/DetalleProducto.jsx` | 100 % | 87,5 % | 100 % | Producto sin opiniones (líneas 29 y 151) |
| `pages/Registro.jsx` | 96 % | 90 % | 95,83 % | Redirección si el usuario ya inició sesión (línea 18) |
| `components/Header.jsx` | 95,23 % | 91,66 % | 100 % | Página sin `.header-text` (línea 24) |
| `pages/Producto.jsx` | 97,72 % | 92,3 % | 100 % | Número de página no numérico en la URL (línea 76) y combinaciones del buscador (líneas 137-138) |
| `utils/validaciones.js` | 93,75 % | 92,85 % | 100 % | Correo de más de 100 caracteres (línea 8) |
| `context/SesionContext.jsx` | 96,87 % | 100 % | 96,66 % | `localStorage` con JSON inválido (línea 13) |

Son casos de borde (datos corruptos o valores inesperados). No queda ningún flujo principal sin probar.

## 4. Pruebas por archivo

| Archivo | Casos | Qué verifica |
|---|---:|---|
| `Carrito.test.jsx` | 13 | Carrito: productos, cantidades, totales, eliminar, vaciar y compra |
| `CarritoContext.test.jsx` | 10 | Lógica del Context del carrito y persistencia |
| `Header.test.jsx` | 8 | Enlaces, scroll, contador del carrito y menú según sesión |
| `Producto.test.jsx` | 8 | Catálogo: tarjetas, búsqueda, filtros y enlaces |
| `SesionContext.test.jsx` | 8 | Registro, inicio y cierre de sesión |
| `validaciones.test.js` | 8 | Reglas de correo y contraseña |
| `validarContacto.test.js` | 8 | Reglas del formulario de contacto |
| `Contacto.test.jsx` | 7 | Formulario de contacto |
| `Login.test.jsx` | 7 | Formulario de inicio de sesión |
| `Rutas.test.jsx` | 7 | Cada enlace del menú lleva a su página |
| `DetalleProducto.test.jsx` | 6 | Ficha, opiniones y agregar al carrito |
| `BlogDetalle.test.jsx` | 5 | Detalle de noticia y noticia inexistente |
| `MenuCelular.test.jsx` | 4 | Menú del celular: abre, cierra y se cierra al tocar un enlace |
| `Paginacion.test.jsx` | 4 | Cambio de página, página activa y filtro conservado |
| `Registro.test.jsx` | 4 | Formulario de registro |
| `Banner.test.jsx` | 3 | Buscador del inicio (con mock) |
| `Blogs.test.jsx` | 3 | Listado de noticias |
| `Newsletter.test.jsx` | 3 | Validación del newsletter |
| `NoEncontrada.test.jsx` | 3 | Página 404 |
| `Inicio.test.jsx` | 2 | Secciones del inicio y enlace de categoría |
| `Nosotros.test.jsx` | 2 | Página Nosotros |
| `Producto.mock.test.jsx` | 2 | Catálogo con datos simulados (mock) |
| `blogs.data.test.js` | 2 | Integridad de los datos de blogs |
| `productos.data.test.js` | 2 | Integridad de los datos de productos |
| `FlujoCarrito.test.jsx` | 1 | Integración: catálogo → detalle → carrito y persistencia |
| `FlujoCompra.test.jsx` | 1 | Integración: compra sin sesión → login → vuelve al carrito |
| **Total** | **131** | |

## 5. Casos representativos

| ID | Caso | Resultado esperado |
|---|---|---|
| FOR-01 | Enviar Contacto, Login o Registro vacío | Errores de campos requeridos |
| FOR-02 | Correo con dominio no permitido (Contacto, Login y Newsletter) | Mensaje con los dominios permitidos |
| FOR-03 | Registrar contraseñas distintas o un correo ya usado | Error y registro rechazado |
| FOR-04 | Newsletter con correo `@duoc.cl` | Confirmación y campo vaciado |
| NAV-01 | Abrir una dirección inexistente (`/nadaqver`) | "Página no encontrada", sin afectar rutas válidas |
| NAV-02 | Buscar desde el banner | Navegar a `/producto?buscar=<texto>` |
| NAV-03 | Cambiar de página con un filtro activo | Se conserva el filtro |
| INT-01 | Catálogo → detalle → carrito, y recargar la app | Producto y total correctos, recuperados desde `localStorage` |
| INT-02 | Comprar sin sesión → login → volver | Se conserva el carrito y se completa la compra |

Todos aprobados. Los flujos de integración usan `MemoryRouter`, que permite indicar la dirección inicial con `initialEntries`.

## 6. Uso de mocks

| Archivo | Qué se simula | Cómo | Para qué |
|---|---|---|---|
| `Producto.mock.test.jsx` | Datos de `productos.js` | `vi.mock('../data/productos', ...)` con 2 productos | Probar el catálogo con datos conocidos: 2 tarjetas, precio `$12.990` y un juego "Gratis" |
| `Banner.test.jsx` | `useNavigate` de React Router | `vi.fn()` + `vi.mock('react-router-dom', ...)`, que reemplaza solo `useNavigate` | Verificar a qué dirección navega el buscador (`toHaveBeenCalledWith`) sin cambiar de página. `mockClear()` limpia las llamadas entre pruebas |

## 7. Elementos sin prueba dedicada

Criterio del equipo: se prueba todo lo que toma decisiones (estado, validaciones, condiciones, navegación, `localStorage`). Lo que solo muestra contenido fijo se justifica.

| Elemento | Justificación |
|---|---|
| `main.jsx` | Solo monta `<App />` con sus Providers. No tiene lógica, y cada pieza se prueba por separado |
| `styles/*.css`, `public/assets/*` | No es código con lógica. El responsivo depende de *media queries*, que jsdom no aplica; se muestra en la presentación |
| `Footer`, `Features`, `Trending`, `MostPlayed`, `Categories` | Contenido fijo sin lógica. Quedan al 100 % al dibujarse en `Inicio.test.jsx` y `Rutas.test.jsx` |
| `CampoFormulario`, `useFormulario` | Piezas internas de los formularios. Quedan al 100 % a través de Contacto, Login y Registro |
| `App.jsx` | Solo declara rutas. Se prueba con `Rutas.test.jsx` y `NoEncontrada.test.jsx` |

## 8. Conclusión

La suite pasa completa (131/131) y ejecuta el 99,39 % de las líneas. Cubre la lógica principal de la tienda (catálogo, paginación, carrito, compra, sesión y formularios con validación) e incluye mocks para aislar datos y navegación. Todos los archivos superan el 60 % acordado, y los que no tienen prueba propia están justificados.
