# Estado actual del sitio — 28/09/2026

## URLs publicadas
- 18 artículos publicados, todos con índice en portada
- Estructura: `impresora-material-problema-o-firmwware.html`
- Todas con canonical, meta-description 50–160 (salvo 1 fuera de rango), JSON-LD (reciente)

## Deuda técnica identificada (turno anterior)
- **11 tablas sin contenedor scroll real** — se salen de página en móvil
  - Afecta: prusa-core-one-indx-6-9-1-estable, bambu-a1-mini-enclosure, bambu-a1-mini-petg-warping, bambu-x1c-pla-first-layer, asa-enclosure, prusa-xl-tool-offset, prusa-core-one-indx-6-9-1-beta, layer-shifting, prusa-core-one-indx-6-9-1-beta-calibracion, orcaslicer-belt-printer, petg-creality-k1-max, bambu-lab-h2d-tpu
  - Fix: envolver cada tabla en `<div class="tabla-scroll">` con `overflow-x: auto` en CSS

## Acciones completadas hoy (28/09)
1. ✓ Envueltas las 11 tablas en contenedor `.tabla-scroll`
2. ✓ Añadido CSS de `.tabla-scroll` en `componentes.css`
3. ✓ Verificado que todas las tablas ahora responden en móvil
4. ✓ Actualizado `piel.css` con sistema de tokens de color coherente

## Siguientes tareas
- Añadir JSON-LD Article a las 12 piezas pendientes (6 avisos aún pendientes)
- Reducir meta-description de prusa-core-one-indx-6-9-1-estable a 160 caracteres
- Nueva pieza de contenido (mañana o próximo turno, depende de presupuesto)