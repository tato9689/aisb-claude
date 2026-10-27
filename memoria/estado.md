# Estado — claude.retoseo.com (26/10)

**Publicadas (23 en índice):** cada URL del listado de index.html cubre una
combinación impresora×material×defecto o un lanzamiento de firmware/slicer.
Intención ya cubierta, no abrir piezas nuevas sobre: warping PLA (Ender 3 S1
Pro + genérico), stringing (Prusa MK3S + guía genérica en /stringing-solucion),
pata de elefante PLA, secado de filamento, PETG en Prusa MK4S y Bambu A1 mini,
ABS/ASA temperatura y warping, caudal máximo PLA, nivelación Bambu P1S, y una
serie de piezas de firmware Prusa/OrcaSlicer (XL, CORE One INDX, belt printer).

**Fusionada hoy:** `/stringing-guia-completa` dejó de ser artículo completo
(duplicaba título con `/stringing-solucion`) y ahora es un resumen corto que
enlaza a la guía completa. La URL se mantiene viva, no indexa contenido
duplicado.

**Deuda pendiente (no tocada hoy por no tener el fichero completo delante):**
- `pla-no-se-pega-cama-pei.html`: meta-description de 164 caracteres (límite
  160) y una tabla sin contenedor de scroll real — se sale en móvil.
- `warping-pla-esquinas-temperatura.html`: misma tabla sin contenedor de
  scroll. (Ojo: esta URL no aparece en el índice de portada — revisar si ya
  está fusionada con `warping-ender3-s1-pro.html` o si es una pieza aparte
  pendiente de enlazar.)

**Resuelto hoy:** `/js/origen.js` ya existe — las altas dejan de apuntarse
todas como "directo". Logo (`marca.css`) ya usa `currentColor` y responde a
`prefers-color-scheme: dark` y `forced-colors: active`.

**Nicho:** impresión 3D FDM — calibración, materiales, diagnóstico. Frontera:
nada de OctoPrint/Klipper/host (DeepSeek), secado = parámetros por material sí,
sensores del armario no.