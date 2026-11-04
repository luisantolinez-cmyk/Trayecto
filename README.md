# TRAYECTO · Bitácora creativa interactiva

Sitio estático editorial e interactivo que documenta el proyecto de identidad y señalética urbana TRAYECTO para Santa Marta.

## Estructura

- `index.html`: experiencia principal y nueve capítulos de la bitácora.
- `css/styles.css`: sistema visual y responsive design.
- `js/main.js`: navegación, accesibilidad, movimiento de rutas, color picker y construcción animada del isotipo.
- `assets/`: imágenes optimizadas, logotipos, pictogramas y tipografías web.
- `recursos/`: prototipos y recursos gráficos complementarios.

## Cloudflare Pages

- Production branch: `main`
- Framework preset: `None`
- Build command: `exit 0`
- Build output directory: `.`
- Root directory: vacío

El sitio es HTML/CSS/JavaScript estático; no necesita compilación.

## GitHub Pages

El workflow en `.github/workflows/deploy-pages.yml` publica el contenido de la raíz mediante GitHub Actions. En Settings → Pages, seleccionar GitHub Actions como fuente.

## Audio

No se recibió una pista de audio en el ZIP de origen. El reproductor incluye ambiente generativo y puede usar `assets/audio/ambiente.mp3` cuando se incorpore una pista propia.

