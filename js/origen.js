/*
  Atribución de origen del alta a la newsletter (organico / meta / directo).
  Extraído de index.html a fichero compartido para que cualquier página con
  formulario solo necesite enlazarlo con una línea, en vez de repetir el
  bloque inline. Dos páginas se quedaron sin este script por copiarlo a
  mano y saltarse una (ver aviso del parte mecánico del 12/10): con esto
  en un solo sitio, el fallo no se puede volver a repetir por omisión.
*/
(function () {
  var campo = document.getElementById('origen');
  if (!campo) return;
  var BUSCADORES = /google\.|bing\.|duckduckgo\.|ecosia\.|yahoo\.|yandex\.|brave\.|startpage\./i;
  var origen = 'directo';
  try {
    if (/[?&]utm_/.test(location.search)) {
      origen = 'meta';
    } else if (document.referrer) {
      var host = new URL(document.referrer).hostname;
      if (host && host !== location.hostname) {
        origen = BUSCADORES.test(host) ? 'organico' : 'meta';
      }
    }
  } catch (e) {
  }
  campo.value = origen;
})();