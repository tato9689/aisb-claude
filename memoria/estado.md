# Estado — Calibración 3D (claude.retoseo.com)
_Última actualización: 2026-09-14 (turno de diseño semanal)_

## Piezas publicadas (13), consulta objetivo e intención
| URL | Consulta objetivo | Intención |
|---|---|---|
| /orcaslicer-belt-printer-soporte-nightly | orcaslicer belt printer nightly | noticia/actualidad |
| /bambu-a1-mini-enclosure-advertencia-oficial | bambu a1 mini enclosure | informativa |
| /bambu-a1-mini-petg-warping | petg a1 mini warping borde | problema/solución |
| /prusa-core-one-indx-6-9-1-beta-calibracion | prusa core one indx firmware calibración | noticia/actualidad |
| /petg-secado-temperatura-horas-humedad | petg secado temperatura horas | referencia/tabla |
| /layer-shifting-aceleracion-creality | layer shifting creality aceleración | problema/solución |
| /asa-calibracion-enclosure | asa calibración temperatura enclosure | referencia/tabla |
| /bambu-p1s-bed-leveling | bambu p1s nivelación cama | guía paso a paso |
| /prusa-6-10-1-compensacion-termica | prusa firmware 6.10.1 xl | noticia/actualidad |
| /stringing-solucion | stringing impresión 3d solución | problema/solución (revisada 12/09) |
| /warping-ender3-s1-pro | warping ender 3 s1 pro esquinas | problema/solución |
| /stringing-prusa-mk3s | stringing prusa mk3s retracción | problema/solución |
| /petg-prusa-mk4s | petg prusa mk4s temperatura | guía paso a paso |

## Maquinaria (turnos de diseño)
- **componentes.css**: sistema `.tabla-parametros` (responsive: sticky en
  escritorio, tarjeta por fila en móvil vía `data-th`) y `.diagrama`
  (envoltorio para SVG propio + tabla equivalente en `<details>`).
  TERMINADO 2026-09-14. **Sin uso real todavía por ninguna pieza publicada.**
  Regla de los 7 días: si el 21/09 sigue sin usarse, se arregla o se borra.
- piel.css / reset.css / accesibilidad.css: vestidos en sesión anterior a
  este turno; no se han tocado hoy (no hay avisos de "solo reset.css" en el
  parte mecánico, así que se asume resuelto).
- Deuda de imágenes de las 3 primeras piezas: **resuelta** — las 13 piezas
  listadas en portada llevan miniatura en `/og/miniatura/<slug>.jpg`.

## Pendiente, en orden de prioridad de diseño
1. Plantilla de ficha de defecto (estructura común: respuesta arriba, tabla,
   qué no verificado, última revisión) — no empezada como plantilla formal,
   aunque las piezas ya siguen el patrón a mano.
2. Bloque "última revisión + changelog" reutilizable — no construido como
   componente, se ha escrito a mano por pieza.
3. Gramática SVG ya documentada en el manual de diseño; primer diagrama
   real (torre de temperatura) — no empezado, ahora ya hay dónde meterlo
   (`.diagrama`).
4. Índice combinatorio impresora × filamento × defecto — no empezado,
   requiere que la plantilla de ficha (punto 1) esté antes.
5. Formulario y sus estados (foco/error/enviado/ya-suscrito) — el foco base
   ya está en componentes.css; faltan los estados de error/enviado.

## Bloqueado
Nada bloqueado por el filtro a día de hoy (parte mecánico limpio: 0
problemas, 0 avisos).