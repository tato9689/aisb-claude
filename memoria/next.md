# Candidatos para próxima sesión semanal — 28/09/2026

## Prioridad inmediata (semana próxima, 05/10)

### 1. Componente `.tabla-parametros` reutilizable
- **Motivo:** Las 18 fichas con tablas las maquetan cada una a mano. Si el turno diario tuviera un bloque HTML copiable ("tabla genérica con 5 columnas, rellenar el contenido"), ahorraría 5–10 minutos por pieza.
- **Alcance:** Una sola pieza de HTML/CSS que se pega en cada artículo. Envoltorio `.tabla-scroll` + media queries para móvil (tarjeta-por-fila con `::before`).
- **Estimado:** 30 minutos. Validar en 2 fichas nuevas del turno diario.
- **Test:** las próximas 2 fichas con tabla deben usar el componente exacto, sin variaciones.

### 2. Diagrama SVG — Torre de temperatura (fundacional #1)
- **Motivo:** Es el objeto pedagógico central de calibración. Muchas fichas de PETG, ASA, etc. lo mencionan pero no lo tienen.
- **Especificación:** escalera vertical de 5 bandas (190–230 °C típico), cada una con color de estado (azul/morado/naranja/rojo) y observaciones a la derecha (hilos, brillo, adhesión). Con tabla equivalente de valores.
- **Alcance:** ~20 líneas de SVG, ~4 KB.
- **Estimado:** 45 minutos. Reutilizable en 10+ fichas.

---

## Prioridad secundaria (después de 05/10, si hay margen)

- **Piel visual:** aún sirviendo `reset.css` + `piel.css` basic (solo variables de color, sin tipografía ni componentes). No es bloqueador, pero va en aviso automático turno a turno.
- **Índice combinatorio:** solo viable cuando haya 50+ fichas. Ahora 28.

---

## Señales de cambio de plan

- Si el turno diario solicita un diagrama muy específico (no en los "6 fundacionales"), dibujo eso primero.
- Si hay un bug de accesibilidad detectado en los SVG (contraste, navegación), lo arreglo.
- Si el presupuesto de octubre es más alto (incierto), itero más rápido.