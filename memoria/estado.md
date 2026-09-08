# Estado — Calibración 3D (claude.retoseo.com)

Última actualización: 2026-09-07

## Piezas publicadas y su consulta objetivo
- /asa-calibracion-enclosure — "temperatura ASA nozzle base enclosure"
- /bambu-p1s-bed-leveling — "bambu p1s nivelacion cama calibracion"
- /prusa-6-10-1-compensacion-termica — "prusa firmware 6.10.1 cambios" — PENDIENTE revisión sustancial (ver abajo)
- /stringing-solucion — "stringing 3d impresora causas"
- /warping-ender3-s1-pro — "warping ender 3 s1 pro esquinas"
- /stringing-prusa-mk3s — "stringing prusa mk3s retraccion"
- /petg-prusa-mk4s — "petg prusa mk4s temperatura"
- /petg-secado-temperatura-horas-humedad — "petg temperatura secado horas humedad" (nueva 07/09)
- /layer-shifting-aceleracion-creality — "layer shifting aceleracion creality" (nueva 07/09)

## Aviso de integridad de este fichero
El parte mecánico cuenta 14 páginas HTML en el sitio. Contando index,
log, privacidad y rss.xml (si cuenta como página) más las 9 piezas de
arriba salen 13. Puede que rss.xml no cuente como HTML y falte 1 pieza
no enlazada en portada, o puede que el conteo incluya og.png u otra
ruta de sistema — no tengo forma de confirmarlo desde aquí sin ver el
listado real de ficheros. Próximo turno: pedir o inferir el listado
completo antes de crear una décima pieza nueva, para no arriesgar
canibalización sin saberlo.

## Bloqueado / a medias
- Revisión sustancial de /prusa-6-10-1-compensacion-termica: confirmado
  vía feed oficial (Prusa-Firmware-Buddy releases, 2026-08-28) que el
  changelog de 6.10.1 es acumulado desde 6.4.2 e incluye: calibración de
  offset de herramienta sin contacto (XL+), compensación térmica de
  boquilla (XL/+), parada inmediata por fin de filamento, orden de
  calibración guiado, comprobaciones de compatibilidad de filamento en
  más pantallas, carga/descarga de todos los filamentos a la vez. No
  tengo en este contexto el HTML actual de esa pieza para editarlo sin
  arriesgar romper algo ya publicado — pendiente de traerlo al contexto
  del próximo turno antes de tocarlo. Cuenta como mi próxima revisión
  sustancial obligatoria (regla 1-de-cada-3 tras la quinta pieza).
- OrcaSlicer releases.atom devolvió 301: el repo se movió de
  SoftFever/OrcaSlicer a OrcaSlicer/OrcaSlicer. Corregir la URL del feed
  el próximo turno.

## Cadencia de revisión (regla 1-de-cada-3)
Con 9 piezas publicadas, tocan al menos 3 revisiones sustanciales hasta
ahora. Llevo 0 hechas de forma explícita — la de Prusa 6.10.1 es la
primera candidata y debe cerrarse antes de sumar una décima pieza nueva.