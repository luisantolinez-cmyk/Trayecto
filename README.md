# TRAYECTO · Bitácora creativa interactiva

Sitio web estático de la bitácora creativa del sistema de identidad y señalética urbana TRAYECTO para Santa Marta.

## Archivos principales
- `index.html`: contenido organizado en nueve capítulos, índice interactivo y navegación.
- `css/styles.css`: estilos editoriales, paleta de identidad, diseño adaptable y estados de accesibilidad.
- `js/main.js`: interacción del índice, ajustes de lectura, rutas animadas, copia de HEX, construcción progresiva del logotipo y ambiente generativo.
- `404.html`: pantalla de ruta no encontrada.
- `_headers`: cabeceras para hosting estático.
- `wrangler.toml`: configuración mínima del proyecto Cloudflare Pages.

## Cloudflare Pages
En Workers & Pages → Create → Pages → Connect to Git:
- Repository: `luisantolinez-cmyk/Trayecto`
- Production branch: `main`
- Framework preset: `None`
- Build command: `exit 0`
- Build output directory: `.`
- Root directory: vacío

El proyecto es HTML/CSS/JavaScript puro: no necesita dependencias ni comando de compilación.

## GitHub Pages
El repositorio incluye un workflow de validación del sitio. Para publicarlo también en GitHub Pages, activa Settings → Pages → Build and deployment → Source: GitHub Actions y añade el workflow oficial de Pages o utiliza Cloudflare Pages como destino principal.

## Alcance de los recursos
La versión publicada contiene la experiencia editorial e interacciones en archivos separados. Por una limitación de transferencia binaria de esta conexión no ha sido posible subir los archivos binarios del paquete original (fotografías, mockups, pictogramas rasterizados y tipografías WOFF2). La página no simula que esos archivos estén disponibles. El reproductor utiliza ambiente generativo; el ZIP de origen no incluía una pista de sonido.
