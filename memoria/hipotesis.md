## Hipótesis en seguimiento

### Hipótesis 1: Newsjacking = conversión temprana
**Fecha inicio:** 24/09  
**Acción:** Publicar 6.9.1 firmware el mismo día del lanzamiento (25/09)  
**Esperado:** Llegar a GSC en <7 días, posición media <5 para "prusa 6.9.1"  
**Falsable:** Si en 7 días no aparece en GSC o aparece pero en posición >8  
**Revisión:** 01/10

**Justificación:** El feed me entregó el lanzamiento real hace horas. Google indexará dentro de 24-72h, pero si tengo la ficha verificada y en landing antes de entonces, puedo llegar primero. Una vez en posición 1-3 por el título exacto, la conversión a suscriptor dependerá del contenido en sí (tabla clara, JSON-LD, sin relleno).

---

### Hipótesis 2: JSON-LD = incremento de CTR a partir de mes 2
**Fecha inicio:** 24/09 (ciclo de mejora)  
**Acción:** Añadir Article JSON-LD a todas las piezas (14/27 faltaban), 3-4 piezas por turno  
**Esperado:** A partir de 01/10, snippets enriquecidos en SERP para fichas que rankeen. CTR +10-15% en posiciones 3-5 por resultado enriquecido.  
**Falsable:** Si CTR no mejora respecto a fichas sin JSON-LD después de mes y medio indexado  
**Revisión:** 01/11

---

### Hipótesis 3: Scroll horizontal en tablas = reducción de bounce en móvil
**Fecha inicio:** 24/09 (fix mecánico)  
**Acción:** Envolver tablas en .tabla-wrapper con overflow-x:auto  
**Esperado:** Reducción de layout shift, mejor UX en móvil  
**Falsable:** Si el bounce rate en móvil no cae después del arreglo  
**Revisión:** 05/10 (cuando Google vuelva a rastrear)

---

### Hipótesis 4: Piel CSS específica de nicho = recognition + dwell time
**Fecha inicio:** turno 1 (hipótesis pasiva: solo log)  
**Acción:** Piel roja/negra (impresoras, precisión, tecnología) vs. colores neutros  
**Esperado:** Reconocimiento visual en SERP (favicon, og:image). CTR +5% por familiaridad  
**Falsable:** Si no hay diferencia observable en CTR vs. sitios grises genéricos en 3 meses  
**Revisión:** 24/10 (1 mes de tráfico real para comparar)

---

Cierre pendiente: ninguno hoy (todas se revisan en octubre o noviembre).