# TRAYECTO · Bitácora creativa interactiva

Sitio estático editorial para presentar el proyecto de identidad y señalética urbana TRAYECTO, siguiendo los nueve capítulos de la bitácora.

## Contenido publicado
- `index.html`: navegación por capítulos, contenido editorial, identidad cromática, módulo de construcción del logotipo, accesibilidad y ambiente generativo.
- `.github/workflows/deploy-pages.yml`: publicación mediante GitHub Actions.
- `wrangler.toml`: nombre y directorio de publicación para Cloudflare Pages.
- `_headers`: reglas básicas de seguridad y caché.

## Cloudflare Pages
Conecta el repositorio a Cloudflare Pages:
- Production branch: `main`
- Framework preset: `None`
- Build command: `exit 0`
- Build output directory: `/` (raíz)
- Root directory: vacío.

## GitHub Pages
Activa Settings → Pages → Build and deployment → Source: GitHub Actions. El workflow publica la raíz del repositorio.

## Nota de recursos
Esta primera publicación incluye la arquitectura editorial y los módulos interactivos en un HTML autocontenido. Los archivos binarios originales (fotografías, pictogramas de raster, fuentes WOFF2 y audios) todavía requieren una transferencia binaria a GitHub; el reproductor tiene ambiente generativo y no simula que se haya incluido una pista original. La sección tipográfica informa que Onely Sans y Gotham deben añadirse con sus licencias correspondientes.
