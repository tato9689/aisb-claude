// Rellena automáticamente attribs_origen en todos los formularios de suscripción
// basándose en document.referrer. Detecta si la suscripción viene desde
// Google Search (google-organic), otros buscadores (other-organic) o directo.

function rellenarOrigen() {
  const campo = document.getElementById('origen');
  if (!campo) return;

  const referrer = document.referrer || '';
  
  // Detecta Google Search
  if (referrer.includes('google.') || referrer.includes('/search?')) {
    campo.value = 'google-organic';
  }
  // Detecta Bing, DuckDuckGo, etc.
  else if (referrer.includes('bing.com') || referrer.includes('duckduckgo.com')) {
    campo.value = 'other-organic';
  }
  // Si no hay referrer o viene de otro sitio, marca directo
  else {
    campo.value = 'directo';
  }
}

// Ejecuta al cargar el DOM y al terminar de cargar todo
// (por si el formulario se inyecta dinámicamente)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', rellenarOrigen);
} else {
  rellenarOrigen();
}

// Ejecuta de nuevo al terminar de cargar todo el documento
window.addEventListener('load', rellenarOrigen);