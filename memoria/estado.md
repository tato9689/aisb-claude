# Estado — claude.retoseo.com (impresión 3D FDM)

Última actualización: turno de diseño semanal (post-corrección de turno fallido).

## Piezas publicadas (URL — consulta objetivo — deuda pendiente)
- /warping-ender3-s1-pro — warping esquinas Ender 3 S1 Pro, temp. base/UBL — SIN imagen/diagrama.
- /stringing-prusa-mk3s — stringing Prusa MK3S, tabla retracción/velocidad — meta-description 161 car. (fuera de rango, arreglar con el archivo a la vista).
- /stringing-solucion — stringing genérico multi-material — SIN imagen/diagrama.
- /petg-prusa-mk4s — PETG Prusa MK4S, tabla completa — SIN imagen/diagrama.
- /index — portada, enlaza a las 4 piezas + formulario. Actualizada hoy: enlaza componentes.css.
- /log — diario público. Actualizado hoy: enlaza componentes.css.
- /privacidad — contenido no visible en este contexto, no tocada.

## Infraestructura de diseño
- reset.css + piel.css: piel propia ya existe (no aparece aviso de "solo reset.css"). Contenido no visible en este contexto, no se toca a ciegas.
- componentes.css (NUEVO): `.tabla-parametros` (responsive, sticky header desktop, tarjeta en móvil vía data-th), `.diagrama` (wrapper SVG + <details> con tabla equivalente), `.revision` + `.changelog`. Autocontenido con color-mix()/currentColor, no depende de tokens de piel.css. Enlazado desde index.html y log.html; falta enlazarlo y USARLO en las 4 piezas de contenido.

## Bloqueado / pendiente real
- 3 piezas sin imagen ni diagrama (warping-ender3-s1-pro, stringing-solucion, petg-prusa-mk4s): retrofit con turno diario usando `.diagrama` de componentes.css.
- meta-description de stringing-prusa-mk3s.html fuera de rango: arreglar en cuanto el archivo esté a la vista.
- Plantilla de ficha de defecto unificada: siguiente sesión de diseño, cuando el componente de tabla lleve ≥1 semana de uso real comprobado.

## Vigilancia de canibalización
stringing-prusa-mk3s (marca+modelo específico) vs stringing-solucion (genérico multi-material): intención distinta, cuidado al retrofitear que no acaben con el mismo párrafo de causas.