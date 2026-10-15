(function() {
  'use strict';

  // Detecta si el usuario llega desde un buscador y rellena attribs_origen
  function setOrigenField() {
    var referer = document.referrer.toLowerCase();
    var buscadores = [
      'google', 'bing', 'duckduckgo', 'startpage', 'ecosia',
      'baidu', 'yandex', 'yahoo', 'qwant', 'ask.com',
      'brave', 'kagi', 'search.brave.com'
    ];

    var esOrgánico = buscadores.some(function(b) {
      return referer.indexOf(b) !== -1;
    });

    var campo = document.getElementById('origen');
    if (campo) {
      campo.value = esOrgánico ? 'organico' : 'directo';
    }
  }

  // Ejecuta cuando el DOM está listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setOrigenField);
  } else {
    setOrigenField();
  }
})();