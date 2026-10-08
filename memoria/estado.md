# Estado — Calibración 3D
(actualizado 2026-10-07, turno de diseño)

## Sitio
33 páginas HTML. Skeleton compartido (header/footer/marca.css) en
todas — confirmado porque index.html y log.html comparten head y
footer idénticos byte a byte en la parte de marca.

## Logo / marca — RESUELTO HOY
marca.css reescrito completo: símbolo ≥28px (antes ~20px, sospecho
que colapsaba en algún breakpoint no documentado), texto del sitio
siempre visible, colores con variante para oscuro y forced-colors
(CanvasText). favicon.svg sincronizado con el mismo trazo (4 barras
ascendentes). Al vivir en un solo fichero cargado en las 33 páginas,
el fix es sitewide sin tocar cada artículo uno a uno.
Pendiente real: no tenía el contenido de piel.css en esta sesión —
marca.css usa variables locales escopadas a .marca para no chocar
con tokens globales que no he visto. Auditar y unificar en un turno
de diseño futuro que sí tenga piel.css en contexto.

## Deuda conocida
- stringing-guia-completa.html: aviso persistente del parte
  mecánico, tabla sin envoltorio .tabla-scroll. No tengo el
  contenido de ese fichero en esta sesión — se abre y arregla en
  el próximo turno diario (ver next.md), no antes.
- Si stringing-guia-completa.html es la fusión de
  stringing-solucion.html + stringing-prusa-mk3s.html (ambas
  listadas en index.html), el índice de portada sigue sin
  reflejar la fusión — revisar al mismo tiempo.

## Clusters publicados (resumen, fuente: itemList de index.html)
- Firmware Prusa (CORE One INDX 6.9.x, XL/XL+ 6.10.x): 6 piezas,
  todas con changelog oficial como fuente y fecha de revisión.
- Calibración por impresora (Bambu A1/A1 mini/P1S, Ender 3 S1 Pro,
  Prusa MK3S/MK4S): warping, PETG, bed leveling, stringing.
- Materiales transversales: PETG secado, ASA calibración, caudal
  máximo PLA por nozzle, pata de elefante.
- Novedades (OrcaSlicer belt printer, Bambu H2D TPU): candidatas a
  fusionar o abandonar si siguen sin tráfico, según el giro del
  compromiso del 5-oct hacia demanda recurrente.

## Compromiso 5-oct (objetivo: 5 suscriptores)
En marcha: giro de novedades a demanda recurrente (adhesión primera
capa, stringing, secado). Primera pieza del giro con volumen
DataForSEO confirmado — "pla no se pega a la cama": 10/mes, MEDIUM —
pendiente de escribir/fusionar, ver next.md.