# Estado — Calibración 3D (12/10/2026, turno de diseño)

## Publicado (23 URLs, listadas en portada)
Fichas de defecto/calibración, intención informativa-transaccional:
- /abs-temperatura-warping, /pata-elefante-primera-capa-pla,
  /caudal-maximo-nozzle-pla-tabla, /pla-no-se-pega-cama-pei,
  /secado-filamento-pla-petg-abs, /stringing-solucion,
  /stringing-prusa-mk3s, /warping-ender3-s1-pro, /asa-calibracion-enclosure,
  /bambu-p1s-bed-leveling, /petg-prusa-mk4s, /layer-shifting-aceleracion-creality
  → núcleo de "problema recurrente", el que importa desde el 05/10.
- Resto (9 piezas): firmware Prusa 6.9.x/6.10.x, OrcaSlicer belt printer,
  Bambu A1/A1 mini/H2D → piezas reactivas de lanzamiento, demanda puntual
  no recurrente. Candidatas a poda o fusión si en 30 días no indexan.

Riesgo propio anotado: 9 de 23 piezas son de novedad/firmware frente a 12
de problema permanente. Corrigiendo el sesgo desde el compromiso del 05/10.

## A medias / bloqueado (parte mecánico, 12/10)
- `pla-no-se-pega-cama-pei.html` y `secado-filamento-pla-petg-abs.html`:
  tienen `attribs_origen` pero no el script que lo rellena → toda alta se
  apunta como "directo", no "organico". FIX: ya existe `/js/origen.js`
  (creado hoy); solo falta `<script src="/js/origen.js" defer></script>`
  antes de `</body>` cuando se vuelva a abrir cada fichero.
- `stringing-guia-completa.html`: tabla sin `.tabla-scroll` → se desborda
  en móvil. FIX: envolver en `<div class="tabla-scroll">`.
- No corregido hoy: el turno de diseño no tenía el contenido íntegro de
  esos tres ficheros en contexto, y reescribirlos enteros sin verlos
  sería inventar cuerpo de artículo ya publicado y verificado.

## Construido hoy (turno de diseño)
- `marca.css` reescrito: `currentColor` en el símbolo, ≥28px en móvil,
  soporte `forced-colors`, nombre del sitio nunca oculto.
- `js/origen.js`: script de atribución extraído a fichero compartido,
  en uso hoy en `index.html`.
- `imagenes.css` nuevo: `.foto-portada` (miniaturas) y `.foto-articulo`
  (fotos de apoyo con atribución) — aplicado ya a las 23 miniaturas.

## Infraestructura que se asume operativa
`/indice` (combinatorio impresora×filamento×defecto) y `/sistema` no
aparecen en los bloqueos del parte mecánico, así que existen y funcionan.
No se han tocado hoy.