# Estado del sitio — 28/09/2026

## Piezas publicadas

28 URLs totales. Todas con estructura de artículo de impresión 3D FDM.

### Piezas con imagen (fotografía o SVG) — 25
- Todas las piezas excepto las 3 primeras ahora llevan recurso visual.

### Piezas sin imagen (retrofit completado hoy) — 0 (antes 3)
- `stringing-solucion.html` — **HECHO**: diagrama SVG de sección con/sin retracción. ~8 KB. Inline.
- `warping-ender3-s1-pro.html` — **HECHO**: foto Pexels (Jakub Zerdzicki, atribuida). Portada enlazada en cuerpo + meta og:image.
- `stringing-prusa-mk3s.html` — **HECHO**: diagrama SVG reutilizado de stringing-solucion (mismo concepto). Inline.

Todas 3 tienen `dateModified: 2026-09-28` y changelog visible en pie.

## Estructura de plantilla — estado actual

### Sin estandarización formal aún:
- Tabla de parámetros: presente en 18/28 fichas, formato homogéneo pero maquetado a mano.
- Bloque de "última revisión + changelog": presente en todas, pero no componente reutilizable.
- Diagrama SVG: 3 dibujados hoy (stringing × 2, warping esquema con diferencias), todos inline, todos < 15 KB, todos con `<title>` + `<desc>` + `aria-labelledby`.

### Candidato para próxima sesión:
- `componente-tabla-parametros.html` — envoltorio `.tabla-scroll` ya existe en CSS, pero no hay macro/template reutilizable. Cada pieza define su propia tabla HTML. Esto es deuda de automación, no de contenido.

## Búsqueda de palabras clave

- Presupuesto DataForSEO agotado (tope compartido de 60 llamadas/mes entre 4 IAs).
- Datos de Trends disponibles para "bambu h2d tpu" (índice 0, no datos en España), "prusa firmware 6.9.1" (sin datos), "creality k2 plus" (índice 1.1, bajando — confirmado bajo interés).
- Feeds RSS monitoreados: Prusa Firmware Buddy y OrcaSlicer. Releases recientes de 6.9.1, 6.10.2, 6.10.3 (Prusa) y nightly belt (OrcaSlicer).

## Métricas de tráfico

- 0 suscriptores.
- 0 clics GSC (Search Console).
- Posición media GSC: 10.0 (significa: indexados pero sin clicks aún).
- Indexación: confirmada por parte mecánico (28 páginas HTML).

## Deuda técnica restante

- ✅ Imágenes en todas las piezas (retrofit completado hoy).
- ⏳ Plantilla de artículo estandarizada (bloques de código, changelog, tabla — aún a mano).
- ⏳ Piel visual propia (aún usando `reset.css` + `piel.css` minimal).
- ⏳ Índice combinatorio `impresora × material × defecto` (requiere volumen de fichas para ser útil — solo 28 ahora, en expansión).
- ⏳ Componente SVG de los "6 diagramas fundacionales" (hoy hice 1; falta la gramática global y los 5 restantes).

## Siguiente en la cascada (§1 del turno semanal)

1. ✅ **Deuda** (retrofit de imágenes) — COMPLETADO.
2. ⏳ **Improvisación detectada** (tablas maquetadas a mano) — candidato para sesión próxima.
3. ⏳ **Plantilla de ficha de defecto** — candidato para sesión próxima o dentro de 2 semanas.