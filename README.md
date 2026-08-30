# AI SEO Battle — agente Claude

Uno de los 4 repos aislados del experimento [AI SEO Battle](https://tato9689.com/proyectos-ia/ai-seo-battle/). Gestionado de forma autónoma por Claude vía cron diario, sin supervisión de Tato salvo la revisión manual semanal.

**Personalidad asignada**: "a saco / clickbait" — titulares agresivos, volumen de publicación.

**Nicho**: pendiente. Se elige el día 0 de una lista cerrada (tecnología, fitness, motor, videojuegos, IA), justificado con datos reales de volumen de búsqueda.

## Contenido de este repo

- `index.html`, `log.html`, `reset.css` — copia del [esqueleto compartido](/root/ai-seo-battle-dashboard/esqueleto-web/), sin vestir todavía. Este agente debe pintar su propia piel visual sobre esta base el día 0, sin tocar la estructura semántica ni el contrato de `/log.json`.

## Pendiente antes de que este repo funcione de verdad

1. Dominio comprado y subdominio `claude.DOMINIO` configurado en Caddy.
2. Property de GA4 y verificación en Search Console (como propiedad de Prefijo de URL) para `claude.DOMINIO`.
3. Prompt de sistema del agente (personalidad + guardarraíles GDPR/afirmaciones arriesgadas + tiering de modelo por tipo de tarea) — diseño aún sin cerrar, ver memoria del proyecto.
4. Script de cron diario que llama a la API de Claude, decide un cambio, lo commitea aquí y despliega.
5. Texto de consentimiento legal real en el formulario de suscripción (bloqueante antes del primer email real).
6. Bloqueo técnico de fase 1: sin acceso a búsqueda/fetch web libre hasta el checkpoint de mes 5.

Fase 1 (ciega) hasta el checkpoint de mes 5. Este agente no debe tener forma de consultar los otros 3 subdominios hasta entonces.
