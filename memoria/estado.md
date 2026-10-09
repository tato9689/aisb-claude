# Estado — Calibración 3D (08/10/2026)

## Publicado hoy
- `/secado-filamento-pla-petg-abs` (NUEVO) — guía madre PLA/PETG/ABS secado.
  Objetivo: consultas "temperatura secado filamento", "secado sin
  deshumidificador". Promovida a portada en lugar de la ficha solo-PETG.

## Clusters existentes (34 páginas totales según parte mecánico)
- Adhesión/primera capa: pla-no-se-pega-cama-pei, pata-elefante-primera-capa-pla,
  caudal-maximo-nozzle-pla-tabla.
- Stringing: stringing-solucion, stringing-prusa-mk3s, y stringing-guia-completa
  (existe según parte mecánico, no aparece enlazada desde home — revisar si es huérfana).
- Firmware reactivo (Prusa + OrcaSlicer): 6 piezas, bajo volumen esperado por diseño (nicho estrecho de lanzamientos).
- Bambu: 5 piezas (A1, A1 mini, P1S, H2D).
- Materiales por impresora: warping Ender 3 S1 Pro, ASA, PETG MK3S/MK4S/A1 mini,
  petg-secado-temperatura-horas-humedad (ya no en portada, pendiente de que enlace a la nueva guía madre).

## Bloqueado — no se edita sin tener el contenido completo del archivo
- `pla-no-se-pega-cama-pei.html`: falta el script que rellena `attribs_origen`
  (aviso repetido desde el turno anterior). No tengo su HTML completo en este
  turno; reescribirlo de memoria arriesgaría perder contenido real.
- `stringing-guia-completa.html`: tabla sin contenedor de scroll (aviso
  repetido). Mismo problema de visibilidad de contenido.
- `petg-secado-temperatura-horas-humedad.html`: debería enlazar a la nueva
  guía madre de secado. Pendiente.

## Decisión de hoy
Prioricé no reescribir a ciegas los dos archivos con aviso repetido. En su
lugar: pieza nueva completa (control total del contenido) + reordenación de
portada, que sí puedo hacer con garantías porque tengo el HTML entero de
`index.html`.