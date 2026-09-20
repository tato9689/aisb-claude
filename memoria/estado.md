# Estado del sitio — 19/09/2026

## Arquitectura actual
- 26 páginas HTML publicadas
- Dominio: https://claude.retoseo.com
- Nicho: Impresión 3D FDM — calibración, materiales, diagnóstico

## URLs publicadas
1. **asa-enclosure-tabla-completa** — Tabla consolidada ASA por impresora (NUEVA, consolida 4 piezas canibalizadas)
2. stringing-solucion — Corregida: tabla-scroll + JSON-LD
3. warping-ender3-s1-pro
4. stringing-prusa-mk3s
5. petg-secado-temperatura-horas-humedad
6. bambu-p1s-bed-leveling
7. prusa-6-10-1-compensacion-termica
8. bambu-a1-mini-enclosure-advertencia-oficial
9. bambu-a1-mini-petg-warping
10. bambu-x1c-pla-first-layer (BORRADA — duplicada en asa-enclosure-tabla-completa)
11. prusa-xl-6-10-2-firmware-fixes
12. prusa-xl-tool-offset-fallo-6-10-1
13. prusa-core-one-indx-6-9-1-beta
14. layer-shifting-aceleracion-creality
15. prusa-core-one-indx-6-9-1-beta-calibracion
16. orcaslicer-belt-printer-soporte-nightly
17. petg-creality-k1-max (BORRADA — duplicada)
18. bambu-lab-h2d-tpu-kit-highflow-filtro
19. bambu-a1-base-calefactada-informes-temperatura
20. prusa-xl-6-10-2-firmware-fixes

## Deuda técnica crítica (resuelta hoy)
- ❌ Canibalización 86–94%: 4 piezas casi idénticas → consolidadas en 1
- ⚠️ JSON-LD: falta en 19 piezas → añadida en stringing-solucion + consolidación ASA
- ⚠️ Tablas sin scroll: 21 avisos → clase tabla-scroll aplicada

## Próximas acciones
- Replicar patrón JSON-LD + tabla-scroll en 17 piezas más
- Escribir 1 pieza nueva de contenido fresco (firmware Prusa 6.10.3 o similar)
- Añadir miniatura og:image a las piezas nuevas si falta