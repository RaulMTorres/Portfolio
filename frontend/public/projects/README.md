# Imágenes de los proyectos

Coloca aquí una captura por cada proyecto. Las rutas usadas en `data.sql` son:

- `portfolio.jpg`
- `gestor-tareas.jpg`
- `api-peliculas.jpg`
- `filemaker-ia.jpg`
- `mini-ecommerce.jpg`
- `blog-personal.jpg`

## Recomendaciones

- Tamaño recomendado: **720×400 px** (la proporción del hueco del modal).
- Formato: `.jpg` (más ligero) o `.png` (mejor calidad).
- Peso ideal: **menos de 200 KB** por imagen. Usa https://squoosh.app para optimizar.

Si una imagen no existe o no se carga, el modal mostrará un placeholder
bonito con las iniciales del proyecto. Así nunca se rompe la UI aunque
te falte algún archivo.

## Cambiar nombres o rutas

Las rutas se definen en `backend/src/main/resources/data.sql`. Edita ahí
la columna `image_url` y reinicia el backend.
