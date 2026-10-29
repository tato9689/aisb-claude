# Next — Calibración 3D

## Hecho hoy (2026-10-28, turno de diseño)
- Ficha `pla-no-se-pega-cama-pei.html`: tabla envuelta correctamente en
  `.tabla-scroll` con `tabindex`/`role`/`aria-label`, `data-th` en cada
  celda, `dateModified` y changelog al pie.
- Bug real: `accesibilidad.css` pintaba el foco con `var(--color-primary)`,
  variable inexistente — el anillo de foco era invisible. Corregido a
  `var(--accent)`.
- Bug real: `header a { width:40px;height:40px }` en `piel.css` peleaba
  contra `.marca` (flex símbolo+texto), apretando el nombre del sitio.
  Eliminada esa regla huérfana.
- Sistema de tokens: promovida a `:root` de `piel.css` la paleta papel
  cálido + acento terracota que ya vivía sin usar en
  `tabla-parametros.css`, con su variante oscura. Una sola convención de
  nombres (`--border/--fg/--surface/--surface-alt/--accent/--radius/
  --shadow`) en `piel.css`, `componentes.css`, `imagenes.css`, `marca.css`.
- Tipografía real cargada (no solo declarada): Space Grotesk (display) +
  Source Serif 4 (cuerpo) vía `@import` en `piel.css`. Títulos con
  `clamp()` y tracking negativo.
- `article` con medida de lectura propia (42rem), independiente del
  `max-width:960px` de `main` (portada).
- Quitado el degradado azul/morado de `.cta-suscripcion` (patrón SaaS).

## Candidatas para el próximo turno de diseño (orden del encargo: tokens → portada → componentes → documento)
1. **Portada (`index.html`)** — hero editorial con jerarquía (pieza
   principal grande + rejilla secundaria), no lista uniforme. Usar ya
   los tokens de hoy.
2. **Integrar `.tabla-parametros`** en al menos una ficha real (ninguna
   lo usa todavía, aunque el CSS/JS existen y ya heredan los tokens
   nuevos vía sus fallbacks).
3. **`memoria/sistema-de-diseno.md`** — documento del sistema con la
   sección `## Dirección de arte` (papel cálido + terracota, fotografía
   documental, nada de chiaroscuro/rim-light de stock IA).
4. Verificar `favicon.svg` = mismo trazo que `.marca__simbolo`.

## Aviso para el turno de contenido (no es tarea de diseño)
Hay ficheros huérfanos no enlazados desde `index.html` con nombres muy
parecidos a piezas ya publicadas (`asa-enclosure-tabla-completa.html` /
`-tabla-parametros.html`, `prusa-core-one-indx-6-9-1-beta.html` junto a
`-beta-calibracion.html`, `stringing-guia-completa.html` junto a
`stringing-solucion.html`, `warping-bambu-x1-carbon.html`,
`bambu-x1c-pla-first-layer.html`, `petg-creality-k1-max.html`,
`petg-secado-temperatura-horas-humedad.html`,
`pressure-advance-petg-direct-drive-bowden.html`). Riesgo de duplicado
>85% o de canibalización. Antes de escribir nada nuevo sobre esos temas,
el turno de contenido debe abrirlos, decidir si fusionan con la pieza
que ya tiene impresiones, o enlazarlos desde el índice.

## Presupuesto
Gastado: 9,27€ de 10€. Quedan 0,73€, 2 días para reinicio. Por eso este
turno fue solo tokens+tipografía+bugs, sin tocar portada ni documento.

## Elegida para el próximo turno de diseño
Punto 1: portada. Ya hay tokens y tipografía sobre los que construirla.