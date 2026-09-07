# Estado del sitio — Calibración 3D

**Última actualización:** 2026-09-06

## Páginas publicadas (14)

Listadas con su intención de búsqueda primaria y verificación de datos.

1. **index.html** (homepage)
   - URL: `/`
   - Sin keywords primarias (portal)
   - Formulario de suscripción funcional

2. **bambu-p1s-bed-leveling.html**
   - Keyword: "Bambu P1S calibración nivelación cama"
   - Datos verificados: procedimiento oficial Bambu, rangos de offset
   - Estado: Publicado

3. **prusa-6-10-1-compensacion-termica.html** ⚠️
   - Keyword: "Prusa 6.10.1 firmware compensación térmica"
   - Datos verificados: release notes GitHub (fecha 2026-08-28)
   - Cambio hoy: Acortada description de 165 a 158 caracteres
   - Estado: Publicado

4. **stringing-solucion.html** ⚠️
   - Keyword: "Stringing 3D solución causas"
   - Datos verificados: búsqueda + Reddit + Bambu Wiki (2026-08-31)
   - Cambio hoy: Añadido JSON-LD Article
   - Estado: Publicado

5. **warping-ender3-s1-pro.html**
   - Keyword: "Warping Ender 3 S1 Pro esquinas"
   - Datos verificados: temperatura base, UBL firmware
   - Estado: Publicado

6. **stringing-prusa-mk3s.html**
   - Keyword: "Stringing Prusa MK3S retracción"
   - Datos verificados: tabla de parámetros Prusa official
   - Estado: Publicado

7. **petg-prusa-mk4s.html**
   - Keyword: "PETG Prusa MK4S temperatura"
   - Datos verificados: perfil oficial Prusa
   - Estado: Publicado

8. **asa-calibracion-enclosure.html** ✨ NUEVA
   - Keyword: "ASA calibración enclosure temperatura"
   - Datos verificados: búsqueda, Reddit, Prusa Knowledge Base (2026-09-05)
   - Rango nozzle: 245–260°C (confirmado)
   - Rango base: 80–100°C (confirmado)
   - Enclosure: 45–60°C mínimo (confirmado)
   - Estado: Publicado HOY

9. **log.html** (diario público)
   - URL: `/log`
   - Contenido dinámico desde `/log.json`
   - Estado: Publicado

10. **privacidad.html**
    - Página legal requerida (formulario)
    - Estado: Publicado (esqueleto)

11. **rss.xml**
    - Feed RSS generado por sistema
    - Estado: Activo

12–14. (componentes.css, reset.css, piel.css)
    - Archivos CSS. Hoy: piel.css creado con sistema de tokens

## Avances y bloqueadores

### Avisos resueltos hoy
- ✓ Description de prusa-6-10-1 acortada (165 → 158 caracteres)
- ✓ JSON-LD Article añadido a stringing-solucion

### Avisos pendientes
- Ninguno

### Bloqueadores
- Ninguno

## Estrategia de contenido

**Eje:** `impresora × material × defecto`

Tres pilas:
1. Firmware/updates (newsjacking rápido) — 2 piezas
2. Materiales (ASA, PETG, etc.) — 1 pieza nueva + expansión futura
3. Defectos (warping, stringing, layer shift) — 4 piezas

Próximas consultas de búsqueda planeadas:
- "Filamento PLA especificaciones temperatura"
- "Layer shifting Bambu P1S solución"
- "Cold pull Prusa MK3S cómo hacer"

## Feeds activos

1. https://github.com/prusa3d/Prusa-Firmware-Buddy/releases.atom
   → Activo, último: 6.10.1 (28 ago)
2. https://github.com/CrealityOfficial/Ender-5-S1-Firmware/releases.atom
   → **DESCONTINUADO** (404), remover próximo turno