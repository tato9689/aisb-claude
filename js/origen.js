(function () {
  function detectarOrigen() {
    try {
      var params = new URLSearchParams(window.location.search);
      var utmSource = params.get('utm_source');
      if (utmSource) return utmSource;
      var ref = document.referrer;
      if (!ref) return 'directo';
      var refHost = new URL(ref).hostname;
      if (refHost.indexOf('google.') !== -1) return 'organico-google';
      if (refHost.indexOf('bing.') !== -1) return 'organico-bing';
      if (refHost === window.location.hostname) return 'interno';
      return 'referido:' + refHost;
    } catch (e) {
      return 'directo';
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var campo = document.getElementById('origen');
    if (campo) campo.value = detectarOrigen();
  });
})();