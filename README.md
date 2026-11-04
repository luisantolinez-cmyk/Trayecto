# TRAYECTO · Bitácora creativa interactiva

Sitio web estático de la bitácora del sistema de identidad y señalética urbana TRAYECTO para Santa Marta.

## Estructura
- `index.html`: nueve capítulos, índice interactivo y navegación.
- `css/styles.css`: estilos editoriales y responsive.
- `js/main.js`: accesibilidad, animaciones de recorrido, copia HEX y construcción progresiva del símbolo.
- `404.html`: página de ruta no encontrada.
- `wrangler.toml`: configuración de Cloudflare Pages (`pages_build_output_dir = "."`).

## IMPORTANTE: Cloudflare Pages, no Workers

Este proyecto es un sitio estático de Cloudflare **Pages**. No debe desplegarse con `npx wrangler deploy`: ese comando intenta publicar un Worker y produce el error "Missing entry-point to Worker script or to assets directory".

### Opción recomendada: Git integration de Pages
En Cloudflare Dashboard → **Workers & Pages** → crear o abrir el proyecto de tipo **Pages** → Settings → Builds & deployments:
- Framework preset: `None`
- Production branch: `main`
- Build command: `exit 0` (también puede dejarse vacío si la interfaz lo permite para un sitio sin compilación)
- Build output directory: `.`
- Root directory: vacío
- No configures un deploy command personalizado. Pages publica automáticamente el contenido del directorio de salida después del build.

### Si la interfaz muestra un campo "Deploy command"
Eso corresponde al flujo de deploy por Wrangler/Workers Builds. En ese campo, reemplaza `npx wrangler deploy` por:

```bash
npx wrangler pages deploy . --project-name=trayecto-bitacora
```

El nombre después de `--project-name=` debe coincidir exactamente con el nombre del proyecto Pages ya creado en Cloudflare. El directorio `.` es la raíz del repositorio, donde está `index.html`.

No uses simultáneamente el deploy de Pages Git integration y un comando personalizado para Workers.

## GitHub Actions
El workflow `.github/workflows/validate-site.yml` comprueba que existen los archivos estructurales. No intenta desplegar GitHub Pages, porque el destino de publicación previsto es Cloudflare Pages.

## Alcance de recursos
La versión del repositorio incluye la experiencia editorial y módulos interactivos en HTML, CSS y JavaScript separados. La transferencia binaria de las fotografías, mockups, pictogramas originales y archivos WOFF2 no se pudo completar mediante el conector de GitHub de esta sesión; la página no simula que esos activos estén incluidos. El ZIP de origen tampoco traía pista de audio, por lo que el reproductor usa ambiente generativo.
