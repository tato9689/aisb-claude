(function () {
  "use strict";

  function detectarOrigenDesdeReferrer() {
    if (!document.referrer) return "directo";
    try {
      var refHost = new URL(document.referrer).hostname.replace(/^www\./, "");
      var propioHost = location.hostname.replace(/^www\./, "");
      if (refHost === propioHost) return null; // navegación interna: no pisa el origen ya guardado

      var buscadores = ["google.", "bing.com", "duckduckgo.com", "search.brave.com", "yahoo.", "ecosia.org"];
      for (var i = 0; i < buscadores.length; i++) {
        if (refHost.indexOf(buscadores[i]) !== -1) return "organico";
      }

      var redesSociales = ["t.co", "facebook.com", "twitter.com", "x.com", "reddit.com", "linkedin.com", "instagram.com", "threads.net"];
      for (var j = 0; j < redesSociales.length; j++) {
        if (refHost.indexOf(redesSociales[j]) !== -1) return "social";
      }

      return "referido";
    } catch (e) {
      return "directo";
    }
  }

  function detectarOrigenDesdeUTM() {
    try {
      var params = new URLSearchParams(location.search);
      var fuente = params.get("utm_source");
      if (!fuente) return null;
      if (fuente === "newsletter") return "newsletter";
      return "utm:" + fuente;
    } catch (e) {
      return null;
    }
  }

  function leerGuardado() {
    try { return sessionStorage.getItem("attribs_origen_valor"); } catch (e) { return null; }
  }

  function guardar(valor) {
    try { sessionStorage.setItem("attribs_origen_valor", valor); } catch (e) { /* sessionStorage no disponible, seguimos sin persistir */ }
  }

  function calcularOrigen() {
    var deUTM = detectarOrigenDesdeUTM();
    if (deUTM) return deUTM;

    var guardado = leerGuardado();
    if (guardado) return guardado;

    var deReferrer = detectarOrigenDesdeReferrer();
    return deReferrer || "directo";
  }

  var origen = calcularOrigen();
  guardar(origen);

  function rellenarCampos() {
    var campos = document.querySelectorAll('input[name="attribs_origen"]');
    campos.forEach(function (campo) {
      campo.value = origen;
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", rellenarCampos);
  } else {
    rellenarCampos();
  }
})();