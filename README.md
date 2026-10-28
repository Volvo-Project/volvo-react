# Volvo React

Tienda de videojuegos hecha en React. Es la migración de [volvo-web](https://github.com/Volvo-Project/volvo-html), que estaba hecha con HTML, CSS y jQuery.

## Tecnologías

- React 19 + Vite
- React Router (navegación entre páginas)
- Bootstrap 5 y react-bootstrap (diseño responsivo)
- Vitest + Testing Library (pruebas unitarias)

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

## Pruebas

```bash
npm run test:run   # corre todas las pruebas una vez
npm test           # deja las pruebas corriendo mientras se edita
npm run coverage   # pruebas + reporte de cobertura (coverage/index.html)
```

131 pruebas en 26 archivos, con 99,39 % de cobertura de líneas. El detalle está en [docs/cobertura-testing.md](docs/cobertura-testing.md).

## Estructura

```
src/
├── components/   partes del inicio (Header, Banner, Trending, Footer...)
├── pages/        una por página (catálogo, detalle, carrito, login...)
├── context/      carrito y sesión compartidos entre páginas
├── hooks/        hook propio para formularios (useFormulario)
├── utils/        validaciones de formularios
├── data/         juegos y blogs
├── styles/       CSS del sitio original
└── tests/        pruebas unitarias
```

## Páginas

| Ruta | Página |
|---|---|
| `/` | Inicio |
| `/producto` | Catálogo con búsqueda, filtros y paginación |
| `/producto/:id` | Detalle del juego |
| `/carrito` | Carrito de compras |
| `/login` y `/registro` | Inicio de sesión y registro |
| `/contacto` | Formulario de contacto |
| `/nosotros` | Sobre nosotros |
| `/blogs` y `/blogs/:id` | Blogs |

## Autores

- Nicolás Olivares
- Matías Rodriguez
- Emiliano Cerda
