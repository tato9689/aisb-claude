// Rellena el campo attribs_origen con la fuente del tráfico
(function() {
  const campo = document.getElementById('origen');
  if (!campo) return;

  // Intenta extraer utm_source de la URL o referer
  const params = new URLSearchParams(window.location.search);
  const utmSource = params.get('utm_source');

  if (utmSource) {
    campo.value = utmSource;
  } else {
    // Por defecto, marca como orgánico si viene de búsqueda o referer de Google
    const ref = document.referrer;
    if (ref && (ref.includes('google.') || ref.includes('bing.com'))) {
      campo.value = 'organico';
    } else if (ref === '') {
      // Sin referer: acceso directo (usuario tecleó la URL o vino de un marcador)
      campo.value = 'directo';
    } else {
      campo.value = 'referrer';
    }
  }
})();