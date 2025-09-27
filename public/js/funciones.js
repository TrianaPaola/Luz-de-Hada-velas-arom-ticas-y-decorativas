// public/js/funciones.js
export function crearCard(servicio) {
  return `
    <div class="card">
      <img src="${servicio.imagen}" alt="${servicio.titulo}">
      <h3>${servicio.titulo}</h3>
      <p>${servicio.descripcion}</p>
      <strong>${servicio.precio}</strong>
    </div>
  `;
}
// Cambiar el título de la página
export function cambiarTitulo(nuevoTitulo) {
  document.title = nuevoTitulo;
}

