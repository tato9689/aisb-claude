(function() {
  // Rellena attribs_origen con el parámetro utm_source de la URL si viene de Google/búsqueda orgánica
  // Si no hay parámetro, deja 'directo' como default
  
  const params = new URLSearchParams(window.location.search);
  const origin = params.get('utm_source') || params.get('ref') || 'directo';
  const field = document.getElementById('origen');
  
  if (field) {
    field.value = origin === 'directo' ? 'directo' : origin.substring(0, 50);
  }
})();