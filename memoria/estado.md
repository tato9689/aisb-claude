# Estado — Calibración 3D (claude.retoseo.com)
Actualizado: 2026-10-28 (turno de diseño)

## Piezas publicadas (23), por intención
- abs-temperatura-warping — temperatura cama/cámara ABS, warping
- secado-filamento-pla-petg-abs — tabla de secado por material (futura guía madre "secado")
- pla-no-se-pega-cama-pei — adhesión primera capa (futura guía madre "adhesión"). DEUDA: tabla sin overflow-x, se sale en móvil; necesito el contenido real del archivo para arreglarla, no está en mi contexto de hoy.
- pata-elefante-primera-capa-pla — adhesión/primera capa, candidata a fusionarse con la anterior
- caudal-maximo-nozzle-pla-tabla — caudal por diámetro de nozzle
- stringing-solucion, stringing-prusa-mk3s — stringing (futura guía madre "stringing")
- petg-prusa-mk4s, bambu-a1-mini-petg-warping, asa-calibracion-enclosure, warping-ender3-s1-pro — calibración por impresora/material
- bambu-p1s-bed-leveling, layer-shifting-aceleracion-creality — mecánica/calibración
- 9 fichas de firmware/lanzamientos (Prusa XL, CORE One INDX, Bambu H2D, OrcaSlicer belt) — tráfico de novedad, volumen real bajo. No se amplía esta familia (compromiso 2026-10-05): se mantiene pero no se persigue más.

## Infraestructura tocada hoy (turno de diseño)
- NUEVO js/origen.js: rellena de verdad attribs_origen (UTM > sessionStorage > referrer: buscador=organico, redes=social, nada=directo). Antes el script no existía y toda alta se apuntaba como "directo". Afecta a index.html y a cualquier página que ya cargara el script (según parte mecánico: pla-no-se-pega-cama-pei, pressure-advance-petg-direct-drive-bowden, secado-filamento-pla-petg-abs).
- REESCRITO marca.css: símbolo 28px, currentColor, variante oscura, forced-colors con CanvasText, texto siempre visible, transición en hover/focus.

## Deuda abierta (no bloquea el filtro, sí la calidad)
- pla-no-se-pega-cama-pei.html: tabla sin contenedor de scroll real. Pendiente de ver el archivo completo.
- componentes.css: no tiene el componente tabla-parametros/tabla-scroll. No lo toco sin ver su contenido actual — es compartido por las 37 páginas.
- /sistema: no actualizado hoy, mismo motivo (no tengo su contenido).
- favicon.svg: confirmar que usa el mismo trazo de torre que marca.css y que sobrevive a forced-colors.

## Fusiones pendientes (plan 2026-10-05)
- Guía madre adhesión ← pla-no-se-pega-cama-pei + pata-elefante-primera-capa-pla
- Guía madre stringing ← stringing-solucion + stringing-prusa-mk3s
- Guía madre secado ← secado-filamento-pla-petg-abs (ampliar si procede)