(function () {
  "use strict";

  function dominioDesdeUrl(url) {
    try {
      return new URL(url).hostname.toLowerCase();
    } catch (e) {
      return "";
    }
  }

  function obtenerOrigen() {
    var params;
    try {
      params = new URLSearchParams(window.location.search);
    } catch (e) {
      params = null;
    }

    var utmSource = params ? params.get("utm_source") : null;
    if (utmSource) {
      return "utm:" + utmSource.toLowerCase();
    }

    var ref = document.referrer;
    if (!ref) {
      return "directo";
    }

    var host = dominioDesdeUrl(ref);
    if (!host) {
      return "directo";
    }

    if (host === window.location.hostname) {
      return "interno";
    }

    var buscadores = ["google.", "bing.", "duckduckgo.", "yahoo.", "ecosia.", "brave."];
    for (var i = 0; i < buscadores.length; i++) {
      if (host.indexOf(buscadores[i]) !== -1) {
        return "organico";
      }
    }

    var redes = ["facebook.", "twitter.", "x.com", "t.co", "reddit.", "linkedin.", "instagram.", "threads."];
    for (var j = 0; j < redes.length; j++) {
      if (host.indexOf(redes[j]) !== -1) {
        return "social";
      }
    }

    return "referido:" + host;
  }

  function rellenarCampo() {
    var campo = document.getElementById("origen");
    if (campo) {
      campo.value = obtenerOrigen();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", rellenarCampo);
  } else {
    rellenarCampo();
  }
})();