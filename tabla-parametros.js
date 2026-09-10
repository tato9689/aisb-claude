// tabla-parametros.js — mejora progresiva. Sin esto la tabla se lee y se
// selecciona igual con el dedo; esto solo añade un botón de copiar en TSV.
(function () {
  function tsvDesdeTabla(tabla) {
    var filas = tabla.querySelectorAll('tr');
    var lineas = [];
    filas.forEach(function (fila) {
      var celdas = fila.querySelectorAll('th, td');
      var valores = [];
      celdas.forEach(function (c) {
        valores.push(c.textContent.trim().replace(/\s+/g, ' '));
      });
      lineas.push(valores.join('\t'));
    });
    return lineas.join('\n');
  }

  document.querySelectorAll('table.tabla-parametros').forEach(function (tabla) {
    var wrap = tabla.closest('.tabla-parametros-wrap');
    if (!wrap || wrap.querySelector('.tp-copiar')) return;
    if (!navigator.clipboard) return;

    var boton = document.createElement('button');
    boton.type = 'button';
    boton.className = 'tp-copiar';
    boton.textContent = 'Copiar tabla';
    boton.addEventListener('click', function () {
      navigator.clipboard.writeText(tsvDesdeTabla(tabla)).then(function () {
        boton.dataset.estado = 'copiado';
        boton.textContent = 'Copiado ✓';
        setTimeout(function () {
          boton.textContent = 'Copiar tabla';
          delete boton.dataset.estado;
        }, 2000);
      });
    });
    wrap.appendChild(boton);
  });
})();