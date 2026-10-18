# Documento de cobertura de testing

**Proyecto:** Volvo React  
**Tecnologías:** Vite, React y JavaScript  
**Pruebas:** Vitest, React Testing Library, `user-event` y jsdom  
**Fecha de ejecución documentada:** 18 de octubre de 2026

> Este informe describe pruebas ejecutadas en este repositorio. Los resultados son una medición de esa ejecución y pueden cambiar al modificar el código o la suite.

## 1. Objetivo

Documentar el alcance comprobado por las pruebas automatizadas, identificar las áreas que requieren cobertura adicional y dejar registro de los resultados obtenidos. Los porcentajes informan qué parte del código instrumentado se ejecutó; no garantizan por sí solos que el comportamiento sea correcto ni que no existan defectos.

## 2. Alcance de las pruebas

La suite verifica componentes y páginas React, validadores, proveedores de estado, navegación, formularios, renderizado condicional, interacciones de usuario y persistencia en `localStorage`.

Se excluyen de la validación ejecutada: infraestructura, servicios backend, bases de datos, servicios externos, pagos reales y comportamiento visual en navegadores reales. Tampoco se ejecutó una suite End to End (E2E) con Playwright o Cypress.

## 3. Estructura relevante del proyecto

```text
src/
  components/  Header y componentes de interfaz
  context/     CarritoContext y SesionContext
  data/        Datos de productos y blogs
  hooks/       Hooks de formularios
  pages/       Catálogo, detalle, carrito, formularios y demás páginas
  tests/       Pruebas automatizadas
  utils/       Validadores
  App.jsx      Definición de rutas
```

## 4. Herramientas y configuración

- **Vitest** ejecuta la suite y calcula la cobertura mediante el proveedor V8.
- **jsdom** proporciona el entorno DOM simulado.
- **React Testing Library** verifica contenido y comportamiento accesibles desde la interfaz.
- **`user-event`** simula interacciones como escribir, hacer clic y cambiar de campo.
- **`@testing-library/jest-dom`** proporciona aserciones para el DOM.
- `src/tests/setupTests.js` configura los matchers y limpia el DOM y `localStorage` después de cada caso.

Comandos disponibles:

```bash
npm run test:run
npm run coverage
```

La configuración en `vite.config.js` genera reportes de texto y HTML e instrumenta `src/components/**`, `src/pages/**`, `src/data/**`, `src/context/**`, `src/hooks/**` y `src/utils/**`.

## 5. Tipos de pruebas implementadas

| Tipo | Alcance observado |
|---|---|
| Unitarias | Validadores, datos y lógica de los contextos de carrito y sesión. |
| Componentes y páginas | Renderizado, estados condicionales, mensajes y controles de catálogo, formularios y páginas. |
| Integración | Rutas, proveedores React, persistencia en `localStorage` y recorridos de compra usando la aplicación real dentro de jsdom. |
| E2E en navegador | No ejecutadas. Los flujos de integración en jsdom no equivalen a E2E en un navegador real. |

## 6. Cobertura funcional por área

| Área | Validaciones que contiene la suite |
|---|---|
| Navegación y rutas | Carga de las rutas principales, enlaces relevantes, detalle de blog y rutas de Contacto y páginas informativas. |
| Catálogo | Tarjetas, precios, juegos gratuitos, búsqueda con y sin coincidencias, filtros, categorías y enlaces al detalle. |
| Paginación | Páginas disponibles, cambio de página, productos mostrados, página activa y conservación del filtro. |
| Detalle de producto | Identificador válido e inexistente, opiniones, agregado al carrito y rechazo de cantidad inválida. |
| Carrito | Carrito vacío y poblado, cantidades, subtotales, total, eliminación, vaciado, imagen opcional y resumen del pedido. |
| Compra | Validación de carrito vacío, compra con sesión, redirección al login y conservación del carrito durante autenticación. |
| Sesión y registro | Registro válido y duplicado, correo normalizado, credenciales válidas e inválidas, persistencia, carga de sesión y cierre de sesión. |
| Contacto | Campos requeridos, validación al interactuar, dominios de correo permitidos, límites, envío válido, limpieza y contador de caracteres. |
| Blog | Tarjetas, títulos, resúmenes, imágenes, navegación al detalle, contenido, video o imagen y noticia inexistente. |
| Nosotros y encabezado | Secciones e integrantes; enlaces, estado de sesión, contador de carrito y cambio de estilo al desplazarse. |
| Datos y validaciones | Unicidad de identificadores, relación entre precio y estado gratuito, reglas de correo y contraseña, y límites de longitud. |

## 7. Pruebas de componentes y páginas

| Componente o página | Comprobaciones realizadas | Estado de la suite |
|---|---|---|
| `Header` | Enlace al catálogo, estado al desplazarse, contador del carrito, menú según sesión y cierre de sesión. | Aprobado |
| `Producto` | Tarjetas, precio, juego gratuito, búsqueda, filtros y navegación al detalle; también se prueba con datos simulados. | Aprobado |
| `DetalleProducto` | Producto no encontrado, opiniones, cantidad y agregado al carrito. | Aprobado |
| `Carrito` | Renderizado de productos y acciones; casos de compra autenticada y no autenticada. | Aprobado |
| `Contacto` | Campos, validaciones, envío correcto, contador y registro de ruta. | Aprobado |
| `Login` y `Registro` | Errores, credenciales, validación, persistencia y redirecciones. | Aprobado |
| `Blogs` y `BlogDetalle` | Listado, detalle, variaciones de contenido y ruta inválida. | Aprobado |
| `Nosotros` | Título, secciones y equipo. | Aprobado |

## 8. Casos representativos de formularios

| ID | Caso comprobado | Resultado esperado | Estado |
|---|---|---|---|
| FOR-01 | Enviar Contacto, Login o Registro vacío | Mostrar los errores de campos requeridos correspondientes. | Aprobado |
| FOR-02 | Ingresar correo de dominio no permitido | Informar que el correo no cumple la regla de dominio. | Aprobado |
| FOR-03 | Ingresar datos válidos en Contacto | Mostrar confirmación y limpiar los campos. | Aprobado |
| FOR-04 | Registrar contraseñas distintas | Mostrar el error de discrepancia. | Aprobado |
| FOR-05 | Registrar un correo ya utilizado | Rechazar el registro y conservar un solo usuario. | Aprobado |
| FOR-06 | Iniciar sesión con credenciales incorrectas | Mostrar error y no crear sesión. | Aprobado |
| FOR-07 | Iniciar sesión con credenciales existentes | Guardar la sesión y navegar al destino esperado. | Aprobado |

## 9. Pruebas de servicios

No se identifican pruebas de consumo de servicios backend ni de llamadas HTTP en la suite revisada. Por lo tanto, las respuestas HTTP, errores de red, tiempos de espera y disponibilidad de servicios no forman parte de los resultados de este informe.

## 10. Pruebas de navegación e integración

| ID | Acción | Resultado esperado | Estado |
|---|---|---|---|
| NAV-01 | Abrir `/nosotros`, `/blogs`, `/contacto`, `/carrito`, `/login` o `/registro` | Mostrar la página correspondiente. | Aprobado |
| NAV-02 | Abrir el detalle de un blog existente | Mostrar el contenido de la noticia. | Aprobado |
| INT-01 | Catálogo → detalle → agregar al carrito → carrito | Mostrar producto, cantidad y total coherentes. | Aprobado |
| INT-02 | Remontar la aplicación después de agregar productos | Recuperar carrito y contador desde `localStorage`. | Aprobado |
| INT-03 | Intentar comprar sin sesión, iniciar sesión y volver al carrito | Conservar el carrito y permitir completar la compra. | Aprobado |

Estos flujos usan `MemoryRouter` y jsdom. No validan una sesión real del navegador ni despliegue en un entorno productivo.

## 11. Pruebas End to End

No se encontraron pruebas E2E ejecutadas con Playwright, Cypress u otra herramienta de navegador. Los flujos `FlujoCarrito.test.jsx` y `FlujoCompra.test.jsx` son pruebas de integración automatizadas sobre la aplicación en jsdom; se reportan como tales y no como E2E.

## 12. Resultado de ejecución

Comando ejecutado: `npm run coverage`

| Resultado | Cantidad |
|---|---:|
| Archivos de prueba aprobados | 21 de 21 |
| Casos aprobados | 116 de 116 |
| Casos fallidos | 0 |

## 13. Cobertura global de código

| Métrica | Cubierto | Total | Cobertura |
|---|---:|---:|---:|
| Statements | 328 | 354 | 92,65 % |
| Branches | 178 | 190 | 93,68 % |
| Functions | 93 | 110 | 84,54 % |
| Lines | 293 | 316 | 92,72 % |

## 14. Interpretación de las métricas

| Métrica | Interpretación |
|---|---|
| Statements | Proporción de instrucciones instrumentadas que ejecutó la suite. |
| Branches | Proporción de ramas de decisión instrumentadas que se ejecutaron. |
| Functions | Proporción de funciones instrumentadas que se ejecutaron. |
| Lines | Proporción de líneas ejecutables instrumentadas que se ejecutaron. |

La cobertura de una rama no demuestra que una aserción valide correctamente el resultado esperado. Asimismo, un porcentaje agregado alto puede ocultar archivos o escenarios con cobertura baja.

## 15. Cobertura por área y archivos que requieren atención

El reporte de esta ejecución muestra diferencias importantes entre áreas:

| Área del reporte | Statements | Branches | Functions | Lines |
|---|---:|---:|---:|---:|
| `components` | 56,25 % | 80 % | 36 % | 55,55 % |
| `context` | 98,46 % | 90,9 % | 100 % | 98,27 % |
| `pages` | 98,18 % | 94,39 % | 97,77 % | 98,65 % |
| `utils` | 98,21 % | 97,61 % | 100 % | 100 % |

Hallazgos concretos del reporte:

- `Banner.jsx` e `Inicio.jsx` registran 0 % de cobertura.
- `Categories.jsx` y `Features.jsx` registran 25 % de statements y líneas.
- `MostPlayed.jsx` registra 50 % de statements y líneas.
- `Trending.jsx` registra 50 % de statements y 40 % de líneas.
- `Header.jsx` registra 100 % de líneas, pero conserva ramas no cubiertas.

La suite tiene pruebas para componentes principales y páginas, pero varios componentes de presentación y la página de inicio requieren pruebas directas o escenarios adicionales. Los datos por área no deben interpretarse como equivalentes a cobertura visual.

## 16. Criterios de aceptación

En la configuración actual no hay umbrales mínimos de cobertura que hagan fallar `npm run coverage`. Por tanto:

| Criterio observado | Resultado |
|---|---|
| La suite completa debe finalizar sin fallos | Cumple: 116 de 116 casos aprobados. |
| Cobertura mínima global configurada | No definida en `vite.config.js`. |
| Aprobación automática basada en porcentaje | No configurada. |

Los porcentajes anteriores son métricas informativas de esta ejecución, no un certificado de cumplimiento de un umbral institucional.

## 17. Pendientes recomendados

1. Añadir pruebas para `Inicio.jsx` y `Banner.jsx`, actualmente con 0 % en el reporte.
2. Ampliar las pruebas de componentes con cobertura parcial, priorizando ramas condicionales e interacciones.
3. Añadir pruebas de navegador E2E para recorridos críticos si el proyecto requiere validar la experiencia en navegador real.
4. Incorporar pruebas de servicios y errores HTTP si se integra un backend.
5. Definir umbrales de cobertura acordados por el equipo antes de convertirlos en criterio obligatorio.
6. Evaluar las combinaciones inválidas de datos de `localStorage` en los flujos que dependan de esos valores.

## 18. Evidencias

| Evidencia | Registro disponible |
|---|---|
| Ejecución de pruebas | Salida de `npm run coverage`: 21 archivos aprobados y 116 casos aprobados. |
| Métricas | Reporte V8 en la consola con Statements, Branches, Functions y Lines. |
| Configuración | `vite.config.js` declara el proveedor V8 y los reporteros `text` y `html`. |
| Ubicación del reporte HTML | Se genera localmente en `coverage/index.html` al ejecutar la cobertura; no se incluye como evidencia versionada en este documento. |
| Versión de código y entorno | Fecha de ejecución registrada en este informe; no se adjuntó identificador de commit. |

## 19. Resultado general

La ejecución documentada finalizó sin fallos y alcanzó 92,72 % de cobertura de líneas y 93,68 % de ramas en el código instrumentado. La cobertura de componentes es considerablemente menor que la de páginas, contextos y utilidades; `Inicio.jsx` y `Banner.jsx` son los vacíos más visibles del reporte. No hay umbral configurado, por lo que el resultado se considera una medición descriptiva y no una aprobación formal basada en cobertura.

## 20. Conclusión

La suite existente valida reglas de negocio y recorridos importantes del catálogo, el carrito, la compra, la sesión y los formularios. La ejecución registrada confirma que todos los casos automatizados pasan, y las métricas permiten priorizar áreas con menor ejecución.

Para ampliar la validación conviene cubrir los componentes y la página de inicio que aparecen sin pruebas, definir criterios de cobertura con el equipo y complementar las pruebas en jsdom con E2E en navegador cuando el alcance del proyecto lo requiera.
